import { makeStyles } from "@material-ui/core";
import React from "react";
import useWindowPosition from "../hook/useWindowPosition";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Projects() {
  const classes = useStyles();
  const checked = useWindowPosition("landing");
  return (
    <div className={classes.root}>
      <ProjectCard
        image={process.env.PUBLIC_URL + "/assets/chess.jpeg"}
        title="Terminal Chess"
        desc="Using the codebase of one of my first coding projects, snake played completely through the terminal, I've developed the game of chess played in a similar style. This project took the existing codebase and introduced better development practices such as testing, better code structure, and cleaner code."
        code="https://github.com/keithradford/terminal-chess"
        checked={checked}
      />
      <ProjectCard
        image=""
        title="UVic Course Scraper"
        desc="An NPM package for scraping UVic course information. Worked in a team of 4 as the team lead running and organizing weekly stand-ups and meetings to discuss the project. The package quickly provides developers with information on courses at UVic such as professors, meeting times, and seating numbers."
        code="https://github.com/VikeLabs/scheduler-scraper"
        checked={checked}
      />
    </div>
  );
}
