// @ts-nocheck
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";

import styles from "./properties.module.scss";

import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { updateProp } from "../store/flowSlice";
import ToastStatusExample from "../widgets/ToastStatus";

const InstrumentCurrentTransformers = memo(
  function InstrumentCurrentTransformers({ id }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);

    // const currentTransformatorOption = useAppSelector(
    //   (state) =>
    //     state.nodes.nodes.find((node) => node.id === id)
    //       ?.currentTransformatorOption
    // );

    const toast = useToast();
    const dispatch = useDispatch();
    const currentTransformatorOption = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.currentTransformatorOption
    );
    const accuracyClass = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.accuracyClass
    );
    const manufacturer = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.manufacturer
    );
    const name = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.name
    );
    const oneSecondThermalCurrent = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.oneSecondThermalCurrent
    );
    const transformationRatio = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.transformationRatio
    );
    const type = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.type
    );
    const typeOfService = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.instrumentCurrentTransformers.typeOfService
    );

    const currentCellOption = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)?.currentCellOption
    );
    const totalPowerOfAllElectricalAppliances = useAppSelector(
      (state) =>
        state.flow.nodes.find((node) => node.id === id)
          ?.totalPowerOfAllElectricalAppliances
    );
    const currentOL = useAppSelector(
      (state) => state.flow.nodes.find((node) => node.id === id)?.currentOL
    );

    const totalVoltageForAll = useAppSelector(
      (state) =>
        state.flow.nodes.find((item) => item.type === "MainSchemeType")
          ?.totalVoltageForAll
    );

    const [
      currentTransformatorOptionQuery,
      setCurrentTransformatorOptionQuery,
    ] = useState(0);

    const [transformationRatioPropInvalid, setTransformationRatioPropInvalid] =
      useState(false);

    // let currentTransformatorOptionQuery = 0;

    // if ([1, 4].includes(currentTransformatorOption))
    //   currentTransformatorOptionQuery = 2;
    // if ([2, 5].includes(currentTransformatorOption))
    //   currentTransformatorOptionQuery = 3;
    // if ([3, 6].includes(currentTransformatorOption))
    //   currentTransformatorOptionQuery = 4;

    useEffect(() => {
      [1, 4].includes(currentTransformatorOption) &&
        setCurrentTransformatorOptionQuery(2);
      [5, 6].includes(currentTransformatorOption) &&
        setCurrentTransformatorOptionQuery(3);
      [3, 6].includes(currentTransformatorOption) &&
        setCurrentTransformatorOptionQuery(4);
      console.log(id, currentTransformatorOption);
    }, [currentTransformatorOption, id]);

    useEffect(() => {
      console.log(+transformationRatio?.split("/")[0], currentOL);
      const math =
        totalPowerOfAllElectricalAppliances / totalVoltageForAll / 3 ** (1 / 2);
      if (
        +transformationRatio?.split("/")[0] < currentOL &&
        currentCellOption === 6
      ) {
        toast({
          title: `Ошибка! Выберите устройство с большим коэффициентом трансформации(>${math})`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        // setTransformationRatioPropInvalid(true);
      }
      // else {
      //   setTransformationRatioPropInvalid(false);
      // }
    }, [totalPowerOfAllElectricalAppliances]);

    useEffect(() => {
      if (
        +transformationRatio?.split("/")[0] < currentOL &&
        currentCellOption === 6
      ) {
        setTransformationRatioPropInvalid(true);
      } else {
        setTransformationRatioPropInvalid(false);
      }
    }, [currentOL, transformationRatio]);

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
                      <Text>Измерительные Трансформаторы Тока</Text>
                      <MyInput
                        tag={"InstrumentCurrentTransformersType"}
                        label={"Тип"}
                        inputType={"text"}
                        value={type}
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
                      value={name}
                      opt1={"instrumentCurrentTransformers"}
                      opt2={"name"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"InstrumentCurrentTransformersManufacturer"}
                      label={"Производитель"}
                      inputType={"text"}
                      value={manufacturer}
                      opt1={"instrumentCurrentTransformers"}
                      opt2={"manufacturer"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"InstrumentCurrentTransformersTransformationRatio"}
                      label={"Коэффициент трансформации"}
                      inputType={"text"}
                      value={transformationRatio}
                      opt1={"instrumentCurrentTransformers"}
                      opt2={"transformationRatio"}
                      propValid={transformationRatioPropInvalid}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"InstrumentCurrentTransformersAccuracyClass"}
                      label={"Класс точности"}
                      inputType={"text"}
                      value={accuracyClass}
                      opt1={"instrumentCurrentTransformers"}
                      opt2={"accuracyClass"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "InstrumentCurrentTransformersOneSecondThermalCurrent"
                      }
                      label={"Односекундный ток термической стойкости, кА"}
                      inputType={"number"}
                      value={oneSecondThermalCurrent}
                      opt1={"instrumentCurrentTransformers"}
                      opt2={"oneSecondThermalCurrent"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"InstrumentCurrentTransformersTypeOfService"}
                      label={"Вид обслуживания"}
                      inputType={"text"}
                      value={typeOfService}
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
  }
);

export default InstrumentCurrentTransformers;
