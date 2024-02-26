import React from "react";
import { updateSizeOnResizeEnd } from "../store/nodesSlice";
import { useDispatch } from "react-redux";
import { NodeResizeControl, NodeResizer } from "reactflow";
import styles from "./ImageNode.module.scss";
import { IoMdResize } from "react-icons/io";
import { useAppSelector } from "../hook";
const ImageShkaf = ({ id }) => {
  const dispatch = useDispatch();

  const itemSrc = useAppSelector(
    (state) => state.nodes.nodes.find((item) => item.id === id)?.src
  );



  const onResizeEnd = (event, params) => {
    console.log(params);
    // if (params.height >= 348) return;
    dispatch(
      updateSizeOnResizeEnd({
        id: id,
        position: { x: params.x, y: params.y },
        style: { width: params.width, height: params.height },
      })
    );
  };
  return (
    <div className={styles.imageContainer}>
      <NodeResizeControl
        // minWidth={100}
        // minHeight={50}
        onResizeEnd={onResizeEnd}
      >
        <div className={styles.resizeIcon}>
          <IoMdResize />
        </div>
      </NodeResizeControl>
      {/* <NodeResizer
        minWidth={100}
        minHeight={30}
        onResizeEnd={onResizeEnd}
      /> */}
      {itemSrc && (
        <img src={itemSrc} alt="Не работает" className={styles.image} />
        // <img src={myScheme} alt="Не работает" className={styles.image} />
      )}
    </div>
  );
};

export default ImageShkaf;
