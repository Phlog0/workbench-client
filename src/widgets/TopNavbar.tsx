import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import {
  changeCurrentGrid,
  changeCurrentNode,
  uploadNodes,
} from "../store/nodesSlice";
import { addNode, deleteNode } from "../store/nodesSlice";
// =============================COMPONENT============================
import { Button, ButtonGroup, Input, Select } from "@chakra-ui/react";
import MySelect from "../shared/MySelect";
import newNode from "./helpers/newNode";

const TopNavbar: FC = () => {
  const snapGrids = useAppSelector((state) => state.nodes.snapGrid);
  const currentId = useAppSelector((state) => state.nodes.currentNode);
  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);

  const currentItemParent = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === currentId.id)?.parentNode
  );

  console.log(currentId, currentItemParent);
  const dispatch = useAppDispatch();

  const addFigure = (): void => {
    const node = { id: Date.now().toString(), ...newNode };
    dispatch(addNode(node));
  };

  const deleteItem = () => {
    if (currentId === null) return;
    console.log(currentItemParent);
    dispatch(deleteNode({ currentId, tireId: currentItemParent || "" }));
    dispatch(changeCurrentNode({ id: "" }));
  };

  const importJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      dispatch(uploadNodes(JSON.parse(reader.result)));
    };
    e.target.value = null;
  };

  const importImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      // console.log(reader.result);
      const node = {
        id: `img-${Date.now()}`,

        type: "ImageNodeType",

        src: reader.result,
        position: { x: 0, y: 0 },
        style: {
          width: 360,
          height: 30,
        },
      };

      dispatch(addNode(node));
      e.target.value = null;
    };

    // if (file) {
    //   const src = reader.readAsDataURL(file);
    //   console.log(src);
    //   const node = {
    //     id: `img-${Date.now()}`,

    //     type: "ImageNodeType",

    //     src: src,
    //     position: { x: 0, y: 0 },
    //     style: {
    //       width: 360,
    //       height: 30,
    //     },
    //   };
    //   dispatch(addNode(node));
    // }
  };

  return (
    <header className={styles.header}>
      <Button colorScheme="blue" onClick={addFigure}>
        Добавить шкаф
      </Button>
      <Button colorScheme="red" onClick={deleteItem}>
        Удалить шкаф
      </Button>

      <label className={styles.importJsonLabel}>
        <span>ипорт JSON &#123; &#125;</span>
        <input
          type="file"
          id="myfile"
          className={styles.importJSONBtn}
          onChange={importJson}
        />
      </label>
      <div className={styles.navbarStep}>
        <MySelect
          options={snapGrids}
          tag={"snapGrid"}
          label={"Шаг:"}
          current={currentGrid}
        />
      </div>
      <label className={styles.addTrafaret}>
        <span>Добавить трафарет</span>
        <input
          type="file"
          id="myfile"
          accept="image/png, image/jpeg"
          className={styles.importJSONBtn}
          onChange={importImage}
        />
      </label>
    </header>
  );
};

export default TopNavbar;
