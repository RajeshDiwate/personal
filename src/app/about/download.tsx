import { Button } from "@/components/button";
import React from "react";
// important code 1
const PdfDownloader = () => {
  //   const downloadPdf = () => {
  //     const pdfUrl = "/CV.pdf";
  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.setAttribute("download", "CV.pdf");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <Button className="hover:bg-white  hover:text-black">
      <a href="/RD_CV.pdf" download={"RajeshCv.pdf"}>
        Download CV
      </a>
    </Button>
  );
};

export default PdfDownloader;
