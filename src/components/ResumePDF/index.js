import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

export default function SinglePage(props) {
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
            style={{ backgroundColor: "#9433A2" }}
          >
            &lt; &lt;
          </Button>
        </Grid>
        <Grid item xs={2}>
          <h3 align="center" padding="1">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </h3>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            style={{ backgroundColor: "#9433A2" }}
          >
            &gt; &gt;
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
