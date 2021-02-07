import { makeStyles } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    fontFamily: "Open Sans",
    color: "#fff",
    fontSize: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "200px",
    marginbottom: "10px",
    textAlign: "center",
    fontSize: "2.5rem",
    lineHeight: "75px",
  },
  colorText: {
    color: "#7F0000",
  },
  line: {
    width: "25%",
    color: "#000",
    marginBottom: "2.5%",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="projects">
      <div className={classes.title}>
        <h1>
          <span className={classes.colorText}>Projects</span> and Contributions
        </h1>
        <hr className={classes.line} />
      </div>
      <div className={classes.container}>
        {/* TODO: Fetch project info from external source */}
        <ProjectCard
          image={process.env.PUBLIC_URL + "/assets/chess.jpeg"}
          title="Terminal Chess"
          desc="Using the codebase of one of my first coding projects, snake played completely through the terminal, I've developed the game of chess played in a similar style. This project took the existing codebase and introduced better development practices such as testing, better code structure, and cleaner code."
          links={["https://github.com/keithradford/terminal-chess"]}
          tech="Java, JUnit"
        />
        <ProjectCard
          image={process.env.PUBLIC_URL + "/assets/uvic.jpg"}
          title="UVic Course Scraper"
          desc="An NPM package for scraping UVic course information. Worked in a team of 4 as the team lead running and organizing weekly stand-ups and meetings to discuss the project. The package quickly provides developers with information on courses at UVic such as professors, meeting times, and seating numbers."
          links={[
            "https://github.com/VikeLabs/scheduler-scraper",
            "https://www.npmjs.com/package/@vikelabs/uvic-course-scraper",
          ]}
          tech="TypeScript, Jest, Node, Cheerio"
        />
      </div>
    </div>
  );
}
