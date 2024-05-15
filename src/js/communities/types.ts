export type CommunityGroup = {
  readonly name: string;
  readonly location: string;
  readonly period: CommunityPeriod;
  readonly links: CommunityLinks;
  readonly demographic: string;
  readonly format: string;
};

export type CommunityPeriod = {
  readonly interval: string;
  readonly day: string;
  readonly weekDay: string;
};

export type CommunityLinks = {
  readonly twitter?: string;
  readonly facebook?: string;
  readonly website?: string;
  readonly meetUp?: string;
  readonly linkedIn?: string;
};
