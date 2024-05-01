import React from "react";
import { NodeResizeControl, NodeResizer } from "reactflow";
import myScheme from "./схема 10-0.4.png";
import styles from "./ImageNode.module.scss";
import { updateSizeOnResizeEnd } from "../store/flowSlice";
import { useDispatch } from "react-redux";
import "./ImageNode.module.scss";
import { IoMdResize } from "react-icons/io";
const ImageNode = ({ data }) => {
  //   console.log(data);
  // const dispatch = useDispatch();

  // const onResizeEnd = (event, params) => {
  //   console.log(params);
  //   if (params.height >= 348) return;
  //   dispatch(
  //     updateSizeOnResizeEnd({
  //       id: data.id,
  //       position: { x: params.x, y: params.y },
  //       style: { width: params.width, height: params.height },
  //     })
  //   );
  // };
  return (
    <>
      {/* <NodeResizeControl onResizeEnd={onResizeEnd}>RESIZE</NodeResizeControl> */}
      <div>{data.label}</div>
      {/* <NodeResizeControl
        // minWidth={100}
        // minHeight={50}
        onResizeEnd={onResizeEnd}
      >
        <IoMdResize />
      </NodeResizeControl> */}
    </>
  );
};

export default ImageNode;
