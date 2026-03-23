import { Event, Group } from "../src/js/events/types";

export type GroupEdge = {
  node: Event;
};

export type GroupResponse = {
  data: {
    groupByUrlname: Group & {
      events: {
        edges: GroupEdge[];
      };
    };
  };
};

// Sandbox available at https://www.meetup.com/graphql/playground/

export const MEETUP_GQL_QUERY = `
query ($groupName: String!, $beforeDate: DateTime) {
    groupByUrlname(urlname: $groupName) {
        name
        urlname
        keyGroupPhoto {
            id
            baseUrl
        }
        events(
            filter: { beforeDateTime: $beforeDate }
            sort: ASC
        ) {
            edges {
                node {
                    description
                    eventUrl
                    dateTime
                    
                    venue {
                        name
                        lat
                        lon
                        address
                        city
                    }
                    title
                    displayPhoto {
                        baseUrl
                        id
                    }
                    rsvps {
                        totalCount
                    }
                    maxTickets
                    duration
                }
            }
        }
    }
}`;
