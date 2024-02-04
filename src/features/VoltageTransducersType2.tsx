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

const VoltageTransducersType2 = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);


  const currentItemProperties = useAppSelector((state) =>
  state.nodes.nodes.find((node) => node.id === id)
);
const voltageTransducersType2 =
  currentItemProperties?.voltageTransducersType2;

const AllvoltageTransducersType2 = Object.values(voltageTransducersType2);

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
                      label={"Измерительные преобразователь напряжения тип 2"}
                      value={AllvoltageTransducersType2.toString()}
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
              <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2Type"}
                    label={"Тип"}
                    inputType={"text"}
                    value={voltageTransducersType2.type}
                    opt1={"voltageTransducersType2"}
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
                      type={'voltageTransducersType2'}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={voltageTransducersType2.name}
                    opt1={"voltageTransducersType2"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={voltageTransducersType2.manufacturer}
                    opt1={"voltageTransducersType2"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                    value={voltageTransducersType2.numberOfChannels}
                    opt1={"voltageTransducersType2"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2InputVoltageRange"}
                    label={"Диапазон входного напряжения, В"}
                    inputType={"text"}
                    value={voltageTransducersType2.inputVoltageRange}
                    opt1={"voltageTransducersType2"}
                    opt2={"inputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2OutputCurrentRange"}
                    label={"Диапазон выходного тока, мА"}
                    inputType={"text"}
                    value={voltageTransducersType2.outputCurrentRange}
                    opt1={"voltageTransducersType2"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"voltageTransducersType2Quantity"}
                    label={"Количество"}
                    inputType={"number"}
                    value={voltageTransducersType2.quantity}
                    opt1={"voltageTransducersType2"}
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

export default VoltageTransducersType2;
