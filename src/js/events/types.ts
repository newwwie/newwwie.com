// These types were written with reference to the query in fetch-events/index.js and
// the graphql schema documented at https://www.meetup.com/api/schema

export type EventItem = {
  readonly event: Event;
  readonly group: Group;
};

export type Event = {
  readonly title: null | string;
  readonly description: null | string;
  readonly dateTime: null | string;
  readonly eventUrl: string;
  readonly going: number;
  readonly maxTickets: number;
  readonly duration: string;
  readonly imageUrl: string;
  readonly venue: null | Venue;
};

export type Venue = {
  readonly name: null | string;
  readonly lat: number;
  readonly lng: number;
  readonly address: null | string;
  readonly city: null | string;
};

export type Group = {
  readonly name: null | string;
  readonly urlname: null | string;
  readonly groupPhoto: null | Image;
  readonly logo: null | Image;
};

export type Image = {
  readonly id: string;
  readonly baseUrl: string;
  readonly preview: null;
};
