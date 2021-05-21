import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

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
        <Grid item xs={1}>
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
          <h3 align="center" marginBottom="0" padding="1">
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
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
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
