import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import { changeCurrentGrid, uploadNodes } from "../store/nodesSlice";
import { addNode, deleteNode } from "../store/nodesSlice";
// =============================COMPONENT============================
import { Button, ButtonGroup, Input, Select } from "@chakra-ui/react";
import MySelect from "../shared/MySelect";

const TopNavbar: FC = () => {
  const snapGrids = useAppSelector((state) => state.nodes.snapGrid);
  const currentId = useAppSelector((state) => state.nodes.currentNode);
  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);

  const dispatch = useAppDispatch();



  const addFigure = (): void => {
    const node = {
      id: Date.now().toString(),
      type: "CustomNodeType",
      position: { x: 0, y: 0 },
      draggable: true,

      currentCellOption: 0,

      currentCommutationOption: 0,

      currentTransformatorOption: 0,
      parentNode: "",
    };
    dispatch(addNode(node));
  };



  const deleteItem = () => {
    dispatch(deleteNode(currentId));
  };

  const importJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      dispatch(uploadNodes(JSON.parse(reader.result)));
    };
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
    </header>
  );
};

export default TopNavbar;
