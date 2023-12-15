import React, { useRef } from "react";
import styles from "./ElectricityMeter.module.scss";
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
import MyInputModal from "../shared/MyInputModal";
const ElectricityMeter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Accordion allowToggle className="">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                  <Flex w={"100%"}>
                    <MyInputModal label={"Счетчик электроэнергии"} />
                    <Button
                      className={styles.OpenMenuDots}
                      ref={btnRef}
                      onClick={onOpen}
                    >
                      ...
                    </Button>
                  </Flex>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"} className={styles.inputContainer}>
                  <MyInput
                    tag={"ElectricityMeterType"}
                    label={"Тип"}
                    inputType={"text"}
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
                    />
                  )}
                </Flex>
                <Flex w={"100%"} className={styles.inputContainer}>
                  <MyInput
                    tag={"ElectricityMeterName"}
                    label={"Наименование"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} className={styles.inputContainer}>
                  <MyInput
                    tag={"ElectricityMeterManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} className={styles.inputContainer}>
                  <MyInput
                    tag={"ElectricityMeterAccuracyСlass"}
                    label={"Класс точности"}
                    inputType={"text"}
                  />
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ElectricityMeter;
