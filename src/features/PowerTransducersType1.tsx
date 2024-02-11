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
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";

const PowerTransducersType1 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const powerTransducersType1 = currentItemProperties?.powerTransducersType1;

  const AllPowerTransducersType1 = Object.values(powerTransducersType1);

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
                    <Text>Измерительные преобразователи мощности тип 1</Text>
                    <MyInput
                      tag={"PowerTransducersType1Type"}
                      label={"Тип"}
                      inputType={"text"}
                      value={powerTransducersType1.type}
                      opt1={"powerTransducersType1"}
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
                        type={"powerTransducersType1"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={powerTransducersType1.name}
                    opt1={"powerTransducersType1"}
                    opt2={"name"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={powerTransducersType1.manufacturer}
                    opt1={"powerTransducersType1"}
                    opt2={"manufacturer"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"text"}
                    value={powerTransducersType1.numberOfChannels}
                    opt1={"powerTransducersType1"}
                    opt2={"numberOfChannels"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1InputCurrentRange"}
                    label={"Диапазон входного тока"}
                    inputType={"text"}
                    value={powerTransducersType1.inputCurrentRange}
                    opt1={"powerTransducersType1"}
                    opt2={"inputCurrentRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1OutputCurrentRange"}
                    label={"Диапазон выходного тока"}
                    inputType={"text"}
                    value={powerTransducersType1.outputCurrentRange}
                    opt1={"powerTransducersType1"}
                    opt2={"outputCurrentRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1InputVoltageRange"}
                    label={"Диапазон входного напряжения"}
                    inputType={"text"}
                    value={powerTransducersType1.inputVoltageRange}
                    opt1={"powerTransducersType1"}
                    opt2={"inputVoltageRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1OutputVoltageRange"}
                    label={"Диапазон выходного напряжения"}
                    inputType={"text"}
                    value={powerTransducersType1.outputVoltageRange}
                    opt1={"powerTransducersType1"}
                    opt2={"outputVoltageRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1Sin"}
                    label={"Sin ф"}
                    inputType={"text"}
                    value={powerTransducersType1.sin}
                    opt1={"powerTransducersType1"}
                    opt2={"sin"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"PowerTransducersType1Cos"}
                    label={"Cos ф"}
                    inputType={"text"}
                    value={powerTransducersType1.cos}
                    opt1={"powerTransducersType1"}
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

export default PowerTransducersType1;
