import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "./listitems.js";
import myConcertsImg from "../images/concertsHomepage.png";
import WeatherImg from "../images/weatherDash.png";
import TeamProfileImg from "../images/teamgeneratorimg.png";
import MusicQuizImg from "../images/musicQuiz.png";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#9433A2",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
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
  fixedHeight: {
    height: 240,
  },
  projectpaper: {
    height: 350,
    marginBottom: 50
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style={{ backgroundColor: "#9433A2" }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <strong>D. Iacoviello</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        style={{ backgroundColor: "#9433A2" }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
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
                  href="https://myconcerts-grp5.herokuapp.com/"
                  target="_blank"
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
      </main>
    </div>
  );
}
