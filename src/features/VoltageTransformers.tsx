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
import { updateProp } from "../store/flowSlice";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import MySelect from "../shared/MySelect";

const VoltageTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const isThereAVoltageTransformers = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)
        ?.isThereAVoltageTransformers
  );
  const accuracyClassOfSecondaryReturnWires = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.accuracyClassOfSecondaryReturnWires
  );
  const accuracyClassOfTheFirstSecondaryWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.accuracyClassOfTheFirstSecondaryWinding
  );
  const accuracyClassOfTheSecondSecondaryWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.accuracyClassOfTheSecondSecondaryWinding
  );
  const manufacturer = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.manufacturer
  );
  const name = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers?.name
  );
  const ratedLineVoltageAtTheTerminalsOfThePrimaryWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.ratedLineVoltageAtTheTerminalsOfThePrimaryWinding
  );
  const ratedThreePhasePowerOfAadditionalSecondaryWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.ratedThreePhasePowerOfAadditionalSecondaryWinding
  );
  const ratedThreePhasePowerOfTheFirstWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.ratedThreePhasePowerOfTheFirstWinding
  );
  const ratedThreePhasePowerOfTheSecondSecondaryWinding = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers
        ?.ratedThreePhasePowerOfTheSecondSecondaryWinding
  );
  const type = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.voltageTransformers?.type
  );

  return (
    <div className={styles.container}>
      <MySelect
        tag={"isThereAVoltageTransformers"}
        label={"Есть Измерительные Трансформаторы Напряжения"}
        options={["Нет", "Да"]}
        itemId={id}
        current={isThereAVoltageTransformers}
      />
      {isThereAVoltageTransformers !== 0 && (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <div className={styles.inputContainer}>
                      <Text>Измерительные Трансформаторы Напряжения</Text>
                      <MyInput
                        tag={"VoltageTransformersType"}
                        label={"Тип"}
                        inputType={"text"}
                        value={type}
                        opt1={"voltageTransformers"}
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
                          type={"voltageTransformers"}
                        />
                      )}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"VoltageTransformersName"}
                      label={"Наименование"}
                      inputType={"text"}
                      value={name}
                      opt1={"voltageTransformers"}
                      opt2={"name"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"VoltageTransformersManufacturer"}
                      label={"Производитель"}
                      inputType={"text"}
                      value={manufacturer}
                      opt1={"voltageTransformers"}
                      opt2={"manufacturer"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersRatedThreePhasePowerOfTheFirstWinding"
                      }
                      label={"Номинальная трехфазная мощность первой обмотки"}
                      inputType={"text"}
                      value={ratedThreePhasePowerOfTheFirstWinding}
                      opt1={"voltageTransformers"}
                      opt2={"ratedThreePhasePowerOfTheFirstWinding"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersAccuracyClassOfTheFirstSecondaryWinding"
                      }
                      label={"Класс точности первой вторичной обмотки"}
                      inputType={"text"}
                      value={accuracyClassOfTheFirstSecondaryWinding}
                      opt1={"voltageTransformers"}
                      opt2={"accuracyClassOfTheFirstSecondaryWinding"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersRatedThreePhasePowerOfTheSecondSecondaryWinding"
                      }
                      label={
                        "Номинальная трехфазная мощность второй вторичной обмотки"
                      }
                      inputType={"text"}
                      value={ratedThreePhasePowerOfTheSecondSecondaryWinding}
                      opt1={"voltageTransformers"}
                      opt2={"ratedThreePhasePowerOfTheSecondSecondaryWinding"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersAccuracyClassOfTheSecondSecondaryWinding"
                      }
                      label={"Класс точности второй вторичной обмотки"}
                      inputType={"text"}
                      value={accuracyClassOfTheSecondSecondaryWinding}
                      opt1={"voltageTransformers"}
                      opt2={"accuracyClassOfTheSecondSecondaryWinding"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersRatedThreePhasePowerOfAadditionalSecondaryWinding"
                      }
                      label={
                        "Номинальная трехфазная мощность дополнительной вторичной обмотки"
                      }
                      inputType={"text"}
                      value={ratedThreePhasePowerOfAadditionalSecondaryWinding}
                      opt1={"voltageTransformers"}
                      opt2={"ratedThreePhasePowerOfAadditionalSecondaryWinding"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersAccuracyClassOfSecondaryReturnWires"
                      }
                      label={"Класс точности дополнительной вторичной обмотки"}
                      inputType={"text"}
                      value={accuracyClassOfSecondaryReturnWires}
                      opt1={"voltageTransformers"}
                      opt2={"accuracyClassOfSecondaryReturnWires"}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={
                        "VoltageTransformersRatedLineVoltageAtTheTerminalsOfThePrimaryWinding"
                      }
                      label={
                        "Номинальное линейное напряжение на выводах первичной обмотки"
                      }
                      inputType={"text"}
                      value={ratedLineVoltageAtTheTerminalsOfThePrimaryWinding}
                      opt1={"voltageTransformers"}
                      opt2={"ratedLineVoltageAtTheTerminalsOfThePrimaryWinding"}
                    />
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default VoltageTransformers;
