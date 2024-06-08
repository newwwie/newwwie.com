import _ from "lodash";
import axios from "axios";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { renderString } from "nunjucks";

import { EventItem } from "../src/js/events/types";
import { GroupEdge, GroupResponse } from "./types";
import { Meetups } from "./meetups.json";

dayjs.extend(isBetween);

const MEETUP_GQL_URL = "https://www.meetup.com/gql";
const FORWARD_DAYS_FILTER = 90; // Days to filter results on
const EVENT_OUTPUT_FILE = path.join(__dirname, "../src/js/events/events-data.ts");
const EVENT_TEMPLATE_FILE = path.join(__dirname, "./event-data-template.njk");

const buildGraphQLQuery = (name: string) => ({
  query: `query { groupByUrlname(urlname: "${name}") { name urlname groupPhoto {id baseUrl preview} logo { id baseUrl preview} unifiedEvents {edges{node {title description dateTime eventUrl going maxTickets duration imageUrl venue {name lat lng address city}}}} } }`,
});

const getGroupEvents = async (groupName: string): Promise<EventItem[]> => {
  console.log(`Fetching events for "${groupName}"`);
  const query = buildGraphQLQuery(groupName);
  const events = (await axios.post(MEETUP_GQL_URL, JSON.stringify(query))).data as GroupResponse;

  // Transform the response
  const { unifiedEvents, ...group } = events.data.groupByUrlname || {};
  return (
    unifiedEvents?.edges?.map((edge: GroupEdge) => ({
      event: edge.node,
      group,
    })) || []
  );
};

const filterEventsByDate = (event: EventItem): boolean => {
  // Filter between current date and future date, with 'day' granularity and inclusive on both ends
  return dayjs(event.event.dateTime).isBetween(dayjs(), dayjs().add(FORWARD_DAYS_FILTER, "day"), "day", "[]");
};

(async () => {
  try {
    console.log("Fetching events");
    const events = await Promise.all(Meetups.map((eventName: string) => getGroupEvents(eventName)));

    const sortedEvents = _.sortBy(events.flat().filter(filterEventsByDate), (event: EventItem) => event.event.dateTime);

    console.log("Rendering the events file");
    const template = readFileSync(EVENT_TEMPLATE_FILE, "utf-8");
    const rendered = renderString(template, {
      generationTime: dayjs().toISOString(),
      sortedEvents,
    });

    writeFileSync(EVENT_OUTPUT_FILE, rendered);

    console.log("Fetch events complete");
  } catch (err) {
    console.error(`Error fetching events: ${err}`);
  }
})();
