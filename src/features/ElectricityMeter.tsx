// @ts-nocheck
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
import { updateProp } from "../store/flowSlice";
import MySelect from "../shared/MySelect";
import newNode from "../widgets/helpers/newNode";
const ElectricityMeter = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);




  const isThereAElectricityMeter =useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.isThereAElectricityMeter
  );

  const type = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.electricityMeter.type
  );
  const name = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.electricityMeter.name
  );
  const manufacturer = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.electricityMeter.manufacturer
  );
  const accuracyClass = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.electricityMeter.accuracyClass
  );

 

  return (
    <div className={styles.container}>
      <MySelect
        tag={"isThereAElectricityMeter"}
        label={"Есть Счетчик электроэнергии"}
        options={["Нет", "Да"]}
        itemId={id}
        current={isThereAElectricityMeter}
      />
      {isThereAElectricityMeter !== 0 && (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <div className={styles.inputContainer}>
                      <Text>Счетчик электроэнергии</Text>
                      <MyInput
                        tag={"ElectricityMeterType"}
                        label={"Тип"}
                        inputType={"text"}
                        opt1={"electricityMeter"}
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
                          type={"electricityMeter"}
                        />
                      )}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"ElectricityMeterName"}
                      label={"Наименование"}
                      inputType={"text"}
                      opt1={"electricityMeter"}
                      opt2={"name"}
                      value={name}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"ElectricityMeterManufacturer"}
                      label={"Производитель"}
                      inputType={"text"}
                      opt1={"electricityMeter"}
                      opt2={"manufacturer"}
                      value={manufacturer}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      tag={"ElectricityMeterAccuracyСlass"}
                      label={"Класс точности"}
                      inputType={"text"}
                      opt1={"electricityMeter"}
                      opt2={"accuracyClass"}
                      value={accuracyClass}
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

export default ElectricityMeter;
