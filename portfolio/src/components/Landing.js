import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";

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
  caption: {
    marginTop: "0",
    color: "#fff",
    fontSize: "1.1rem",
    textAlign: "center",
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
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div>
          <h1 className={classes.title}>
            Keith <span className={classes.colorText}>Radford</span>
          </h1>
          <h6 className={classes.caption}>
            Software engineering student at the University of Victoria
          </h6>
        </div>
      </Collapse>
    </div>
  );
}
