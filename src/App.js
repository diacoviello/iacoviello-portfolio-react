import React, { Component } from "react";
import ScaleText from "react-scale-text";
import {
  BrowserRouter as Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
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
    image: {
      backgroundImage: `url(${musicCodeImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxHeight: "90%",
      maxWidth: "90%",
    },
    logo: {
      verticalAlign: "middle",
      display: "inline",
      height: "7vh",
      width: "7vh",
    },
    sideItems: {
      height: "12vh",
    },
    icons: {
      color: "#ffffff",
      fontSize: "42px",
    },
    sideText: {
      fontSize: "23px",
      color: "#ffffff",
      fontFamily: "Times New Roman",
      fontWeight: "bold",

    }
  }),
  { withTheme: true }
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
              <MenuIcon />
            </IconButton>
            <img
              alt="myLogo"
              src={myLogo}
              style={{}}
              className={classes.logo}
            ></img>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              style={{ paddingLeft: "15px", fontFamily: "Garamond" }}
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
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          <List>
            <div>
              <Link to="/">
                <ListItem
                  button
                  component="a"
                  href="/"
                  className={classes.sideItems}
                >
                  <ListItemIcon>
                    <PersonIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.sideText }}
                    primary="About Me"
                  />
                </ListItem>
              </Link>
              <Link to="/projects">
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
                  />
                </ListItem>
              </Link>
              <Link to="/resume">
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
                  />
                </ListItem>
              </Link>
              <Link to="/contact">
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
