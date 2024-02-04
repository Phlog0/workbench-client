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

const PowerTransducersType2 = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
 
  
  const currentItemProperties = useAppSelector((state) =>
  state.nodes.nodes.find((node) => node.id === id)
);
const powerTransducersType2 =
  currentItemProperties?.powerTransducersType2;

const AllPowerTransducersType2 = Object.values(powerTransducersType2);

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
                      label={"Измерительные преобразователи мощности тип 1"}
                      value={AllPowerTransducersType2.toString()}
                    />
                    <Button
                      className={styles.OpenMenuDots}
                      ref={btnRef}
                      onClick={onOpen}
                    >
                      ...
                    </Button>
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2Type"}
                    label={"Тип"}
                    inputType={"text"}
                    value={powerTransducersType2.type}
                    opt1={"powerTransducersType2"}
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
                      type={'powerTransducersType2'}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={powerTransducersType2.name}
                    opt1={"powerTransducersType2"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={powerTransducersType2.manufacturer}
                    opt1={"powerTransducersType2"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"text"}
                    value={powerTransducersType2.numberOfChannels}
                    opt1={"powerTransducersType2"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2InputCurrentRange"}
                    label={"Диапазон входного тока"}
                    inputType={"text"}
                    value={powerTransducersType2.inputCurrentRange}
                    opt1={"powerTransducersType2"}
                    opt2={"inputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2OutputCurrentRange"}
                    label={"Диапазон выходного тока"}
                    inputType={"text"}
                    value={powerTransducersType2.outputCurrentRange}
                    opt1={"powerTransducersType2"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2InputVoltageRange"}
                    label={"Диапазон входного напряжения"}
                    inputType={"text"}
                    value={powerTransducersType2.inputVoltageRange}
                    opt1={"powerTransducersType2"}
                    opt2={"inputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2OutputVoltageRange"}
                    label={"Диапазон выходного напряжения"}
                    inputType={"text"}
                    value={powerTransducersType2.outputVoltageRange}
                    opt1={"powerTransducersType2"}
                    opt2={"outputVoltageRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2Sin"}
                    label={"Sin ф"}
                    inputType={"text"}
                    value={powerTransducersType2.sin}
                    opt1={"powerTransducersType2"}
                    opt2={"sin"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"powerTransducersType2Cos"}
                    label={"Cos ф"}
                    inputType={"text"}
                    value={powerTransducersType2.cos}
                    opt1={"powerTransducersType2"}
                    opt2={"cos"}
                    
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

export default PowerTransducersType2;
