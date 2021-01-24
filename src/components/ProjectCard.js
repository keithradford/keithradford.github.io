import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 120,
  },
  title: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  desc: {
    fontFamily: "Open Sans",
    fontSize: "1.1rem",
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
    marginBottom: "25px"
  }
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProjectCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <img src={props.image} className={classes.image} />
          <Typography gutterBottom>
            {props.desc}
          </Typography>
        </DialogContent>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Technologies used
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            {props.tech}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" href={props.code} target="_blank">
            View the code
          </Button>
        </DialogActions>
      </Dialog>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.code}
          target="_blank"
        >
          View the code
          </Button>
      </CardActions>
    </Card>
  );
}
