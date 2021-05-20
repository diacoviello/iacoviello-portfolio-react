import React from "react";

import AllPagesPDFViewer from "../components/ResumePDF";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import ResumePDF from "../images/Resume.pdf";

export default function ResumeTest() {
  return (
    <div className="Resume">

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={ResumePDF} />
      </div>

      <hr />
    </div>
  );
}
