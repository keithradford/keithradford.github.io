import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        marginTop: "100px",
        width: "75%",
        marginLeft: "12.5%",
    },
    title: {
        marginTop: "50px",
        marginbottom: "10px",
        textAlign: "center",
        fontSize: "2.5rem",
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    colorText: {
        color: "#7F0000",
    },
}));

export default function WorkTimeline() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2">
                            September 2018
                            </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.colorText}>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                University of <span className={classes.colorText}>Victoria</span>
                            </Typography>
                            <Typography>Began studying Software Engineering at UVic</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2">
                            January 2020
                            </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.colorText}>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                <span className={classes.colorText}>Rooof</span> - Integration Engineer (Co-op)
                                </Typography>
                            <Typography>Parsed information from websites using XPath and RegEx. Maintained and uploaded to the Google Chrome Web Store, working closely with the support and sales team to map websites for new customers and fix any errors in the live extensions</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2">
                            January 2021
                            </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.colorText}>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                <span className={classes.colorText}>Change.org</span> - Software Engineer (Co-op)
                                </Typography>
                            <Typography>insert stuff here</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
