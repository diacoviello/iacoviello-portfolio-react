import React from "react";
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
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#ffffff",
                  fontFamily: "Georgia",
                  fontStyle: "oblique",
                }}
              >
                If you would like to contact me, you can reach me at:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Paper style={{ backgroundColor: "#9433A2", padding: 15 }}>
                <List>
                  <ListItem
                    component="a"
                    href="mailto: diacovmusic@gmail.com"
                    target="_blank"
                  >
                    <img
                      alt="gmail"
                      src={gmailImg}
                      style={{ height: 50, width: 50, margin: 10 }}
                    ></img>
                    <Typography style={{ color: "#ffffff" }}>
                      <h4>diacovmusic@gmail.com</h4>
                    </Typography>
                  </ListItem>
                  <ListItem
                    component="a"
                    href="https://www.linkedin.com/in/david-iacoviello-2ab05348/"
                    target="_blank"
                  >
                    <img
                      alt="linkedin"
                      src={linkedinImg}
                      style={{ height: 50, width: 50, margin: 10 }}
                    ></img>
                    <Typography style={{ color: "#ffffff" }}>
                      <h4>Linked-In</h4>
                    </Typography>
                  </ListItem>
                  <ListItem
                    component="a"
                    href="tel:732-947-0068"
                    target="_blank"
                  >
                    <PhoneInTalkIcon
                      style={{ height: 50, width: 50, margin: 10 }}
                    />
                    <Typography style={{ color: "#ffffff" }}>
                      <h4>CLICK TO CALL</h4>
                    </Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
