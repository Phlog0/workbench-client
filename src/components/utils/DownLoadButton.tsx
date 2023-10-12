import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toJpeg, toPng, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@chakra-ui/react";
import downloadjs from "downloadjs";
import download from "downloadjs";
import { Canvg } from "canvg";
import "svg2pdf.js";
const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton({ myRef }) {
  const { getNodes } = useReactFlow();
  const onClick = async (event) => {
    const input = myRef.current.querySelector(".react-flow__viewport");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/svg");
      console.log(ImageData);
      const pdf = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a3",
        putOnlyUsedFonts: true,
        precision: 20,
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      console.log({
        pdfWidth,
        pdfHeight,
        imgWidth,
        imgHeight,
        ratio,
        imgX,
        imgY,
      });
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("scheme.pdf");
    });


    // const pdf = new jsPDF("p", "mm", "a1", true);
    // toSvg(document.querySelector(".react-flow__viewport")).then((imgData) => {
    // download(imgData, "my-image.svg");
    // const img = new Image();
    // img.src = imgData;
    // pdf.svg(img).then(() => {
    //   (img, 'hello.pdf');
    // });

    // pdf.svg(imgData, "SVG");

    // pdf.save("scheme.pdf");
    // });
  };

  return (
    <Panel position="top-left">
      <a href="#" onClick={onClick}>
        Скачать PDF
      </a>
    </Panel>
  );
}

export default DownloadButton;
