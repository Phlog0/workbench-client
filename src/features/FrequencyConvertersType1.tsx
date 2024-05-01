// @ts-nocheck
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

const FrequencyConvertersType1 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const frequencyConvertersType1 =
    currentItemProperties?.frequencyConvertersType1;

  const AllFrequencyConvertersType1 = Object.values(frequencyConvertersType1);

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
                    <Text>Измерительные преобразователи частоты тип 1</Text>
                      <MyInput
                      tag={"FrequencyConvertersType1Type"}
                      label={"Тип"}
                      inputType={"text"}
                      value={frequencyConvertersType1.type}
                      opt1={"frequencyConvertersType1"}
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
                        type={"frequencyConvertersType1"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
             
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={frequencyConvertersType1.name}
                    opt1={"frequencyConvertersType1"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={frequencyConvertersType1.manufacturer}
                    opt1={"frequencyConvertersType1"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"text"}
                    value={frequencyConvertersType1.numberOfChannels}
                    opt1={"frequencyConvertersType1"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1InputVoltageRange"}
                    label={"Диапазон входного напряжения, В"}
                    inputType={"text"}
                    value={frequencyConvertersType1.inputVoltageRange}
                    opt1={"frequencyConvertersType1"}
                    opt2={"inputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1OutputCurrentRange"}
                    label={"Диапазон выходного тока, мА"}
                    inputType={"text"}
                    value={frequencyConvertersType1.outputCurrentRange}
                    opt1={"frequencyConvertersType1"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1FrequencyMeasurementRange"}
                    label={"Диапазон измерения частоты, Гц"}
                    inputType={"text"}
                    value={frequencyConvertersType1.frequencyMeasurementRange}
                    opt1={"frequencyConvertersType1"}
                    opt2={"frequencyMeasurementRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"FrequencyConvertersType1Quantity"}
                    label={"Количество"}
                    inputType={"text"}
                    value={frequencyConvertersType1.quantity}
                    opt1={"frequencyConvertersType1"}
                    opt2={"quantity"}
                    
                    // disabled 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
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

export default FrequencyConvertersType1;
