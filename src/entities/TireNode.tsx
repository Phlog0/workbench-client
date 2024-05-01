// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Handle,
  Position,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  applyEdgeChanges,
  applyNodeChanges,
  NodeResizer,
  NodeResizeControl,
} from "reactflow";
import { v4 as uuidv4 } from "uuid";

import styles from "./TireNode.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  addNode,
  changeCurrentNode,
  changeError,
  changeTireWidth,
  deleteNode,
} from "../store/flowSlice";
import { Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  useUpdateSamoproverkaMutation,
  useUpdateTireWidthAddFastenerMutation,
  useUpdateTireWidthRemoveFastenerMutation,
} from "../services/projectService";
import renderTires from "./utils/rednerTiresOnAdd";
import renderTiresOnRemove from "./utils/renderItemsOnRemove";
import renderTiresOnAdd from "./utils/rednerTiresOnAdd";
import { shallowEqual } from "react-redux";
// import { updateTireSize } from "../store/nodesSlice";

const TireNode = ({ id }) => {
  const dispatch = useAppDispatch();

  const { id: projectId } = useParams();

  const [updateTireAddApi, resultTireAdd] =
    useUpdateTireWidthAddFastenerMutation();
  const [updateTireRemovApi, resultTireRemove] =
    useUpdateTireWidthRemoveFastenerMutation();

  const reduxNodes = useAppSelector((state) => state.flow.nodes);
  const currentId = useAppSelector((state) => state.flow.currentNodeId);
  // const vvodError = useAppSelector(
  //   (state) => state.flow.nodes.find((item) => item.id === id)?.vvodError
  // );
  const zeroVvodWarning = useAppSelector(
    (state) => state.flow.nodes.find((item) => item.id === id)?.zeroVvodWarning
  );
  const toast = useToast();

  const nodes = useAppSelector((state) => state.flow.nodes);
  const tireWidth = nodes.find((item) => item.id === id)?.style.width;
  const tireCreatedAt = nodes.find((item) => item.id === id)?.createdAt;

  const [samoPorv, serSamoporv] = useUpdateSamoproverkaMutation();

  const addWidth = async () => {
    const action = 300;
    const otherTiresRightIds = nodes
      .filter(
        (item) =>
          item.type === "TireNodeType" && +item.createdAt > +tireCreatedAt
      )
      .map((item) => item.id);

    const { newTireWidth, newFastener } = renderTiresOnAdd(
      action,
      tireWidth,
      projectId,
      id
    );
    dispatch(
      changeTireWidth({
        id,
        newTireWidth: newTireWidth,
        otherTiresRightIds,
        numberWidth: action,
      })
    );
    dispatch(addNode(newFastener));
    await updateTireAddApi({
      tireId: id,
      newTireWidth,
      newFastener,
      otherTiresRightIds,
      numberWidth: action,
    });
  };

  const removeWidth = async () => {
    if (tireWidth < 400) {
      toast({
        title: `Достигнута минимальная длина`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const otherTiresRightIds = nodes
      .filter(
        (item) =>
          item.type === "TireNodeType" && +item.createdAt > +tireCreatedAt
      )
      .map((item) => item.id);

    const action = -300;
    const { newTireWidth } = renderTiresOnRemove(action, tireWidth);

    const allFasteners = nodes.filter((item) => item.parentNode === id);

    const fastener = allFasteners.reduce(function (prev, current) {
      return prev && prev.y > current.y ? prev : current;
    }, null);

    dispatch(
      changeTireWidth({
        id,
        newTireWidth: newTireWidth,
        otherTiresRightIds,
        numberWidth: action,
      })
    );
    const childShkaf = reduxNodes.find(
      (item) => item.parentNode === fastener?.id
    );

    if (childShkaf) {
      dispatch(deleteNode({ currentNodeId: childShkaf?.id }));
    }
    dispatch(deleteNode({ currentNodeId: fastener?.id }));
    dispatch(changeCurrentNode({ currentItemNode: null }));
    await updateTireRemovApi({
      tireId: id,
      newTireWidth,
      fastenerId: fastener?.id,
      childShkafId: childShkaf?.id,
      otherTiresRightIds,
      numberWidth: action,
    });
  };

  const allChildFasteners = useAppSelector(
    (state) => state.flow.nodes.filter((item) => item.parentNode === id),
    shallowEqual
  );

  const allChildFastenersIds = allChildFasteners.map((item) => item.id);

  const vvodLength = useAppSelector((state) =>
    state.flow.nodes.filter(
      (item) =>
        item.currentCellOption === 5 &&
        allChildFastenersIds.includes(item.parentNode),
      shallowEqual
    )
  ).length;
  const ukrmLength = useAppSelector((state) =>
    state.flow.nodes.filter(
      (item) =>
        item.currentCellOption === 7 &&
        allChildFastenersIds.includes(item.parentNode),
      shallowEqual
    )
  ).length;

  const redOutline = (vvodLength, ukrmLength) => {
    if (vvodLength > 1 || ukrmLength > 1) return styles.containerError;
    return styles.container;
  };

  useEffect(() => {
    if (vvodLength >= 2) {
      dispatch(
        changeError({
          id,
          prop: "vvodError",
          value: true,
        })
      );
    }
    if (vvodLength === 0) {
      dispatch(
        changeError({
          id,
          prop: "vvodError",
          value: false,
        })
      );
      dispatch(
        changeError({
          id,
          prop: "zeroVvodWarning",
          value: true,
        })
      );
    }
    if (vvodLength === 1) {
      dispatch(
        changeError({
          id,
          prop: "vvodError",
          value: false,
        })
      );
      samoPorv({
        tireId: id,
        prop: "vvodError",
        value: false,
      });
      dispatch(
        changeError({
          id,
          prop: "zeroVvodWarning",
          value: false,
        })
      );
      samoPorv({
        tireId: id,
        prop: "zeroVvodWarning",
        value: false,
      });
    }
    if (ukrmLength > 1) {
      dispatch(
        changeError({
          id,
          prop: "ukrmError",
          value: true,
        })
      );
      samoPorv({
        tireId: id,
        prop: "ukrmError",
        value: true,
      });
    } else {
      dispatch(
        changeError({
          id,
          prop: "ukrmError",
          value: false,
        })
      );
      samoPorv({
        tireId: id,
        prop: "ukrmError",
        value: false,
      });
    }
  }, [ukrmLength, vvodLength, id]);

  const allTokDlyaVvoda = useAppSelector((state) =>
    state.flow.nodes.filter(
      (item) =>
        item.currentCellOption === 6 &&
        allChildFastenersIds.includes(item.parentNode)
    )
  ).reduce((acc, cur) => acc + cur.currentOL, 0);

  useEffect(() => {
    const samop = async () => {
      dispatch(
        changeError({
          id,
          prop: "tireCurrentOLAll",
          value: allTokDlyaVvoda,
        })
      );

      await samoPorv({
        tireId: id,
        prop: "tireCurrentOLAll",
        value: allTokDlyaVvoda,
      });
    };
    samop();
  }, [allTokDlyaVvoda]);

  return (
    <>
      <div className={redOutline(vvodLength, ukrmLength)}>
        <div className={vvodLength === 0 ? styles.warningOutline : ""}> </div>
        <div className={styles.tire}></div>
        <div className={styles.actionBtns}>
          <Button colorScheme="green" onClick={addWidth}>
            +
          </Button>
          <Button colorScheme="red" onClick={removeWidth}>
            -
          </Button>
        </div>
      </div>
    </>
  );
};

export default TireNode;
