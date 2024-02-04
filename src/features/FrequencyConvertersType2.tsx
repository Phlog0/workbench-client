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
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";
import styles from "./properties.module.scss";

import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";

const FrequencyConvertersType2 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
 
  
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const frequencyConvertersType2 =
    currentItemProperties?.frequencyConvertersType2;

  const AllfrequencyConvertersType2 = Object.values(frequencyConvertersType2);

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
                    <MyInputModal
                      label={"Измерительные преобразователи частоты тип 2"}
                      value={AllfrequencyConvertersType2.toString()}
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2Type"}
                    label={"Тип"}
                    inputType={"text"}
                    value={frequencyConvertersType2.type}
                    opt1={"frequencyConvertersType2"}
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
                      type={"frequencyConvertersType2"}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={frequencyConvertersType2.name}
                    opt1={"frequencyConvertersType2"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={frequencyConvertersType2.manufacturer}
                    opt1={"frequencyConvertersType2"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"text"}
                    value={frequencyConvertersType2.numberOfChannels}
                    opt1={"frequencyConvertersType2"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2InputVoltageRange"}
                    label={"Диапазон входного напряжения, В"}
                    inputType={"text"}
                    value={frequencyConvertersType2.inputVoltageRange}
                    opt1={"frequencyConvertersType2"}
                    opt2={"inputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2OutputCurrentRange"}
                    label={"Диапазон выходного тока, мА"}
                    inputType={"text"}
                    value={frequencyConvertersType2.outputCurrentRange}
                    opt1={"frequencyConvertersType2"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2FrequencyMeasurementRange"}
                    label={"Диапазон измерения частоты, Гц"}
                    inputType={"text"}
                    value={frequencyConvertersType2.frequencyMeasurementRange}
                    opt1={"frequencyConvertersType2"}
                    opt2={"measurementRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"frequencyConvertersType2Quantity"}
                    label={"Количество"}
                    inputType={"text"}
                    value={frequencyConvertersType2.quantity}
                    opt1={"frequencyConvertersType2"}
                    opt2={"uantity"}
                    
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

export default FrequencyConvertersType2;
