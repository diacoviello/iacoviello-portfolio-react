import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "../../images/David_iacoviello_dev_resume.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 600,
  },
});

export default function ResumeCard() {
  const classes = useStyles();

  return (
    <Container>

        <img src={`${image}`} className={classes.media} />

    </Container>
  );
}
