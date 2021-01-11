import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  AppBar,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  topBar: {
    background: "none",
    fontFamily: "Open Sans",
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
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <AppBar className={classes.topBar} elevation={0}>
      <Toolbar className={classes.topBarWrapper}>
        <h1 className={classes.topBarTitle}>
          <span className={classes.colorText}>Keith's</span> Portfolio
        </h1>
        <IconButton>
          <MenuIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
