export type CommunityGroup = {
  readonly demographic: string;
  readonly format: string;
  readonly links: CommunityLinks;
  readonly location: string;
  readonly name: string;
  readonly period: CommunityPeriod;
};

export type CommunityPeriod = {
  readonly day: string;
  readonly interval: string;
  readonly weekDay: string;
};

export type CommunityLinks = {
  readonly facebook?: string;
  readonly linkedIn?: string;
  readonly meetUp?: string;
  readonly twitter?: string;
  readonly website?: string;
};
