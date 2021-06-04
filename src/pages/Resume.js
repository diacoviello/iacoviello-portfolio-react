import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ResumePDF from "../images/Resume.pdf";
import SinglePage from "../components/ResumePDF";
import "../../node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../index.css";

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
  resume: {
    width: "100%",
  },
}));

export default function Resume() {
  const classes = useStyles();



  return (
    <div>
        <div className={classes.appBarSpacer} />
        <br />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={10}>
            <SinglePage style={{ width: "100%" }} pdf={ResumePDF} />
          </Grid>
        </Container>
    </div>
  );
}
