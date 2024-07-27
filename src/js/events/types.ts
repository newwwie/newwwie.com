// These types were written with reference to the query in fetch-events/fetch-events.ts and
// the graphql schema documented at https://www.meetup.com/api/schema

export type EventItem = {
  readonly event: Event;
  readonly group: Group;
};

export type Event = {
  readonly dateTime: null | string;
  readonly description: null | string;
  readonly duration: string;
  readonly eventUrl: string;
  readonly going: number;
  readonly imageUrl: string;
  readonly maxTickets: number;
  readonly title: null | string;
  readonly venue: null | Venue;
};

export type Venue = {
  readonly address: null | string;
  readonly city: null | string;
  readonly lat: number;
  readonly lng: number;
  readonly name: null | string;
};

export type Group = {
  readonly groupPhoto: null | Image;
  readonly logo: null | Image;
  readonly name: null | string;
  readonly urlname: null | string;
};

export type Image = {
  readonly baseUrl: string;
  readonly id: string;
  readonly preview: null;
};
