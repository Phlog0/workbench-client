import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import { changeCurrentGrid, uploadNodes } from "../store/nodesSlice";
import { addNode, deleteNode } from "../store/nodesSlice";
// =============================COMPONENT============================
import { Button, ButtonGroup, Input, Select } from "@chakra-ui/react";

const TopNavbar: FC = () => {
  const snapGrids = useAppSelector((state) => state.nodes.snapGrid);
  const currentId = useAppSelector((state) => state.nodes.currentNode);
  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);

  const dispatch = useAppDispatch();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gap = event.target.value;
    dispatch(changeCurrentGrid({ index: +gap }));
  };

  const addFigure = (): void => {
    console.log("add");
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

  // const importJsonFromServer = async() =>{
  //   try {
  //    const response = await axios.get("http://localhost:3000/savedata");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
        <label htmlFor="select-step">Шаг:</label>
        <Select name="select-step" id="select-step" onChange={selectChange}>
          {snapGrids.map((gridItem, index) => (
            <option
              value={index}
              key={index}
              selected={index === currentGrid ? true : false}
            >
              {gridItem}
            </option>
          ))}
        </Select>
        {/* <select name="select-step" id="select-step" onChange={selectChange}>
          {snapGrids.map((gridItem, index) => (
            <option
              value={index}
              key={index}
              selected={index === currentGrid ? true : false}
            >
              {gridItem}
            </option>
          ))}
        </select> */}
      </div>
    </header>
  );
};

export default TopNavbar;
