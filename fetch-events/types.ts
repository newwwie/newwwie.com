import { Event, Group } from "../src/js/events/types";

export type GroupEdge = {
  node: Event;
};

export type GroupResponse = {
  data: {
    groupByUrlname: Group & {
      unifiedEvents: {
        edges: GroupEdge[];
      };
    };
  };
};

// Sandbox available at https://www.meetup.com/api/playground/#graphQl-playground
export const MEETUP_GQL_QUERY = `
query ($groupName: String!, $endDate: ZonedDateTime) {
  groupByUrlname(
    urlname: $groupName
  ) {
    name
    urlname
    groupPhoto {
      id
      baseUrl
      preview
    }
    logo {
      id
      baseUrl
      preview
    }
    unifiedEvents(
      filter: {
        endDateRange: $endDate
      }
    ) {
      edges {
        node {
          title
          description
          dateTime
          eventUrl
          going
          maxTickets
          duration
          imageUrl
          venue {
            name
            lat
            lng
            address
            city
          }
        }
      }
    }
  }
}`;
