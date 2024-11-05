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
  going: number;
  imageUrl: string;
  maxTickets: number;
  title: string;
  venue: Venue | null;
};

export type Venue = {
  address: null | string;
  city: null | string;
  lat: number;
  lng: number;
  name: null | string;
};

export type Group = {
  groupPhoto: null | Image;
  logo: null | Image;
  name: string;
  urlname: string;
};

export type Image = {
  baseUrl: string;
  id: string;
  preview: null;
};
