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

const filterEventsNext30Days = (e) => {
  const eventDate = new Date(e.event.dateTime);
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days <= 31;
};

Promise.all(
  eventUrlNames.map((event) => {
    return getGroupEvents(event).then(transformEvents);
  })
).then((events) => {
  const sortedEvents = _.sortBy(events.flat().filter(filterEventsNext30Days), (e) => e.event.dateTime);
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "js", "events", "events-data.js"),
    `// Auto Generated on ${new Date().toISOString()}\n module.exports = ${JSON.stringify(sortedEvents, null, 2)}`
  );
});
