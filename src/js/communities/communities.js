//file generated using a JSX pre-processor for production, read more about it here: https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor
const CommunityData = [{
    name: 'Newcastle Coders Group',
    location: "ICT Building, University of Newcastle",
    period: {
        interval: "Monthly",
        day: "2nd",
        weekDay: "Wed"
    },
    links: {
        twitter: "https://twitter.com/ncgau",
        facebook: "https://www.facebook.com/groups/ncgau/",
        website: "http://ncg.asn.au/",
        meetUp: "http://www.meetup.com/Newcastle-Coders-Group/"
    },
    demographic: "Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",
    format: "Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."

}, {
    name: "Newcastle Women and Gender Diverse People in Tech",
    location: "NewyTechPeople Office",
    period: {
        interval: "Monthly",
        day: "2nd",
        weekDay: "Thurs"
    },
    links: {
        meetUp: "https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"
    },
    demographic: "Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",
    format: "The format varies but will often include networking/socialising and a presentation."
}, {
    name: "Newcastle Cybersecurity Group",
    location: "University of Newcastle I2N Hub Honeysuckle",
    period: {
        interval: "Monthly",
        day: "4th",
        weekDay: "Thurs"
    },
    links: {
        linkedIn: "https://www.linkedin.com/company/newcastlecybersecuritygroup/",
        meetUp: "https://www.meetup.com/Newcastle-Cyber-Security-Group/"
    },
    demographic: "Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",
    format: "You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."
}, {
    name: "Newcatle IoT Pioneers",
    location: "Stag and Hunter, Mayfield",
    period: {
        interval: "Monthly",
        day: "1st",
        weekDay: "Thurs"
    },
    links: {
        meetUp: "https://www.meetup.com/Newcastle-IoT-Pioneers/"
    },
    demographic: "In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",
    format: "Organised presentations"
}, {
    name: "Hunter Data Analytics",
    location: "Check meetup event details (but usually at University of Newcastle City Campus)",
    period: {
        interval: "Monthly",
        day: "3rd",
        weekDay: "Thurs"
    },
    links: {
        meetUp: "https://www.meetup.com/Hunter-Data-Analytics/",
        linkedIn: "https://www.linkedin.com/company/hunter-data-analytics/",
        twitter: "https://twitter.com/hunteranalytics"
    },
    demographic: "Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",
    format: "Networking/chats, followed by organised presentations, followed by pub."
}, {
    name: "NewcastleJS",
    location: "INNX Hub Cooperative Working Space",
    period: {
        interval: "Monthly",
        day: "2nd",
        weekDay: "Tues"
    },
    links: {
        meetUp: "https://www.meetup.com/NewcastleJS-JavaScript-Meetup/",
        twitter: "https://twitter.com/newcastlejs"
    },
    demographic: "Javascript enthusiasts. Amateur to Professional, AngularJS to NodeJS and everything else JS.",
    format: "Some beverages and short form presentations as well as industry news and jobs board. Post meetup drinks and food at The Edwards afterwards."
}];
var CommunityCard = function CommunityCard(props) {

    const {name, location, period: {day, weekDay, interval}, links: {facebook, twitter, linkedIn, meetUp, website}, demographic, format} = props.data;

    return React.createElement(
        "div",
        { className: "card" },
        React.createElement(
            "h4",
            null,
            React.createElement(
                "a",
                // Uses the group's Meetup link if they don't have their own website
                { href: website ? website : meetUp },
                name
            )
        ),
        React.createElement(
            "dl",
            null,
            React.createElement(
                "dt",
                null,
                "Links:"
            ),
            React.createElement(
                "dd",
                null,
                React.createElement(
                    "ul",
                    null,
                    linkedIn ? React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: linkedIn, rel: "external" },
                            "LinkedIn"
                        )
                    ) : "",
                    facebook ? React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: facebook, rel: "external" },
                            "Facebook"
                        )
                    ) : "",
                    meetUp ? React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: meetUp, rel: "external" },
                            "MeetUp"
                        )
                    ) : "",
                    twitter ? React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: twitter, rel: "external" },
                            "Twitter"
                        )
                    ) : ""
                )
            ),
            React.createElement(
                "dt",
                null,
                "When:"
            ),
            React.createElement(
                "dd",
                null,
                interval,
                ", ",
                weekDay,
                " ",
                day
            ),
            React.createElement(
                "dt",
                null,
                "Where:"
            ),
            React.createElement(
                "dd",
                null,
                location
            ),
            React.createElement(
                "dt",
                null,
                "Who:"
            ),
            React.createElement(
                "dd",
                null,
                demographic
            ),
            React.createElement(
                "dt",
                null,
                "Format:"
            ),
            React.createElement(
                "dd",
                null,
                format
            )
        )
    );
};
const Communities = function Communities() {
    return CommunityData.map(function (val) {
        return React.createElement(CommunityCard, { data: val });
    });
};

const domContainer = document.querySelector('#groups');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Communities, null));