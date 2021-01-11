import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Open Sans",
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
      <AppBar className={classes.topBar} elevation={0}>
        <Toolbar className={classes.topBarWrapper}>
          <h1 className={classes.topBarTitle}>
            Keith <span className={classes.colorText}>Radford</span>
          </h1>
          <IconButton>
            <MenuIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div>
          <h1 className={classes.title}>
            Welcome to <br /> my{" "}
            <span className={classes.colorText}>portfolio</span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}
