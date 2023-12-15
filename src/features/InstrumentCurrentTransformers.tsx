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
import styles from "./InstrumentCurrentTransformers.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { updateProp } from "../store/nodesSlice";

const InstrumentCurrentTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { data, error, isLoading } = useFetchDataQuery(
    "InstrumentCurrentTransformers"
  );

  const dispatch = useDispatch();
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const instrumentCurrentTransformers =
    currentItemProperties?.instrumentCurrentTransformers;

  const allInstrumentCurrentTransformers = Object.values(
    instrumentCurrentTransformers
  );


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
                      label={"Измерительные Трансформаторы Тока"}
                      value={allInstrumentCurrentTransformers.toString()}
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.type}
                    opt1={"instrumentCurrentTransformers"}
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
                      type={'instrumentCurrentTransformers'}
                    />
                  )}
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.name}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"name"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.manufacturer}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"manufacturer"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersTransformationRatio"}
                    label={"Коэффициент трансформации"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.transformationRatio}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"transformationRatio"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersAccuracyClass"}
                    label={"Класс точности"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.accuracyClass}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"accuracyClass"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersOneSecondThermalCurrent"}
                    label={"Односекундный ток термической стойкости, кА"}
                    inputType={"number"}
                    value={
                      instrumentCurrentTransformers.oneSecondThermalCurrent
                    }
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"oneSecondThermalCurrent"}
                    onChange={inputChange}
                  />
                </Flex>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"InstrumentCurrentTransformersTypeOfService"}
                    label={"Вид обслуживания"}
                    inputType={"text"}
                    value={instrumentCurrentTransformers.typeOfService}
                    opt1={"instrumentCurrentTransformers"}
                    opt2={"typeOfService"}
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

export default InstrumentCurrentTransformers;
