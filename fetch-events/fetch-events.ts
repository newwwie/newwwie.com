import * as _ from "lodash";
import axios from "axios";
import { DateTime } from "luxon";
import * as path from "path";
import { readFileSync, writeFileSync } from "fs";
import { renderString } from "nunjucks";

import { EventItem } from "../src/js/events/types";
import { GroupEdge, GroupResponse, MEETUP_GQL_QUERY } from "./types";
import { Meetups } from "./meetups.json";

const MEETUP_GQL_URL = "https://www.meetup.com/gql";
const END_DATE_RANGE = DateTime.now().plus({ months: 3 }).toISO(); // Retrieve up to three months from the current date
const EVENT_OUTPUT_FILE = path.join(__dirname, "../src/js/events/events-data.ts");
const EVENT_TEMPLATE_FILE = path.join(__dirname, "./event-data-template.njk");

const buildGraphQLQuery = (groupName: string) => ({
  query: MEETUP_GQL_QUERY,
  variables: {
    groupName,
    endDateRange: END_DATE_RANGE,
  },
});

const getGroupEvents = async (groupName: string): Promise<EventItem[]> => {
  console.log(`Fetching events for "${groupName}"`);
  const query = buildGraphQLQuery(groupName);
  const events = (await axios.post(MEETUP_GQL_URL, JSON.stringify(query))).data as GroupResponse;

  // Transform the response
  const { unifiedEvents, ...group } = events.data.groupByUrlname || {};

  console.log(`Finished fetching events for "${groupName}"`);
  return (
    unifiedEvents?.edges?.map((edge: GroupEdge) => ({
      event: edge.node,
      group,
    })) || []
  );
};

(async () => {
  try {
    console.log("Fetching events");
    const events = await Promise.all(Meetups.map((eventName: string) => getGroupEvents(eventName)));

    const sortedEvents = _.sortBy(events.flat(), (event: EventItem) => event.event.dateTime);

    console.log("Rendering the events file");
    const template = readFileSync(EVENT_TEMPLATE_FILE, "utf-8");
    const rendered = renderString(template, {
      generationTime: DateTime.now().toISO(),
      sortedEvents,
    });

    writeFileSync(EVENT_OUTPUT_FILE, rendered);

    console.log("Fetch events complete");
  } catch (err) {
    console.error(`Error fetching events: ${err}`);
  }
})();
