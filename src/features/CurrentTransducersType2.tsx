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

const CurrentTransducersType2 = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const currentTransducersType2 =
    currentItemProperties?.currentTransducersType2;

  const allcurrentTransducersType2 = Object.values(currentTransducersType2);

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
                    <Text>Измерительные преобразователь тока тип 2</Text>
                    <MyInput
                      tag={"currentTransducersType2Type"}
                      label={"Тип"}
                      inputType={"text"}
                      value={currentTransducersType2.type}
                      opt1={"currentTransducersType2"}
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
                        type={"currentTransducersType2"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"currentTransducersType2Name"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={currentTransducersType2.name}
                    opt1={"currentTransducersType2"}
                    opt2={"name"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"currentTransducersType2Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={currentTransducersType2.manufacturer}
                    opt1={"currentTransducersType2"}
                    opt2={"manufacturer"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"currentTransducersType2NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                    value={currentTransducersType2.numberOfChannels}
                    opt1={"currentTransducersType2"}
                    opt2={"numberOfChannels"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"currentTransducersType2InputCurrentRange"}
                    label={"Диапазон входного тока, А"}
                    inputType={"text"}
                    value={currentTransducersType2.inputCurrentRange}
                    opt1={"currentTransducersType2"}
                    opt2={"inputCurrentRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"currentTransducersType2OutputCurrentRange"}
                    label={"Диапазон выходного тока, А"}
                    inputType={"text"}
                    value={currentTransducersType2.outputCurrentRange}
                    opt1={"currentTransducersType2"}
                    opt2={"outputCurrentRange"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"CurrentTransducersType2Quantity"}
                    label={"Количество"}
                    inputType={"number"}
                    value={currentTransducersType2.quantity}
                    opt1={"currentTransducersType2"}
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

export default CurrentTransducersType2;
