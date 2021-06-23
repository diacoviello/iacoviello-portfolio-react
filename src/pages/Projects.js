import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import myConcertsImg from "../images/concertsHomepage.png";
import WeatherImg from "../images/weatherDash.png";
import TeamProfileImg from "../images/teamgeneratorimg.png";
import MusicQuizImg from "../images/musicQuiz.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  
  projectpaper: {
    height: 350,
    marginBottom: 50
  }
}));

export default function Projects() {
  const classes = useStyles();
  
  return (
    <div>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="space-evenly">
            {/* myConcerts */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography>
                  <strong>myConcerts</strong>
                </Typography>
                <a
                  href="https://github.com/zpinson/concertapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${myConcertsImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Paper>
            </Grid>
            {/* Weather */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography>
                  <strong>Weather App</strong>
                </Typography>
                <a
                  href="https://diacoviello.github.io/Weather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${WeatherImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Paper>
            </Grid>
            {/* Team Profile */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography>
                  <strong>Team Profile Generator</strong>
                </Typography>
                <a
                  href="https://github.com/diacoviello/TeamProfileGen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${TeamProfileImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Paper>
            </Grid>
            {/* Music Quiz */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography>
                  <strong>Musical Knowledge Quiz: Timed</strong>
                </Typography>
                <a
                  href="https://diacoviello.github.io/OnlineQuiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${MusicQuizImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}
