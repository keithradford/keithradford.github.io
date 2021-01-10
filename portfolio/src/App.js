import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Landing from "./components/Landing";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/sitebg.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Landing />
    </div>
  );
}

export default App;
