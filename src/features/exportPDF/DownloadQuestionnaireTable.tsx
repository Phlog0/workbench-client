// @ts-nocheck
import { Button } from "@chakra-ui/react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  getNodesBounds,
  getRectOfNodes,
  getTransformForBounds,
  useReactFlow,
} from "reactflow";
import QuestionnaireTable from "./QuestionnaireTable";
import { useAppSelector } from "../../hook";

const DownloadQuestionnaireTable = () => {
  const currentItemId = useAppSelector((state) => state.flow.currentNodeId);

  const savePdfHandle = async (dataUrl) => {
    const doc = new jsPDF("l", "mm", [297, 210], true);
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    // const image = new Image();
    // image.src = dataUrl;
    const content = renderToString(
      <QuestionnaireTable currentItemId={currentItemId} />
    );
    // const content = 3;
    console.log(content);
    // doc.addImage(image, "PNG", 0, 0, width, height);
    doc.html(content, {
      callback: function (doc) {
        doc.save("sample.pdf");
      },
      // width: 200, // <- here
      // windowWidth: 200, // <- here
      x: 10,
      y: 10,
      width: 800,
      windowWidth: 800,
      margin: 50,

      // autoPaging: "text"
    });
    doc.save("test.pdf");
  };

  const imageWidth = 1024 * 5;
  const imageHeight = 768 * 5;
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

    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: "#FFF",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then((dataUrl) => savePdfHandle(dataUrl));
  };

  return (
    <> <QuestionnaireTable currentItemId={currentItemId} />
      {/* <Button onClick={savePdfHandle}>СКАЧАТЬ LIST</Button> */}
     
    </>
  );
};

export default DownloadQuestionnaireTable;
