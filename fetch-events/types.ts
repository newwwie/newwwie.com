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
