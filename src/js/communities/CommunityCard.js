import {h} from 'preact'

export const  CommunityCard = (props)=>{
    const {name, location, period: {interval, day, weekDay}, links: {twitter, facebook, website, meetUp, linkedIn}, 
    demographic, format} = props.data;
    return (
        <div class="card">
        <h4>
    <a href={
      // Uses the group's Meetup link if they don't have a website
      website ? website : meetUp} >{name}</a>
  </h4>
  <dl>
    <dt>Links:</dt>
    <dd>
      <ul>
        {   // Some of these groups only have a handful of links
            // Need to dynamically render each column depending on whether a given link exist
        }
        {linkedIn ? <li><a href={linkedIn} rel="external">LinkedIn</a></li> : ""}
        {facebook ? <li><a href={facebook} rel="external">Facebook</a></li> : ""}
        {meetUp ? <li><a href={meetUp} rel="external">MeetUp</a></li> : ""}
        {twitter ? <li><a href={twitter} rel="external">Twitter</a></li> : ""}
      </ul>
    </dd>
    <dt>When:</dt>
        <dd>{interval}, {weekDay} {day}</dd>
    <dt>Where:</dt>
        <dd>{location}</dd>
    <dt>Who:</dt>
        <dd>{demographic}</dd>
    <dt>Format:</dt>
        <dd>{format}</dd>
    </dl>
    </div>
    );
}
