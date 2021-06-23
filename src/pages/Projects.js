import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import myConcertsImg from "../images/concertsHomepage.png";
import WeatherImg from "../images/weatherDash.png";
import TeamProfileImg from "../images/teamgeneratorimg.png";
import MusicQuizImg from "../images/musicQuiz.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  typography: {
    fontSize: "150%",
  },
  links: {
    color: "blue",
    "&:hover": {
      fontStyle: "italic",
      backgroundColor: "blue",
      color: "white"
    }
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
    minHeight: 350,
    marginBottom: 30
  }
}));

var longtext = "Note: The API key for Bandsintown expired so this link will bring you to the github repo, not a deployed link";
var longtext2 = "Note: This application requires to be run in terminal. Once completed with prompts, it will generate an HTML page based on user answers.";

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
                <Typography className={classes.typography}>
                  <strong>myConcerts</strong>
                </Typography>
                <Tooltip TransitionComponent={Fade} 
                TransitionProps={{ timeout: 600 }} 
                placement="top"
                title={<h4 style={{ color: 'white' }}>{longtext}</h4>}>
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
                </a></Tooltip>
              </Paper>
            </Grid>



            {/* Weather */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography className={classes.typography}>
                  <strong>Weather App</strong>
                </Typography>

                  <img
                    src={`${WeatherImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
              </Paper>
              <Typography style={{ marginTop: -60 }}>
                  <a
                  href="https://github.com/diacoviello/Weather"
                  target="_blank"
                  className={classes.links}
                  rel="noopener noreferrer"
                ><strong>GitHub</strong></a>
                  <strong>   |   </strong>
                  <a
                  href="https://diacoviello.github.io/Weather/"
                  target="_blank"
                  className={classes.links}
                  rel="noopener noreferrer"
                ><strong>Deployed Link</strong></a>
                </Typography>
            </Grid>



            {/* Team Profile */}
            <Grid item xs={5}>
              <Paper className={classes.projectpaper} elevation={5}>
                <Typography className={classes.typography}>
                  <strong>Team Profile Generator</strong>
                </Typography>
                <Tooltip TransitionComponent={Fade} 
                TransitionProps={{ timeout: 600 }} 
                placement="top"
                title={<h4 style={{ color: 'white' }}>{longtext2}</h4>}>
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
                </Tooltip>
              </Paper>
            </Grid>



            
            {/* Music Quiz */}
            <Grid item xs={5}>
              <Paper style={{ alignItems: "center" }} className={classes.projectpaper} elevation={5}>
                <Typography className={classes.typography}>
                  <strong>Musical Knowledge Quiz: &lt;Timed&gt;</strong>
                </Typography>
                  <img
                    src={`${MusicQuizImg}`}
                    alt="placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
              </Paper>
              <Typography style={{ marginTop: -60 }}>
                  <a
                  href="https://github.com/diacoviello/OnlineQuiz"
                  target="_blank"
                  className={classes.links}
                  rel="noopener noreferrer"
                ><strong>GitHub</strong></a>
                  <strong>   |   </strong>
                  <a
                  href="https://diacoviello.github.io/OnlineQuiz/"
                  target="_blank"
                  className={classes.links}
                  rel="noopener noreferrer"
                ><strong>Deployed Link</strong></a>
                </Typography>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}
