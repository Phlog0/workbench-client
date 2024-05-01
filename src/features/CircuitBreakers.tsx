// @ts-nocheck
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
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { updateProp } from "../store/flowSlice";

const CircuitBreakers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchDataQuery("CircuitBreakers");

  const manufacturer = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.circuitBreakers
        .manufacturer
  );
  const name = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.circuitBreakers.name
  );
  const ratedCurrentOfFuseLink = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.circuitBreakers
        .ratedCurrentOfFuseLink
  );
  const type = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.circuitBreakers.type
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

                  <div className={styles.inputContainer}>
                    <Text>Предохранители</Text>
                    <MyInput
                      tag={"circuitBreakersType"}
                      label={"Тип"}
                      inputType={"text"}
                      value={type}
                      opt1={"circuitBreakers"}
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
                        data={data}
                        isLoading={isLoading}
                        error={error}
                        type={"circuitBreakers"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"circuitBreakersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={name}
                    opt1={"circuitBreakers"}
                    opt2={"name"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"circuitBreakersManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={manufacturer}
                    opt1={"circuitBreakers"}
                    opt2={"manufacturer"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"circuitBreakersRatedCurrentOfFuseLink"}
                    label={"Номинальный ток плавкой вставки (А)"}
                    inputType={"number"}
                    value={ratedCurrentOfFuseLink}
                    opt1={"circuitBreakers"}
                    opt2={"ratedCurrentOfFuseLink"}
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

export default CircuitBreakers;
