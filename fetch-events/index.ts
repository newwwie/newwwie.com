import axios from "axios";
import { MeetupGroupEdge, MeetupGroupResponse, MEETUPS, TransformedMeetupEvent } from "./types";
import * as _ from "lodash";
import * as dayjs from "dayjs";
import * as path from "path";
import { writeFileSync } from "fs";

const MEETUP_GQL_URL = "https://www.meetup.com/gql";
const FUTURE_DAYS = 90;
const OUTPATH = path.join(__dirname, "../src/js/events/events-data.ts");

const buildGraphQLQuery = (name: string) => ({
  query: `query { groupByUrlname(urlname: "${name}") { name urlname groupPhoto {id baseUrl preview} logo { id baseUrl preview} unifiedEvents {edges{node {title description dateTime eventUrl going maxTickets duration imageUrl venue {name lat lng address city}}}} } }`,
});

const getGroupEvents = async (groupName: string): Promise<TransformedMeetupEvent[]> => {
  const query = buildGraphQLQuery(groupName);
  const events = (await axios.post(MEETUP_GQL_URL, JSON.stringify(query))).data as MeetupGroupResponse;

  // Transform the response
  const { unifiedEvents, ...group } = events.groupByUrlname || {};
  return unifiedEvents?.edges?.map((edge: MeetupGroupEdge) => ({
    event: edge.node,
    group,
  }));
};

(async () => {
  const events = await Promise.all(MEETUPS.map((eventName: string) => getGroupEvents(eventName)));
  const sortedEvents = events.flat().filter((event: TransformedMeetupEvent) => {
    const eventTime = dayjs(event.event.dateTime);
    return dayjs().isBefore(eventTime) && eventTime.isBefore(dayjs().add(FUTURE_DAYS, "day"));
  });

  writeFileSync(
    OUTPATH,
    `// Auto Generated on ${new Date().toISOString()}\nimport { type EventItem } from "./types";\n\nexport const events: readonly EventItem[] = ${JSON.stringify(sortedEvents, null, 2)}`,
  );
})();
