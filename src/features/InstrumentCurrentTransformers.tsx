import React, { useRef } from "react";
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

import styles from "./properties.module.scss";

import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { updateProp } from "../store/nodesSlice";

const InstrumentCurrentTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  // const currentTransformatorOption = useAppSelector(
  //   (state) =>
  //     state.nodes.nodes.find((node) => node.id === id)
  //       ?.currentTransformatorOption
  // );

  const dispatch = useDispatch();
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const instrumentCurrentTransformers =
    currentItemProperties?.instrumentCurrentTransformers;
  const currentTransformatorOption =
    currentItemProperties?.currentTransformatorOption;

  let currentTransformatorOptionQuery: number;

  if (currentTransformatorOption === 1 || currentTransformatorOption === 4)
    currentTransformatorOptionQuery = 2;
  if (currentTransformatorOption === 2 || currentTransformatorOption === 5)
    currentTransformatorOptionQuery = 3;
  if (currentTransformatorOption === 3 || currentTransformatorOption === 6)
    currentTransformatorOptionQuery = 4;

  const allInstrumentCurrentTransformers = Object.values(
    instrumentCurrentTransformers
  );

  // console.log("CURRENT");

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
                    <Text>змерительные Трансформаторы Тока</Text>
                    <MyInput
                    tag={"InstrumentCurrentTransformersType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.type}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"type"}
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
                      type={`instrumentCurrentTransformers`}
                      query={currentTransformatorOptionQuery}
                    />
                  )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
     
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.name}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"name"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.manufacturer}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"manufacturer"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersTransformationRatio"}
                    label={"Коэффициент трансформации"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.transformationRatio}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"transformationRatio"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersAccuracyClass"}
                    label={"Класс точности"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.accuracyClass}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"accuracyClass"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersOneSecondThermalCurrent"}
                    label={"Односекундный ток термической стойкости, кА"}
                    inputType={"number"}
                    value={
                      instrumentCurrentTransformers.oneSecondThermalCurrent
                    }
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"oneSecondThermalCurrent"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersTypeOfService"}
                    label={"Вид обслуживания"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.typeOfService}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"typeOfService"}
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

export default InstrumentCurrentTransformers;
