import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import musicCodeImg from "../images/music-code.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    maxWidth: "100vw",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    paddingTop: theme.spacing(4),
    display: "flex",
  },
  container: {
    height: "90vh",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paperContainer: {
    backgroundImage: `url(${musicCodeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "90vw",
    height: "90vh",
    color: "white",
    backgroundColor: "#9433A2",
    padding: "15px",
  },
  image: {
    backgroundImage: `url(${musicCodeImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "90%",
    maxWidth: "90%",
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <CssBaseline />
          <Grid container spacing={3} justify="center">
            <Paper className={classes.paperContainer}>
              {/* <img
                alt="music-code"
                src={musicCodeImg}
                className={classes.image}
              ></img> */}
              <Typography
                style={{
                  position: "absolute",
                  bottom: 0,
                  padding: "2%",
                  fontFamily: "Impact",
                  fontSize: "23px",
                }}
              >
                <Box lineHeight={2} letterSpacing={2}>
                  Full Stack web developer with a heavy background in music
                  education to provide unique perspectives on how end-users
                  interact with websites and software platforms. Earned a
                  certificate in Full Stack Web Development from the Rutgers
                  University Coding Boot Camp. Critical thinker and creative
                  problem-solver with a passion to learn new things and achieve
                  goals and aspirations. Strengths include, but aren’t limited
                  to, creativity, dedication, loyalty, and a passion for problem
                  solving.
                </Box>
              </Typography>
            </Paper>
          </Grid>
        </Container>
    </div>
  );
}
