import React, { useState } from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";

import { saveAs } from "file-saver";
import { pdf } from '@react-pdf/renderer'

// import Html from "react-pdf-html";


import PDFScheme from "./PDFScheme"; //MY COMPONENT

const imageWidth = 2000;
const imageHeight = 2000;

function downloadImage(dataUrl) {
  // const a = document.createElement("a");
 

  // const image = new Image();

  // image.src = dataUrl;
  // document.body.append(image);

  // const doc = new jsPDF({
  //   unit: "px",
  //   format: [2000, 2000],
  // });
  // doc.addImage(image, "png", 0, 0, 2000, 2000);

  // doc.save("myPDF.pdf");


  const handleDownload = async () => {
    const blob = await pdf(<PDFScheme image={dataUrl} />).toBlob()
    saveAs(blob, 'untitled.pdf')
  }
  handleDownload();
  // doc.svg(image, { x: 0, y: 0, width: 100, height: 2000 })
  // .then(() => {
  // save the created pdf

  // });

  // const image = new Image();
  // image.src = dataUrl;

  // console.log(encodedValue);

  // const linkSource = "data:application/pdf;base64," + encodedValue;
  // console.log(linkSource);
  // const downloadLink = document.createElement("a");
  // const fileName = "abc.pdf";
  // downloadLink.href = linkSource;
  // downloadLink.download = fileName;
  // downloadLink.click();

  //     var obj = document.createElement('object');
  // obj.style.width = '2000px';
  // obj.style.height = '2000px';
  // obj.type = 'application/pdf';
  // obj.data = 'data:application/pdf;base64,' + encodedValue;
  // document.body.appendChild(obj);

  // const doc = new jsPDF();
  // doc.svg(image).then(() => {
  //   // save the created pdf
  //   doc.save("myPDF.pdf");
  // });

  // const blob = new Blob([dataUrl], {
  //   type: "text/plain",
  // });
  // console.log(dataUrl);
  //   saveAs(dataUrl, 'flow.svg')
  // a.setAttribute("download", "reactflow.svg");
  // a.setAttribute("href", dataUrl);
  // a.click();
  // a.remove();
  // const linkSource = `data:application/pdf;base64,${dataUrl.slice(
  //       22,
  //       -1
  //     )}`;

  // a.setAttribute("download", "reactflow.pdf");
  // a.setAttribute("href", dataUrl);
  // a.click();
  // a.remove();

  // const reader = new FileReader();
  // reader.readAsDataURL(blob);

  // reader.onload = function () {
  //
  //   const linkSource = reader.result;
  //   console.log(linkSource);
  //   const downloadLink = document.createElement("a");
  //   const fileName = "abc.pdf";
  //   downloadLink.href = linkSource;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // };
}

function DownloadButton({ myRef }) {
  const [viewport, setViewport] = useState(false);

  const { getNodes } = useReactFlow();

  const onClick = (event) => {
    console.log(event.target);
    const nodesBounds = getRectOfNodes(getNodes());
    console.log(nodesBounds, getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );
    const flow = document.querySelector(
      ".react-flow__viewport"
    ) as HTMLDivElement;

    if (flow) {
      console.log(flow);
      toPng(flow, {
        backgroundColor: "#fff",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}`,
          height: `${imageHeight}`,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      })
        .then(downloadImage)
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //
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

  // PDFDocument.prototype.addSVG = function(svg, x, y, options) {
  //   return SVGtoPDF(this, svg, x, y, options), this;
  // };
  // doc.addSVG(svg, x, y, options);

  return (
    <Panel position="top-left">
      <a href="#" onClick={onClick}>
        Скачать PDF
      </a>
    </Panel>
  );
}

export default DownloadButton;
