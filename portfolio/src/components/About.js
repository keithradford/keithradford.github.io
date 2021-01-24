import { makeStyles } from "@material-ui/core";
import React from "react";
import WorkTimeline from "./WorkTimeline"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    fontFamily: "Open Sans",
    color: "#fff",
    fontSize: "1.1rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px"
  },
  title: {
    marginTop: "50px",
    marginbottom: "10px",
    textAlign: "center",
    fontSize: "2.5rem",
  },
  picture: {
    borderRadius: "50%",
    margin: "20px",
    boxShadow: "-8px -2px 5px #000"
  },
  text: {
    width: "50%",
    height: "25%",
    marginLeft: "25px"
  },
  colorText: {
    color: "#7F0000",
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.title}>
        <h1>
          About <span className={classes.colorText}>Me</span>
        </h1>
      </div>
      <div className={classes.container}>
        <img
          className={classes.picture}
          src={process.env.PUBLIC_URL + "/assets/profile.JPG"}
        />
        <p className={classes.text}>
          My name is Keith Radford and I am a 3rd year student studying Software
          Engineering at the University of Victoria.
          <br />I am 20 years old and have a passion for computers, software,
          and sports. Throughout my studies in 1st year Engineering at UVic,
          learning fundamentals of programming in the languages C and Java, my
          interest for programming grew exponentially which lead me to pursue
          Software Engineering and begin to learn, study, and work in the field of computer science.
        </p>
      </div>
      <WorkTimeline />
    </div>
  );
}
