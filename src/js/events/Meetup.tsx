import { ComponentChildren, render } from "preact";
import { events } from "./events-data";
import { EventItem, Group, Image, Venue } from "./types";

export class Meetup {
  /**
   * @name meetupResponse
   * @description Callback function triggered by calling the Meetup script
   * @see https://www.meetup.com/meetup_api/docs/
   *
   * @param {object} response The JSON response from the Meetup API
   */
  constructor() {
    this.render(events);
  }

  /**
   * @name render
   * @description Handle the response from the Meetup API
   */
  render(events: readonly EventItem[]) {
    // Check to make sure we have at least 1 result
    if (events.length > 0) {
      render(this.renderList(events), document.getElementById("meetupEvents"));
    } else {
      // We have no results, let the user know we have no upcoming events
      render(
        <li>
          <p>It appears there are no upcoming events. Check back soon.</p>
        </li>,
        document.getElementById("meetupEvents"),
      );
    }
  }

  /**
   * @name renderList
   * @description Render the response from meetup onto the page utilising Preact
   *
   * @see https://www.meetup.com/meetup_api/docs/2/events/ for full documentation of the results object
   */
  renderList(results: readonly EventItem[]) {
    return results.map((item, i) => {
      const { event, group } = item;
      const startTime = new Date(event.dateTime);
      const prettyDay = this.niceDay(startTime.getDay());
      const prettyMonth = this.niceMonth(startTime.getMonth());
      const prettyTime = this.niceTime(startTime);

      return (
        <li class="eventItem">
          <div class="eventItem-left">
            {this.renderImage(group, event.photoUrl)}
            <div class="eventItem-start">
              <span class="eventItem-start_day">{prettyDay}</span>
              <span class="eventItem-start_time">{prettyTime}</span>
              <span class="eventItem-start_month">
                {startTime.getDate()} {prettyMonth}
              </span>
              <span class="eventItem-start_year">{startTime.getFullYear()}</span>
            </div>
          </div>
          <div class="eventItem-right">
            <p class="eventItem-title">{event.title}</p>
            <p class="eventItem-group">
              Hosted by: <a href={`https://meetup.com/${group.urlname}`}>{group.name}</a>
            </p>

            <p class="eventItem-description">{event.description.substring(0, 240)}...</p>
            <ul class="eventItem-stats">
              <li class="eventItem-stats_rsvp" title="Number of people who have RSVP'd vs. the total number of spots">
                <svg
                  version="1.1"
                  class="eventItem-stats_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 482.9 482.9"
                  style="enable-background:new 0 0 482.9 482.9;"
                >
                  <g>
                    <g>
                      <path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z" />
                      <path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z" />
                    </g>
                  </g>
                </svg>
                {event.going} / {event.maxTickets ? event.maxTickets : "\u221E"}
              </li>
              <li class="eventItem-stats_duration" title="Duration of the event">
                <svg
                  version="1.1"
                  class="eventItem-stats_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  style="enable-background:new 0 0 60 60;"
                >
                  <g>
                    <path
                      d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                    />
                    <path d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z" />
                  </g>
                </svg>
                {this.parseIsoDuration(event.duration)}
              </li>
              <li class="eventItem-stats_location" title="Location of the event">
                <svg
                  version="1.1"
                  class="eventItem-stats_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 54.757 54.757"
                  style="enable-background:new 0 0 54.757 54.757;"
                >
                  <g>
                    <path d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z" />
                    <path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031C45.576,13.08,46.321,24.468,41.099,31.431z" />
                  </g>
                </svg>
                {this.renderLocationLink(event.venue)}
              </li>
            </ul>
          </div>
          <a class="button" href={event.eventUrl}>
            More info
          </a>
        </li>
      );
    });
  }

  /**
   * @name renderImage
   * @description Display the image from the group or meetup, if not supplied, fallback to CSS placeholder.
   *
   * @param {object} group
   * @param {string} photo_url
   *
   * @returns {object} JSX Object for image / placeholder
   */
  renderImage(group: Group, photo_url?: string) {
    let contents: ComponentChildren = "";
    let containerClass = "eventItem-image";

    if (group.groupPhoto) {
      contents = <img src={this.renderImageLink(group.groupPhoto)} alt={group.name} class="eventItem-groupPhoto" />;
    } else if (photo_url) {
      contents = <img src={photo_url} alt={group.name} class="eventItem-image_photo" />;
    } else {
      containerClass += " eventItem-image_notSupplied";
    }

    return <div class={containerClass}>{contents}</div>;
  }

  /**
   * @name renderLocationLink
   * @description Not all events have location data, we need to conditionally show information based on what's supplied.
   *
   * @returns {object} JSX Object for location based on available data
   */
  renderLocationLink(venue: Venue) {
    if (venue) {
      if (venue.hasOwnProperty("lat") && venue.hasOwnProperty("lng")) {
        return (
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(venue.name)}/@${venue.lat},${venue.lng},16z`}
            target="_blank"
          >
            <span>
              {venue.address}, {venue.city} -{" "}
            </span>
            View on Google
          </a>
        );
      } else {
        return (
          <em>
            <span>{venue.address},</span> {venue.city}
          </em>
        );
      }
    }

    return <em>Not specified</em>;
  }

  renderImageLink(photo: Image, size: string = "676x380") {
    return `${photo.baseUrl}${photo.id}/${size}.webp`;
  }

  /**
   * @name niceTime
   * @description Create a human-readable time. Has backwards compatability for browsers that don't have full support for toLocaleString
   *
   * @param {object} date
   *
   * @returns {string} The time in a human-readable format
   */
  niceTime(date: Date) {
    try {
      return date.toLocaleString("en-US", { hour: "numeric", hour12: true, minute: "2-digit" });
    } catch (e) {
      let prettyHours = this.niceHours(date.getHours());
      return `${prettyHours}:${date.getMinutes()}`;
    }
  }

  /**
   * @name niceHours
   * @description Converts the hour value into 12 hour format
   *
   * @param {number} hour
   *
   * @returns {number} The hour in human-readable format
   */
  niceHours(hour: number) {
    return (hour + 24) % 12 || 12;
  }

  /**
   * @name niceDay
   * @description Returns a string of the current day corresponding to the number supplied
   *
   * @returns {string} The day of the week in human-readable form
   */
  niceDay(day: number, slice: boolean = true) {
    let days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    if (slice === true) {
      return days[day].slice(0, 3);
    }

    return days[day];
  }

  /**
   * @name niceMonth
   * @description Return our month in a human-readable format
   *
   * @param month The month to translate
   * @param slice If we want to show the abbreviation or full word, defaults to abbreviation
   *
   * @returns {string} The month in human-readable form
   */
  niceMonth(month: number, slice: boolean = true) {
    let months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    if (slice === true) {
      return months[month].slice(0, 3);
    }

    return months[month];
  }

  parseIsoDuration(isoDuration: string) {
    const DURATION_REGEX =
      /P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/;
    const { groups } = isoDuration.match(DURATION_REGEX);
    return Object.keys(groups).reduce((p, n) => (groups[n] ? p + `${groups[n]} ${n}` : p), "");
  }
}
