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
import { useDispatch } from "react-redux";
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";

const VoltageTransducersType1 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);


  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const voltageTransducersType1 =
    currentItemProperties?.voltageTransducersType1;

  const AllVoltageTransducersType1 = Object.values(voltageTransducersType1);

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
                      label={"Измерительные преобразователь напряжения тип 1"}
                      value={AllVoltageTransducersType1.toString()}
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1Type"}
                    label={"Тип"}
                    inputType={"text"}
                    value={voltageTransducersType1.type}
                    opt1={"voltageTransducersType1"}
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
                      type={"voltageTransducersType1"}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={voltageTransducersType1.name}
                    opt1={"voltageTransducersType1"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={voltageTransducersType1.manufacturer}
                    opt1={"voltageTransducersType1"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                    value={voltageTransducersType1.numberOfChannels}
                    opt1={"voltageTransducersType1"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1InputVoltageRange"}
                    label={"Диапазон входного напряжения, В"}
                    inputType={"text"}
                    value={voltageTransducersType1.inputVoltageRange}
                    opt1={"voltageTransducersType1"}
                    opt2={"inputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1OutputCurrentRange"}
                    label={"Диапазон выходного тока, мА"}
                    inputType={"text"}
                    value={voltageTransducersType1.outputCurrentRange}
                    opt1={"voltageTransducersType1"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"VoltageTransducersType1Quantity"}
                    label={"Количество"}
                    inputType={"number"}
                    value={voltageTransducersType1.quantity}
                    opt1={"voltageTransducersType1"}
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

export default VoltageTransducersType1;
