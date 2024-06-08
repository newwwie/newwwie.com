import axios from "axios";
import { MeetupGroupEdge, MeetupGroupResponse, MEETUPS, TransformedMeetupEvent } from "./types";
import _ from "lodash";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { renderString } from "nunjucks";

dayjs.extend(isBetween);

const MEETUP_GQL_URL = "https://www.meetup.com/gql";
const FORWARD_FILTER = 90; // Days to filter results on
const OUTPATH = path.join(__dirname, "../src/js/events/events-data.ts");
const TEMPLATE_FILE = path.join(__dirname, "./event-data-template.njk");

const buildGraphQLQuery = (name: string) => ({
  query: `query { groupByUrlname(urlname: "${name}") { name urlname groupPhoto {id baseUrl preview} logo { id baseUrl preview} unifiedEvents {edges{node {title description dateTime eventUrl going maxTickets duration imageUrl venue {name lat lng address city}}}} } }`,
});

const getGroupEvents = async (groupName: string): Promise<TransformedMeetupEvent[]> => {
  const query = buildGraphQLQuery(groupName);
  const events = (await axios.post(MEETUP_GQL_URL, JSON.stringify(query))).data as MeetupGroupResponse;

  // Transform the response
  const { unifiedEvents, ...group } = events.data.groupByUrlname || {};
  return (
    unifiedEvents?.edges?.map((edge: MeetupGroupEdge) => ({
      event: edge.node,
      group,
    })) || []
  );
};

const filterEventsByDate = (event: TransformedMeetupEvent): boolean => {
  // Filter between current date and future date, with 'day' granularity and inclusive on both ends
  return dayjs(event.event.dateTime).isBetween(dayjs(), dayjs().add(FORWARD_FILTER, "day"), "day", "[]");
};

(async () => {
  try {
    const events = await Promise.all(MEETUPS.map((eventName: string) => getGroupEvents(eventName)));
    const sortedEvents = _.sortBy(
      events.flat().filter(filterEventsByDate),
      (event: TransformedMeetupEvent) => event.event.dateTime,
    );

    // Render the template
    const template = readFileSync(TEMPLATE_FILE, "utf-8");
    const rendered = renderString(template, {
      generationTime: dayjs().toISOString(),
      sortedEvents,
    });

    writeFileSync(OUTPATH, rendered);
  } catch (err) {
    console.error(`Error fetching events: ${err}`);
  }
})();
