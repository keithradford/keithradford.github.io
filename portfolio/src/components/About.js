import { makeStyles } from "@material-ui/core";
import React from "react";

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
    width: "75%",
  },
  picture: {
    marginTop: "50px",
    borderRadius: "50%",
    margin: "20px",
  },
}));
export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.container}>
        <img
          className={classes.picture}
          src={process.env.PUBLIC_URL + "/assets/profile.JPG"}
        />
        <p className={classes.picture}>
          My name is Keith Radford and I am a 3rd year student studying Software
          Engineering at the University of Victoria.
          <br />I am 19 years old and have a passion for computers, software,
          and sports. Throughout my studies in 1st year Engineering at UVic,
          learning fundamentals of programming in the languages C and Java, my
          interest for programming grew exponentially which lead me to pursue
          Software Engineering and begin to learn and pursue front and back end
          programming as well as study aspects of computer science.
        </p>
      </div>
    </div>
  );
}
