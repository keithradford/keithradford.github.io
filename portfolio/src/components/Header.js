import React, { useEffect, useLayoutEffect, useState } from "react";
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import FaceIcon from "@material-ui/icons/Face";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  topBar: {
    fontFamily: "Open Sans",
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
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #7F0000",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.error.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.topBar} elevation={0}>
          <Toolbar className={classes.topBarWrapper}>
            <h1 className={classes.topBarTitle}>
              <span className={classes.colorText}>Keith's</span> Portfolio
            </h1>
            <IconButton
              size="small"
              href="https://www.linkedin.com/in/keith-radford/"
              target="_blank"
            >
              <LinkedInIcon className={classes.icon} />
            </IconButton>
            <IconButton
              size="small"
              href="https://github.com/keithradford"
              target="_blank"
            >
              <GitHubIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <FaceIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <CodeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <WorkIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Experience" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <MailIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </StyledMenuItem>
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
