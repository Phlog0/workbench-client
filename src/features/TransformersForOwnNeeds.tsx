import React, { useRef } from "react";
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
import { updateProp } from "../store/nodesSlice";
const TransformersForOwnNeeds = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  const transformersForOwnNeeds =
    currentItemProperties?.transformersForOwnNeeds;

  const AllTransformersForOwnNeeds = Object.values(transformersForOwnNeeds);

  const dispatch = useDispatch();

  const inputChange = (event) => {
    dispatch(
      updateProp({
        id: id,
        key1: event.target.dataset.opt1,
        key2: event.target.dataset.opt2,
        value: event.target.value,
      })
    );
  };
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
                      value={transformersForOwnNeeds?.type}
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
                    value={transformersForOwnNeeds?.name}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"TransformersForOwnNeedsManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    opt1={"transformersForOwnNeeds"}
                    opt2={"manufacturer"}
                    value={transformersForOwnNeeds?.manufacturer}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"TransformersForOwnNeedsAccuracyСlass"}
                    label={"Номинальная мощность (кВА)"}
                    inputType={"text"}
                    opt1={"transformersForOwnNeeds"}
                    opt2={"ratedPower"}
                    value={transformersForOwnNeeds?.ratedPower}
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

export default TransformersForOwnNeeds;
