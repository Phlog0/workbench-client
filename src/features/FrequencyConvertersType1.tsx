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
import styles from "./FrequencyConvertersType1.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";

const FrequencyConvertersType1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { data, error, isLoading } = useFetchDataQuery(
    "FrequencyConvertersType1"
  );
  return (
    <>
      <Accordion allowToggle className="">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                  <Box as="span" flex="1" textAlign="left">
                    <MyInputModal
                      label={"Измерительные преобразователи частоты тип 1"}
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType1Type"}
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
                      data={data}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1Name"}
                    label={"Наименование"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1InputVoltageRange"}
                    label={"Диапазон входного напряжения, В"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1OutputCurrentRange"}
                    label={"Диапазон выходного тока, мА"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1FrequencyMeasurementRange"}
                    label={"Диапазон измерения частоты, Гц"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"FrequencyConvertersType1Quantity"}
                    label={"Количество"}
                    inputType={"number"}
                    // disabled 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
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

export default FrequencyConvertersType1;
