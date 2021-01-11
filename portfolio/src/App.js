import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#353535",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
