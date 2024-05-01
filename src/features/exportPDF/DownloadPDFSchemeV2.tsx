// @ts-nocheck
import { Button } from "@chakra-ui/react";
import jsPDF from "jspdf";
import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";
import useAuth from "../../hooks/useAuth";

const widthPDF = 1024 * 3;
const heightPDF = 768 * 3;

function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const DownloadPDFSchemeV2 = ({ flowRef }) => {
  const { auth } = useAuth();
  const savePdfHandle = (dataUrl) => {
    const doc = new jsPDF("l", "mm", [297, 210], true);
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const image = new Image();
    image.src = dataUrl;

    doc.addImage(image, "PNG", 0, 0, width, height);
    doc.save("test.pdf");
    // doc.save("two-by-four.pdf");
    // console.log("PDF>>>>");
    // doc.addImage(flowRef.current, {
    //   callback: function (doc) {
    //     // Save the PDF
    //     doc.save("sample-document.pdf");
    //   },
    //   x: 15,
    //   y: 15,
    //   width: 170, //target width in the PDF document
    //   windowWidth: 650, //window width in CSS pixels
    // });
  };
  const imageWidth = 1024 * 3;
  const imageHeight = 768 * 3;
  const { getNodes } = useReactFlow();
  const onClick = async () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );
console.log(nodesBounds, transform);
    toPng(
      document.querySelector(".react-flow__viewport"),

      {
        backgroundColor: "#FFF",
        width: imageWidth,
        height: imageHeight,
        style: {
          // width: imageWidth,
          // height: imageHeight,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      }
    ).then((dataUrl) => savePdfHandle(dataUrl));
  };

  return (
    <Button isDisabled={auth?.roleId === 1 ? false : true} onClick={onClick}>
      СКАЧАТЬ PDF V.2
    </Button>
  );
};

export default DownloadPDFSchemeV2;
