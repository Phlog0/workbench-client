// @ts-nocheck
import React, { useRef, useState } from "react";
import styles from "./properties.module.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
  Input,
  Select,
  Button,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Lorem,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";
import MyInputModal from "../shared/MyInputModal";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { useFetchDataQuery } from "../services/dictService";
import { updateProp } from "../store/flowSlice";
import { memo } from "react";
import { render } from "react-dom";

const TransformersForOwnNeeds = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const name = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.transformersForOwnNeeds
        .name
  );
  const type = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.transformersForOwnNeeds
        .type
  );
  const manufacturer = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.transformersForOwnNeeds
        .manufacturer
  );
  const ratedPower = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.transformersForOwnNeeds
        .ratedPower
  );

  // const transformersForOwnNeeds =
  //   currentItemProperties?.transformersForOwnNeeds;
  // const currentItemProperties = useAppSelector((state) =>
  //   state.flow.nodes.find((node) => node.id === id)
  // );
  // const currentItemProperties = useAppSelector(
  //   (state) => state.flow.currentNodeId
  // );

  const [state, setState] = useState(1);

  // const transformersForOwnNeeds =
  //   currentItemProperties?.transformersForOwnNeeds;

  const dispatch = useDispatch();
  console.log(">>>>>>>>>>TRSNSOWN-RENDER");
  return (
    <>
      <Accordion allowToggle className="">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                  <div className={styles.inputContainer}>
                    <Text>Трансформаторы собственных нужд</Text>
                    <MyInput
                      tag={"TransformersForOwnNeedsType"}
                      label={"Тип"}
                      inputType={"text"}
                      opt1={"transformersForOwnNeeds"}
                      opt2={"type"}
                      value={type}
                    />
                    <Button
                      className={styles.OpenMenuDots}
                      ref={btnRef}
                      onClick={onOpen}
                    >
                      ...
                    </Button>

                    {isOpen && (
                      <MyModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        type={"transformersForOwnNeeds"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"TransformersForOwnNeedsName"}
                    label={"Наименование"}
                    inputType={"text"}
                    opt1={"transformersForOwnNeeds"}
                    opt2={"name"}
                    value={name}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"TransformersForOwnNeedsManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    opt1={"transformersForOwnNeeds"}
                    opt2={"manufacturer"}
                    value={manufacturer}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"TransformersForOwnNeedsAccuracyСlass"}
                    label={"Номинальная мощность (кВА)"}
                    inputType={"text"}
                    opt1={"transformersForOwnNeeds"}
                    opt2={"ratedPower"}
                    value={ratedPower}
                  />
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};
// ,

// arePropsEqual);

// const TransformersForOwnNeeds = memo(function TransformersForOwnNeeds({ id }) {
//   console.log(id);
//   console.log('>>>>>>>>>>>>>>>>>>>>>>>render');
//   return <>hi</>;
// }, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  console.log(oldProps.id, newProps.id);
  return oldProps.id === newProps.id;
}

export default TransformersForOwnNeeds;
