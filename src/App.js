import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "../src/App.css";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import musicCodeImg from "./images/music-code.jpeg";
import myLogo from "./images/myLogo.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const drawerWidth = 223;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      padding: "12px",
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "12px",
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
    image: {
      backgroundImage: `url(${musicCodeImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxHeight: "90%",
      maxWidth: "90%",
    },
    logo: {
      align: "left",
      verticalAlign: "middle",
      display: "inline",
      height: "10vh",
      width: "10vh",
      maxHeight: "10vh",
      maxWidth: "10vh",
      minHeight: "0px",
      minWidth: "0px",
      margin: "0px",
      padding: "0px",
    },
    sideItems: {
      height: "12vh",
      marginTop: "15px",
      marginBottom: "10px",
    },
    icons: {
      color: "#ffffff",
      fontSize: "42px",
      marginLeft: "0vw",
    },
    sideText: {
      fontSize: "23px",
      color: "#ffffff",
      fontFamily: "Times New Roman",
      fontWeight: "bold",
    },
  }),
  { withTheme: true }
);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log("This is the process.env", process.env.PUBLIC_URL);

  return (
    <div className="App">
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
              <MenuIcon style={{ color: "#ffffff", fontSize: "30px" }} />
            </IconButton>
            {/* <img
              alt="myLogo"
              src={myLogo}
              style={{}}
              className={classes.logo}
            ></img> */}
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              style={{ fontFamily: "Garamond" }}
              noWrap
              className={classes.title}
            >
              <strong>
                <Switch>
                  <Route exact path={["/"]}>
                    Meet David Iacoviello:
                  </Route>
                  <Route exact path={["/projects"]}>
                    Some Projects I've done:
                  </Route>
                  <Route exact path={["/resume"]}>
                    My Resume:
                  </Route>
                  <Route exact path={["/contact"]}>
                    Contact Me:
                  </Route>
                </Switch>
              </strong>
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
          <div className={classes.toolbarIcon} style={{ height: "11vh" }}>
            {open === true ? (
              <Grid container xs={12} justify="space-between">
                <Grid item>
                  <img
                    alt="myLogo"
                    src={myLogo}
                    style={{}}
                    onClick={{ display: "none" }}
                    className={clsx(
                      classes.logo,
                      !open && classes.menuButtonHidden
                    )}
                  />
                </Grid>
                <Grid item>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon
                      style={{
                        float: "right",
                        color: "#ffffff",
                        fontSize: "30px",
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            ) : null}
          </div>

          <Divider />

          <List>
            <div>
              <Link to="/" style={{ textDecorationLine: "none" }}>
                <ListItem
                  button
                  component="a"
                  href="/"
                  style={{ marginTop: "25px" }}
                  className={classes.sideItems}
                >
                  <ListItemIcon>
                    <PersonIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.sideText }}
                    primary="About Me"
                    className="lively-links"
                  />
                </ListItem>
              </Link>
              <Link to="/projects" style={{ textDecorationLine: "none" }}>
                <ListItem
                  button
                  component="a"
                  href="/projects"
                  className={classes.sideItems}
                >
                  <ListItemIcon style={{ color: "#ffffff" }}>
                    <WorkIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.sideText }}
                    primary="Projects"
                    className="lively-links"
                  />
                </ListItem>
              </Link>
              <Link to="/resume" style={{ textDecorationLine: "none" }}>
                <ListItem
                  button
                  component="a"
                  href="/resume"
                  className={classes.sideItems}
                >
                  <ListItemIcon style={{ color: "#ffffff" }}>
                    <ListAltIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.sideText }}
                    primary="Resume"
                    className="lively-links"
                  />
                </ListItem>
              </Link>
              <Link to="/contact" style={{ textDecorationLine: "none" }}>
                <ListItem
                  button
                  component="a"
                  href="/contact"
                  className={classes.sideItems}
                >
                  <ListItemIcon style={{ color: "#ffffff" }}>
                    <ContactMailIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.sideText }}
                    primary="Contact Me"
                    className="lively-links"
                  />
                </ListItem>
              </Link>
            </div>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            {/* <Route
              exact
              path={["/iacoviello-portfolio-react"]}
              render={() => {
                return <Redirect to="/" />;
              }}
            /> */}
            <Route
              exact
              path={["/"]}
              render={(routerProps) => <Portfolio routerProps={routerProps} />}
            />
            {/* <Portfolio />
            </Route> */}
            <Route
              exact
              path={["/projects"]}
              render={(routerProps) => <Projects routerProps={routerProps} />}
            />
            {/* <Projects />
            </Route> */}
            <Route
              exact
              path={["/resume"]}
              render={(routerProps) => <Resume routerProps={routerProps} />}
            />
            {/* <Resume />
            </Route> */}
            <Route
              exact
              path={["/contact"]}
              render={(routerProps) => <Contact routerProps={routerProps} />}
            />
            {/* <Contact />
            </Route> */}
          </Switch>
        </main>
      </div>
    </div>
  );
}

// export default withStyles(useStyles, {withTheme: true})(App);
// export default function (props) {
//   const theme = withTheme();

//   return <App {...props} theme={theme} />;
// }
export default App;
