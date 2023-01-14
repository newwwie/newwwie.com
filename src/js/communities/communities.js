import {Communities} from "./communities-data.js";
const renderArea = document.getElementById("groups");
Communities.map((val)=>{
  const {name, location, period, links, demographic, format} = val;
  const {twitter, facebook, website, meetUp, linkedIn} = links;
  const {interval, day, weekDay} = period;

  const newHTML = `<h4>
    <a href=${
      //uses the group's Meetup link if they don't have a website
      website ? website : meetUp} >${name}</a>
  </h4>
  <dl>
    <dt>Links:</dt>
    <dd>
      <ul>
         
        ${linkedIn ? `<li><a href=${linkedIn} rel="external">LinkedIn</a></li>` : ""}
        ${facebook ? `<li><a href=${facebook} rel="external">Facebook</a></li>` : ""}
        ${meetUp ? `<li><a href=${meetUp}} rel="external">MeetUp</a></li>` : ""}
        ${twitter ? `<li><a href=${twitter}} rel="external">Twitter</a></li>` : ""}
      </ul>
    </dd>
    <dt>When:</dt>
    <dd>${interval}, ${weekDay} ${day}</dd>
    <dt>Where:</dt>
    <dd>${location}</dd>
    <dt>Who:</dt>
    <dd>${demographic}</dd>
    <dt>Format:</dt>
    <dd>${format}</dd>
    </dl>`
    
    const  element = document.createElement("div");
    element.className = "card";
    element.innerHTML = newHTML;
    renderArea.appendChild(element);
})