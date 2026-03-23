// These types were written with reference to the query in fetch-events/fetch-events.ts and
// the graphql schema documented at https://www.meetup.com/api/schema

export type EventItem = {
  event: Event;
  group: Group;
};

export type Event = {
  dateTime: string;
  description: string;
  duration: string;
  eventUrl: string;
  maxTickets: number;
  title: string;
  venue: Venue | null;
  displayPhoto: Image;
  rsvps: {
    totalCount: number;
  };
};

export type Venue = {
  address: null | string;
  city: null | string;
  lat: number;
  lon: number;
  name: null | string;
};

export type Group = {
  name: string;
  urlname: string;
  keyGroupPhoto: Image;
};

export type Image = {
  baseUrl: string;
  id: string;
};
