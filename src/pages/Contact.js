import React from "react";
import "../../src/App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import gmailImg from "../images/gmail.png";
import linkedinImg from "../images/linkedin-logo.png";

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
  fixedHeight: {
    height: 240,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography
              style={{
                color: "#ffffff",
                fontFamily: "Georgia",
                fontStyle: "oblique",
                fontSize: "35px",
              }}
            >
              If you would like to contact me, you can reach me at:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Paper style={{ backgroundColor: "#9433A2", padding: 15 }}>
              <List>
                <ListItem
                  className="lively-links"
                  component="a"
                  href="mailto: iacoviello.david@gmail.com"
                  target="_blank"
                  style={{ maxWidth: "90%" }}
                >
                  <img
                    alt="gmail"
                    src={gmailImg}
                    style={{ height: 50, width: 50, margin: 10 }}
                  ></img>
                  <Typography
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                    }}
                  >
                    <strong>diacovmusic@gmail.com</strong>
                  </Typography>
                </ListItem>
                <ListItem
                  className="lively-links"
                  component="a"
                  href="https://www.linkedin.com/in/david-iacoviello-2ab05348/"
                  target="_blank"
                  style={{ maxWidth: "90%" }}
                >
                  <img
                    alt="linkedin"
                    src={linkedinImg}
                    style={{ height: 50, width: 50, margin: 10 }}
                  ></img>
                  <Typography
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                    }}
                  >
                    <strong>Linked-In</strong>
                  </Typography>
                </ListItem>
                <ListItem
                  className="lively-links"
                  component="a"
                  href="tel:732-947-0068"
                  target="_blank"
                  style={{ maxWidth: "90%" }}
                >
                  <PhoneInTalkIcon
                    style={{ color: "#fff", height: 50, width: 50, margin: 10 }}
                  />
                  <Typography
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                    }}
                  >
                    <strong>CLICK TO CALL</strong>
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
