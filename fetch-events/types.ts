export const MEETUPS = [
  "NewcastleJS-JavaScript-Meetup",
  "Agile-Newcastle",
  "Newcastle-Coders-Group",
  "Newcastle-Software-Development-Meetup",
  "Blast-Furnace",
  "Newcastle-IoT-Pioneers",
  "The-Things-Network-Meetup-Newcastle-Lake-Macquarie",
  "Newcastle-Data-Analytics-Meetup",
  "Newcastle-Futurists",
  "IxDA-Newcastle",
  "Core-Electronics-Workshops",
  "TOOOL-au-Newcastle-Locksport-Security-Enthusiast-Meetup",
  "Newcastle-Virtual-Reality-Meetup",
  "Diversity-in-Technology-Newcastle",
  "Newcastle-SEO",
  "meetup-group-xveezgem",
  "Blockchain-Incubator-Tank",
  "Hunter-Information-and-Analytics-Forum",
  "Crypto-Newcastle-Intelligence-Traded",
  "Newcastle-Blockchain",
  "Newcastle-Infracoders",
  "Newcastle-Cyber-Security-Group",
  "qa-newcastle",
  "newcastle-women-and-gender-diverse-people-in-tech",
  "newcastle-salesforce-community-group",
  "blockchain-newcastle",
];

export type TransformedMeetupEvent = {
  event: Record<string, any>; // TODO: dateTime
  group: Record<string, any>;
};

// Simplified versions of the meetup response types
export type MeetupGroupEdge = {
  node: Record<string, any>;
};

export type MeetupGroupResponse = {
  data: {
    groupByUrlname: {
      unifiedEvents: {
        edges: MeetupGroupEdge[];
      };
    };
  };
};
