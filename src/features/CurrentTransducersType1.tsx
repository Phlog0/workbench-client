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

const CurrentTransducersType1 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);


  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const currentTransducersType1 =
    currentItemProperties?.currentTransducersType1;

  const allCurrentTransducersType1 = Object.values(currentTransducersType1);

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
                      label={"Измерительные преобразователь тока тип 1"}
                      value={allCurrentTransducersType1.toString()}
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1Type"}
                    label={"Тип"}
                    inputType={"text"}
                    value={currentTransducersType1.type}
                    opt1={"currentTransducersType1"}
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
                      type={'currentTransducersType1'}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={currentTransducersType1.name}
                    opt1={"currentTransducersType1"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={currentTransducersType1.manufacturer}
                    opt1={"currentTransducersType1"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                    value={currentTransducersType1.numberOfChannels}
                    opt1={"currentTransducersType1"}
                    opt2={"numberOfChannels"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1InputCurrentRange"}
                    label={"Диапазон входного тока, А"}
                    inputType={"text"}
                    value={currentTransducersType1.inputCurrentRange}
                    opt1={"currentTransducersType1"}
                    opt2={"inputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1OutputCurrentRange"}
                    label={"Диапазон выходного тока, А"}
                    inputType={"text"}
                    value={currentTransducersType1.outputCurrentRange}
                    opt1={"currentTransducersType1"}
                    opt2={"outputCurrentRange"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType1Quantity"}
                    label={"Количество"}
                    inputType={"number"}
                    value={currentTransducersType1.quantity}
                    opt1={"currentTransducersType1"}
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

export default CurrentTransducersType1;
