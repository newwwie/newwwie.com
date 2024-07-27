<img
  align="right"
  width="1600px"
  alt="Newwwie Logo"
  src="newwwie-logo.svg?sanitize=true"
/>

# Contributing to Newwwie Website

This is a community run by the community and even this website is built by the community.

So if you are reading this... that is YOU! 😊

# Our Values

## Design Decisions

Make design decisions that:

- Prefer less complexity for a lower barrier to contributing.
- Make technology choices that give us a high ceiling on sophistication of what we can do or achieve.
- Make technology choices that are in the current zeitgeist of tools or frameworks that:
  - Most people might know
  - or would desire to know
  - We value facilitating contributions that could be resume building

## When Collaborating and Contributing

- Start with kindness and curioristy.
- All time volunteered is a _gift_.
- No one is expected to respond in a timely manner like a commercial project.
  - That means as a maintainer you are not expected to reply to things within a certain timeframe
  - That means as a contributor you are also held to the same standard
- Attention will be prioritised by efforts that are closest to tangible improvements eg:
  1.  Pull requests
  1.  Issues
  1.  Discussions
- Mentorship
  - If you are senior in your career, please prefer contributing by code review and issue triage instead of pull requests.
  - If you are junior in your career, we value giving opportunities to contribute publicly.

# Code Review

There are **\*three types of Code Review** inspired by conference talks by Trisha Gee (Jetbrain Java Advocate)

- https://www.youtube.com/watch?v=a9_0UUUNt-Y
- https://www.youtube.com/watch?v=3pth05Rgr8U&t

## Draft / Early Feedback

Github has a feature to mark a Pull Request as a draft. Often this won't run CI checks as it is known that it is in a partial working state.

These are great to get early feedback about design decisions before sinking too much effort.

## Educational

Sometimes the person creating the Pull Request is the Subject Matter Expect (SME) like a @newwwie/core-maintainers. They have authority to just push the change through, but it is important for others to see and follow along what the change _**IS**_ and _**WHY**_.

## Goalkeeper

This is probably the more common one that people think of when it comes to code review. They are looking at quality control and trying to stop bugs getting through.

The key goals they need to ask themselves when reviewing code:

> Will this break production?
> Can someone else reasonably maintain this later?

Sometimes a solution isn't exactly how you would expect it to be solved, that is ok. As a reviewer you should be open to letting these through. This is to help avoid nitpicking.

**Nitpicking should never block code getting released**.

The regulating factor here is that if the code could not reasonably be maintained by someone else, then that is leaving tech debt and lowering the bar for the whole project.

---

## Setup Dev Environment

[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=for-the-badge&label=GitHub+Codespaces&message=Open&color=brightgreen&logo=github)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=72636775&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
[![Open in Dev Containers](https://img.shields.io/static/v1?style=for-the-badge&label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/newwwie/newwwie.com)

Using GitHub Codespaces or Dev Containers is the easiest way to get started, it will install the dependencies that are required to run the project, and configure VS Code with the recommended extensions.

### Manual Setup

```sh
git clone https://github.com/newwwie/newwwie.com
cd newwwie.com
npm install
npm run dev
```

### Get the project going

```sh
npm install
```

### Run hot reloading development environment

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

---

## Issues, Pull Reqests and Project Planning

### Raise an Issue

If you have a feature request or a bug to report then:

> [Create an issue](https://github.com/newwwie/newwwie.com/issues/new/choose)

### Project Planning

Our team use the below Kanban board to manage work:

[Newwwie.com Website Kanban Board](https://github.com/orgs/newwwie/projects/1)

Someone from the `@newwwie/reviewers-approvers` team will triage the issue and add the appropriate labels to show an issue is good enough for someone to pick up.

### How can I contribute?

You can always pick up an open ticket from the `Ready` column of [Newwwie.com Website Kanban Board](https://github.com/orgs/newwwie/projects/1).

Or you could skip the Create an Issue step and open a [Pull Request](https://github.com/newwwie/newwwie.com/compare).

### Creating a Pull Request

We strongly recommend that when creating a pull request you do the following steps:

1. Fork the repository to your own account
2. Create a new branch
3. Make your changes
4. [Open a pull request across forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
5. Make sure you select `Allow edits by maintainers`

> **!!! IMPORTANT !!!**: Step 2 & 5 above are important, often there are branch protections on `main` branches, when opening a PR please let us have permission to edit your branch as sometimes the feedback given are little tweaks that are easier for us to just ammend and push.

Please set `@newwwie/reviewers-approvers` on the PR to notify the team a PR is open.

![Add newwwie/reviewers-approvers team to a pull request.](docs/images/pull-request-reviewers.png)

## Slack Channel

If you aren't already on Newwwie Slack then [get an invite](https://newwwie.com/#invite).

Then head to the [`#_newwwie_contributors`](https://newwwie.slack.com/archives/C06LRQDN3PD) channel.

We are still working on having hack days where we can meetup in person and hack away at issues.

---

## Event feed

Pulls from the Meetup API based on a list of approved Meetup Group IDs.

[`fetch-events/meetups.json`](fetch-events/meetups.json)

You can [edit it directly on the Github Website](https://github.com/newwwie/newwwie.com/edit/main/fetch-events/meetups.json)

## Communities page

We have a bunch of lovely affiliated communities:

https://newwwie.com/#community

If you would like to get added, the content is in:

[`src/js/communities/community-data.ts`](src/js/communities/community-data.ts)

You can [edit it directly on the Github Website](https://github.com/newwwie/newwwie.com/edit/main/src/js/communities/community-data.ts)

Here is an example of a high quality entry:

```json
{
  "name": "Newcastle Women and Gender Diverse People in Tech",
  "location": "NewyTechPeople Office",
  "period": {
    "interval": "Monthly",
    "day": "2nd",
    "weekDay": "Thurs"
  },
  "links": {
    "meetUp": "https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"
  },
  "demographic": "Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",
  "format": "The format varies but will often include networking/socialising and a presentation."
}
```
