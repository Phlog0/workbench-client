import FastenerNode from "../../entities/FastenerNode";
import ImageShkaf from "../../entities/ImageShkaf";
import Shkaf from "../../entities/Shkaf";
import TireNode from "../../entities/TireNode";
import styles from "../Flow.module.scss";
const renderNodesInFlow = (nodes, currentItemId) => {
  const renderedNodes = nodes.map((node) => {
    if (node.type === "ElectricalPanelsNodeType")
      return {
        ...node,
        className: node.id === currentItemId ? styles.currentNode : "",
        data: {
          label: <Shkaf id={node.id}  />,
          // label: "1",
        },
      };
    if (node.type === "ImageNodeType")
      return {
        ...node,

        data: {
          label: <ImageShkaf id={node.id} />,
          // label: "1",
        },
      };
    if (node.type === "TireNodeType")
      return {
        ...node,

        data: {
          label: <TireNode id={node.id} />,
          // label: "1",
        },
      };
    if (node.type === "FastenerNodeType")
      return {
        ...node,

        data: {
          label: <FastenerNode id={node.id} />,
          // label: "1",
        },
      };
    return {
      ...node,
      data: {
        label: "GROUP NODE!",
      },
    };
  });
  return renderedNodes;
};

export default renderNodesInFlow;
