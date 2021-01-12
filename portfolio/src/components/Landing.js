import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";

import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Open Sans",
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/sitebg.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  topBar: {
    background: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  topBarTitle: {
    flexGrow: "1",
  },
  topBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#7F0000",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  container: {
    textAlign: "center",
  },
  caption: {
    marginTop: "0",
    color: "#fff",
    fontSize: "1.3rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  arrow: {
    color: "#7F0000",
    fontSize: "4rem",
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="landing">
      <Header />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Keith <span className={classes.colorText}>Radford</span>
          </h1>
          <h6 className={classes.caption}>
            Software Engineering Student at the University of Victoria
          </h6>
          <Scroll to="projects" smooth={true}>
            <IconButton id="down" size="small">
              <KeyboardArrowDownIcon className={classes.arrow} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
