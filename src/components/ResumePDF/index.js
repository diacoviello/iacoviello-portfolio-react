import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { makeStyles } from "@material-ui/core/styles";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

const useStyles = makeStyles({
  pgBtn: {
    "&.MuiButton-outlinedSecondary": {},
    border: "2px solid black",
  },
});

export default function SinglePage(props) {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={1} style={{ textAlign: "right" }}>
          <Button
            variant="outlined"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            style={{ backgroundColor: "#9433A2", maxHeight: "35px" }}
            className={classes.pgBtn}
          >
            <h2 style={{ fontFamily: "Copperplate" }}>&lt;</h2>
          </Button>
        </Grid>
        <Grid item>
          <h2
            align="center"
            padding="1"
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              fontFamily: "Times New Roman",
              color: "white",
            }}
          >
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </h2>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            style={{ backgroundColor: "#9433A2", maxHeight: "35px" }}
            className={classes.pgBtn}
          >
            <h2 style={{ fontFamily: "Copperplate" }}>&gt;</h2>
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Document
            options={{ workerSrc: "pdf.worker.js" }}
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              style={{
                height: "100vh",
                width: "100%",
              }}
            />
          </Document>
        </Grid>
      </Grid>
    </>
  );
}
