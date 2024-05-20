const fetch = require("node-fetch");
const eventUrlNames = require("./meetups");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const buildGraphQLQuery = (name) => ({
  query: `query { groupByUrlname(urlname: "${name}") { name urlname groupPhoto {id baseUrl preview} logo { id baseUrl preview} unifiedEvents {edges{node {title description dateTime eventUrl going maxTickets duration imageUrl venue {name lat lng address city}}}} } }`,
});

const getGroupEvents = (group) => {
  const query = buildGraphQLQuery(group);
  return fetch("https://www.meetup.com/gql", {
    method: "POST",
    body: JSON.stringify(query),
  }).then((r) => r.json());
};

const transformEvents = (graphqlResponse) => {
  const { unifiedEvents, ...group } = graphqlResponse.data.groupByUrlname || {};
  return (unifiedEvents || { edges: [] }).edges.map((e) => {
    return {
      event: e.node,
      group: group,
    };
  });
};

const filterEventsNext90Days = (e) => {
  const eventDate = new Date(e.event.dateTime);
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days <= 90;
};

Promise.all(
  eventUrlNames.map((event) => {
    return getGroupEvents(event).then(transformEvents);
  }),
).then((events) => {
  const sortedEvents = _.sortBy(events.flat().filter(filterEventsNext90Days), (e) => e.event.dateTime);
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "js", "events", "events-data.ts"),
    `// Auto Generated on ${new Date().toISOString()}\nimport { type EventItem } from "./types";\n\nexport const events: readonly EventItem[] = ${JSON.stringify(sortedEvents, null, 2)}`,
  );
});
