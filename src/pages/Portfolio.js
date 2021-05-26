import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
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
  cardContainer: {
    display: "flex",
    backgroundImage: `url(${musicCodeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "8px",
    width: "90vw",
    height: "88vh",
    color: "white",
    backgroundColor: "#9433A2",
    alignItems: "flex-end",
  },
  image: {
    backgroundImage: `url(${musicCodeImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "90%",
    maxWidth: "90%",
  },
  cardBody: {
    display: "flex",
    alignItems: "flex-end",
  },
  theBox: {
    display: "flex",
    opacity: "1",
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          spacing={3}
          style={{ height: "90vh" }}
        >
          <Card className={classes.cardContainer}>
            <CardContent gutterbottom className={classes.cardBody}>
              <Grid item direction="row" justify="center" alignItems="center">
                {/* <img
                alt="music-code"
                src={musicCodeImg}
                className={classes.image}
              ></img> */}

                <Typography
                  lineHeight={2.3}
                  letterSpacing={2}
                  style={{
                    bottom: 0,
                    padding: "2%",
                    fontFamily: "Arial Black",
                    fontSize: "25px",
                  }}
                  className="text-outline"
                >
                  <Box
                    display="flex"
                    lineHeight={2}
                    letterSpacing={1.5}
                    className={classes.theBox}
                  >
                    Full Stack web developer with a heavy background in music
                    education to provide unique perspectives on how end-users
                    interact with websites and software platforms. Earned a
                    certificate in Full Stack Web Development from the Rutgers
                    University Coding Boot Camp. Critical thinker and creative
                    problem-solver with a passion to learn new things and
                    achieve goals and aspirations. Strengths include, but aren’t
                    limited to, creativity, dedication, loyalty, and a passion
                    for problem solving.
                  </Box>
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
