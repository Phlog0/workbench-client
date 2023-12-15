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
import styles from "./CurrentTransducersType2.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";

const CurrentTransducersType2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { data, error, isLoading } = useFetchDataQuery(
    "CurrentTransducersType2"
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
                      label={"Измерительные преобразователь тока тип 2"}
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
                    tag={"CurrentTransducersType2Name"}
                    label={"Наименование"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType2Manufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType2NumberOfChannels"}
                    label={"Количество каналов"}
                    inputType={"number"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType2InputCurrentRange"}
                    label={"Диапазон входного тока, А"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType2OutputCurrentRange"}
                    label={"Диапазон выходного тока, А"}
                    inputType={"text"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"CurrentTransducersType2Quantity"}
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

export default CurrentTransducersType2;
