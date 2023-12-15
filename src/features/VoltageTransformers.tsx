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
import styles from "./VoltageTransformers.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";

const VoltageTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { data, error, isLoading } = useFetchDataQuery("VoltageTransformers");
  const dispatch = useDispatch();
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const voltageTransformers = currentItemProperties?.voltageTransformers;

  const allVoltageTransformers = Object.values(voltageTransformers);

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

                  <Box as="span" flex="1" textAlign="left">
                    <MyInputModal
                      label={"Измерительные Трансформаторы Напряжения"}
                      value={allVoltageTransformers.toString()}
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"VoltageTransformersType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={voltageTransformers.type}
                    opt1={"voltageTransformers"}
                    opt2={"type"}
                    onChange={inputChange}
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
                      type={"voltageTransformers"}
                    />
                  )}
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"VoltageTransformersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={voltageTransformers.name}
                    opt1={"voltageTransformers"}
                    opt2={"name"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={"VoltageTransformersManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={voltageTransformers.manufacturer}
                    opt1={"voltageTransformers"}
                    opt2={"manufacturer"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersRatedThreePhasePowerOfTheFirstWinding"
                    }
                    label={"Номинальная трехфазная мощность первой обмотки"}
                    inputType={"number"}
                    value={
                      voltageTransformers.ratedThreePhasePowerOfTheFirstWinding
                    }
                    opt1={"voltageTransformers"}
                    opt2={"ratedThreePhasePowerOfTheFirstWinding"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersAccuracyClassOfTheFirstSecondaryWinding"
                    }
                    label={"Класс точности первой вторичной обмотки"}
                    inputType={"number"}
                    value={
                      voltageTransformers.accuracyClassOfTheFirstSecondaryWinding
                    }
                    opt1={"voltageTransformers"}
                    opt2={"accuracyClassOfTheFirstSecondaryWinding"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersRatedThreePhasePowerOfTheSecondSecondaryWinding"
                    }
                    label={
                      "Номинальная трехфазная мощность второй вторичной обмотки"
                    }
                    inputType={"number"}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersAccuracyClassOfTheSecondSecondaryWinding"
                    }
                    label={"Класс точности второй вторичной обмотки"}
                    inputType={"number"}
                    value={
                      voltageTransformers.accuracyClassOfTheSecondSecondaryWinding
                    }
                    opt1={"voltageTransformers"}
                    opt2={"accuracyClassOfTheSecondSecondaryWinding"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersRatedThreePhasePowerOfAadditionalSecondaryWinding"
                    }
                    label={
                      "Номинальная трехфазная мощность дополнительной вторичной обмотки"
                    }
                    inputType={"number"}
                    value={
                      voltageTransformers.ratedThreePhasePowerOfAadditionalSecondaryWinding
                    }
                    opt1={"voltageTransformers"}
                    opt2={"ratedThreePhasePowerOfAadditionalSecondaryWinding"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersAccuracyClassOfSecondaryReturnWires"
                    }
                    label={"Класс точности дополнительной вторичной обмотки"}
                    inputType={"number"}
                    value={
                      voltageTransformers.accuracyClassOfSecondaryReturnWires
                    }
                    opt1={"voltageTransformers"}
                    opt2={"accuracyClassOfSecondaryReturnWires"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"} m={"16px"}>
                  <MyInput
                    tag={
                      "VoltageTransformersRatedLineVoltageAtTheTerminalsOfThePrimaryWinding"
                    }
                    label={
                      "Номинальное линейное напряжение на выводах первичной обмотки"
                    }
                    inputType={"number"}
                    value={
                      voltageTransformers.ratedLineVoltageAtTheTerminalsOfThePrimaryWinding
                    }
                    opt1={"voltageTransformers"}
                    opt2={"ratedLineVoltageAtTheTerminalsOfThePrimaryWinding"}
                    onChange={inputChange}
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

export default VoltageTransformers;
