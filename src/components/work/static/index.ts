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
      "Rooof offers a Chrome extension called PostEngine which real-estate companies to use to allow them to easily post listings from their websites onto Craigslist. My job was to create mappings of newly on-boarded companies websites which consisted of performing web-scraping tasks to tell the extension how to navigate the sites. I also got the opportunity to develop scripts and work with their API using Python, Django, and AWS Route 53 to help automate tasks which allowed me to build valuable software development skills.",
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
    period: "January 2021 - August 2021",
    description:
      "Worked on development projects to ensure the integrity of Change.org which revolved around the deprecation of a monolithic Ruby on Rails web app by migrating old pages into a new codebase using React. This consisted of reading and understanding Ruby on Rails, creating complex pages with React, utilizing GraphQL to create mutations, queries, and schemas, and working in a containerized environment with Docker among many other things. Participated in daily stand-ups and agile development with the team I was a part of, as well as working closely with experienced engineers to build skills and learn valuable information.",
  },
  {
    company: "VikeLabs (CourseUp)",
    position: "Team Lead",
    skills: ["Project management", "Communication", "Leadership"],
    links: [
      {
        name: "vikelabs",
        link: "https://www.vikelabs.ca/",
      },
      {
        name: "courseup",
        link: "https://courseup.vikelabs.ca/",
      },
    ],
    period: "September 2020 - Present",
    description:
      "Worked as the team lead for a continuously growing team with the goal to develop and maintain a fully functioning open source website. Through the UVic club VikeLabs (linked above) I was appointed as the team lead for the uvic-course-scraper project during the fall 2020 term. The development continued into the winter 2021 term with the creation of CourseUp. This involved the recruiting and hiring of new team members and the opportunity to gain experience in scoping out and developing an active website with thousands of users.",
  },
];
