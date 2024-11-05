import { render } from "preact";
import { CommunityCard } from "./CommunityCard";
import { communityData } from "./community-data";

import { Component } from "preact";

export class Communities extends Component {
  constructor() {
    super();
    this.render();
  }

  render() {
    // Check to make sure we have at least 1 result
    if (communityData.length !== 0) {
      return communityData.map((community) => <CommunityCard data={community} />);
    }

    // We have no results, let the user know we have no upcoming events
    return (
      <li>
        <p>It appears there are no upcoming events. Check back soon.</p>
      </li>
    );
  }
}

const parent = document.getElementById("groups") ?? document.body;

render(<Communities />, parent);
