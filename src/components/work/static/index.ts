import { Work } from "./types";

export const work: Work[] = [
  {
    company: "Rooof",
    position: "Integration Engineer - Co-op",
    skills: [
      "XPath",
      "RegEx",
      "Python",
      "Django",
      "JavaScript",
      "AWS Route 53",
    ],
    links: [
      {
        name: "website",
        link: "https://www.rooof.com/",
      },
    ],
    period: "January 2020 - April 2020",
    description:
      'Rooof offers a chrome extension called PostEngine which real-estate companies to use to allow them to easily post listings from their websites onto Craigslist. My job was to create "mappings" of newly on-boarded companies websites which was essentially performing web-scraping tasks to tell the extension how to navigate the sites. I also got the opportunity to develop scripts using Python, Django, and AWS Route 53 to help automate tasks which allowed me to build software development skills working with experienced engineers.',
  },
  {
    company: "Change.org",
    position: "Software Engineer Intern",
    skills: [
      "React",
      "TypeScript",
      "Docker",
      "Ruby on Rails",
      "GraphQL",
      "Agile development",
    ],
    links: [
      {
        name: "website",
        link: "https://www.change.org/",
      },
    ],
    period: "January 2021 - April 2021",
    description:
      "Worked on the deprecation of Change.org's monolithic Ruby on Rails web app by translating pages from the legacy codebase into a more modern codebase made using React. Tasks involved reading and understanding Ruby on Rails, creating pages with React, creating new queries and mutations in GraphQL, and working in a containerized environment with Docker among many other things. Participated in daily stand-ups and agile development doing 2-week long sprints with the team I was apart of.",
  },
  {
    company: "VikeLabs (Clockwork)",
    position: "Team Lead",
    skills: ["Project management", "Communication", "Leadership"],
    links: [
      {
        name: "vikelabs",
        link: "https://www.vikelabs.ca/",
      },
      {
        name: "clockwork",
        link: "https://clockwork.vikelabs.dev/",
      },
    ],
    period: "September 2020 - Present",
    description:
      "Worked as a team lead for a continuously growing team with the goal to develop and maintain a fully functioning website. Through the UVic club VikeLabs, I got placed into a team to work on a project throughout the Fall 2020 term. I was approached to be the team lead and have enjoyed working with my teammates as well as gaining skills in leadership, project management, and development skills throughout the period with the team.",
  },
];
