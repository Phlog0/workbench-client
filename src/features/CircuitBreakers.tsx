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
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { updateProp } from "../store/nodesSlice";

const CircuitBreakers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchDataQuery(
    "CircuitBreakers"
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const circuitBreakers =
    currentItemProperties?.circuitBreakers;

  const allCircuitBreakers = Object.values(
    circuitBreakers
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

                  <div className={styles.inputContainer}>
                    <MyInputModal
                      label={"Предохранители"}
                      value={allCircuitBreakers.toString()}
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
              <div className={styles.inputContainer}>
                  <MyInput
                    tag={"circuitBreakersType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={circuitBreakers.type}
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
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"circuitBreakersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={circuitBreakers.name}
                    opt1={"circuitBreakers"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={
                      "circuitBreakersManufacturer"
                    }
                    label={"Производитель"}
                    inputType={"text"}
                    value={
                      circuitBreakers.manufacturer
                    }
                    opt1={"circuitBreakers"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={
                      "circuitBreakersRatedCurrentOfFuseLink"
                    }
                    label={"Номинальный ток плавкой вставки (А)"}
                    inputType={"number"}
                    value={
                      circuitBreakers.ratedCurrentOfFuseLink
                    }
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
