import React, { FC, useState, SyntheticEvent, useEffect, useRef } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import {
  addEdgeRedux,
  changeCurrentGrid,
  changeCurrentNode,
  updateGroup,
  uploadEdges,
  uploadNodes,
} from "../store/flowSlice";
import { addNode, deleteNode } from "../store/flowSlice";
// =============================COMPONENT============================
import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Select,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import MySelect from "../shared/MySelect";
import newNode from "./helpers/newNode";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import orderItems from "../store/utils/orderItems";

import {
  useUpdateGroupAfterDeleteMutation,
  useAddShkafMutation,
  useDeleteShkafMutation,
  useAddStencilMutation,
  useImportProjectMutation,
  useAddEdgeApiMutation,
} from "../services/projectService";
import { IoIosReturnLeft } from "react-icons/io";
import importNodes from "./helpers/importNodes";
import SpravochInfModal from "../pages/spravochnayaInfo/SpravochInfModal";
import OprosnyListModal from "./oprosnyListModal/OprosnyListModal";

const TopNavbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenOprList,
    onOpen: onOpenOprList,
    onClose: onCloseOprList,
  } = useDisclosure();
  const toast = useToast();
  const snapGrids = useAppSelector((state) => state.flow.snapGrid);
  const currentNodeId = useAppSelector((state) => state.flow.currentNodeId);
  const currentGrid = useAppSelector((state) => state.flow.currentGrid.index);
  const reduxNodes = useAppSelector((state) => state.flow.nodes);
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("projectId");
  const currentItemParent = useAppSelector(
    (state) =>
      state.flow.nodes.find((item) => item.id === currentNodeId)?.parentNode
  );

  const [addEdgeApi] = useAddEdgeApiMutation();

  // console.log(currentId, currentItemParent);
  const dispatch = useAppDispatch();
  const [addShkaf, resultAdd] = useAddShkafMutation();
  const [addStencil, resultAddStencil] = useAddStencilMutation();
  const [deleteShkaf, resultDel] = useDeleteShkafMutation();
  const [updateGroupAfterDeleteApi, resultGroupAfterDelete] =
    useUpdateGroupAfterDeleteMutation();

  const [importPorjectApi, resultImport] = useImportProjectMutation();
  const myFormRef = useRef(null);
  const [img, setImg] = useState(null);

  const addFigure = (): void => {
    const newShkafId = uuidv4();
    const node = { id: newShkafId, projectId: params, ...newNode };
    dispatch(addNode(node));
    addShkaf({ projectId: params, newShkafId });
    dispatch(changeCurrentNode({ currentItemNode: newShkafId }));
  };

  useEffect(() => {}, [img]);

  const deleteItem = async () => {
    if (currentNodeId === null) return;
    console.log(currentItemParent);
    // if (!currentItemParent) {
    console.log(currentNodeId);
    dispatch(deleteNode({ currentNodeId }));
    //простое удалние шкафа
    await deleteShkaf({
      shkafId: currentNodeId,
      type: "ElectricalPanelsNodeType",
    });
    // }

    // if (currentItemParent) {
    //   const newReduxNodes = reduxNodes.filter(
    //     (item) => item.id !== currentId.id
    //   );
    //   const orderedItems = orderItems(newReduxNodes, currentItemParent);
    //   dispatch(updateGroup({ nodeId: currentNodeId, items: orderedItems }));

    //   // ПОМЕСТИТЬ В СЕКЦИЮ
    //   updateGroupAfterDeleteApi({
    //     projectId: id,
    //     delShkafId: currentNodeId,
    //     items: orderedItems,
    //   });
    // }
    dispatch(changeCurrentNode({ currentItemNode: "" }));
  };

  const importJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      dispatch(uploadNodes([]));

      const newItems = importNodes(JSON.parse(`${reader?.result}`), params);

      console.log(newItems);
      dispatch(uploadNodes(newItems.nodes));
      dispatch(uploadEdges(newItems.edges));
      importPorjectApi({
        projectId: params,
        newItems,
      });
    };
    e.target.value = null;
  };

  const importImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      // console.log(reader.result);
      const newStencilId = uuidv4();

      const node = {
        id: newStencilId,

        type: "ImageNodeType",

        // src: reader.result,
        src: reader.result,
        position: { x: 0, y: 0 },
        style: {
          width: 360,
          height: 30,
        },
      };

      dispatch(addNode(node));
      addStencil({
        stencilId: newStencilId,
        projectId: params,
        imageFile: file,
      });
      e.target.value = null;
    };
  };

  const goToMenu = () => {
    dispatch(changeCurrentNode({ id: "" }));
    dispatch(uploadNodes([]));
  };
  const reduxEdges = useAppSelector((state) => state.flow.edges);
  const connectTires = async () => {
    try {
      const allTires = reduxNodes.filter(
        (item) => item.type === "TireNodeType"
      );

      const sourceTire = allTires.reduce((prev, curr) =>
        prev.createdAt < curr.createdAt ? prev : curr
      );

      const targetTire = allTires.reduce((prev, curr) =>
        prev.createdAt > curr.createdAt ? prev : curr
      );

      const allFastenersOfSourceTire = reduxNodes.filter(
        (item) =>
          item.type === "FastenerNodeType" && item.parentNode === sourceTire.id
      );
      const allFastenersOfTargetTire = reduxNodes.filter(
        (item) =>
          item.type === "FastenerNodeType" && item.parentNode === targetTire.id
      );

      const sourceFastener = allFastenersOfSourceTire.reduce((prev, curr) =>
        prev.createdAt > curr.createdAt ? prev : curr
      );

      const targetFastener = allFastenersOfTargetTire.reduce((prev, curr) =>
        prev.createdAt < curr.createdAt ? prev : curr
      );

      const sourceShkaf = reduxNodes.find(
        (item) => item.parentNode === sourceFastener.id
      );

      const targetShkaf = reduxNodes.find(
        (item) => item.parentNode === targetFastener?.id
      );

      const isEdgeExists = reduxEdges.find(
        (item) =>
          item.source === sourceShkaf?.id && item.target === targetShkaf?.id
      );
      if (isEdgeExists) {
        toast({
          title: `warning`,
          status: "warning",
          description: `Уже соединено!`,
          isClosable: true,
        });
        return;
      }
      if (
        sourceShkaf?.currentTypeOfSwitchingDevice !== 0 &&
        targetShkaf?.currentTypeOfSwitchingDevice !== 0
      ) {
        toast({
          title: `good`,
          status: "success",
          description: `Выполнено!`,
          isClosable: true,
        });
        dispatch(
          addEdgeRedux({
            id: uuidv4(),
            source: sourceShkaf?.id,
            target: targetShkaf?.id,
            type: "step",
            projectId: params,
          })
        );
        await addEdgeApi({
          id: uuidv4(),
          source: sourceShkaf?.id,
          target: targetShkaf?.id,
          type: "step",
          projectId: params,
        });
      } else {
        toast({
          title: `error`,
          status: "error",
          description: `Нельзя, нет коммутационных аппаратов`,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: `error`,
        status: "error",
        description: `Отсуствутет ячейка`,
        isClosable: true,
      });
    }
  };

  return (
    <header className={styles.header}>
      <Button colorScheme="blue" onClick={addFigure}>
        Добавить ячейку
      </Button>
      <Button colorScheme="red" onClick={deleteItem}>
        Удалить ячейку
      </Button>
      <Button colorScheme="green" onClick={connectTires}>
        Соединить секции
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
      <form
        ref={myFormRef}
        // action="http://localhost:3000/addStencil"
        id="uploadForm"
        method="post"
        encType="multipart/form-data"
      >
        <label className={styles.addTrafaret}>
          <span>Добавить изображени</span>
          <input
            type="file"
            id="myfile"
            name="myFileName"
            accept="image/png, image/jpeg"
            className={styles.importJSONBtn}
            onChange={importImage}
          />
        </label>
        {/* <input type="submit" value="Загрузить" onClick={onSubmitClick} /> */}
      </form>
      <Link to={"/projects"} onClick={goToMenu}>
        В меню <IoIosReturnLeft />
      </Link>
      <Button onClick={() => onOpenOprList()}>
        <Tooltip hasArrow label="Перейти к опросному листу">
          ОПРОСНЫЙ ЛИСТ
        </Tooltip>
      </Button>
      {isOpenOprList && (
        <OprosnyListModal isOpen={isOpenOprList} onClose={onCloseOprList} />
      )}
      <div onClick={() => onOpen()}>Справочная информация</div>
      {isOpen && <SpravochInfModal isOpen={isOpen} onClose={onClose} />}
    </header>
  );
};

export default TopNavbar;
