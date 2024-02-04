import React, { useRef } from "react";
import styles from "./properties.module.scss";
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
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { useFetchDataQuery } from "../services/dictService";
import { updateProp } from "../store/nodesSlice";
const ZeroSequenceCurrentTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

 

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  const zeroSequenceCurrentTransformers =
    currentItemProperties?.zeroSequenceCurrentTransformers;

  const AllZeroSequenceCurrentTransformers = Object.values(
    zeroSequenceCurrentTransformers
  );

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
                      label={"Трансформаторы собственных нужд"}
                      value={AllZeroSequenceCurrentTransformers.toString()}
                    />
                    <Button
                      className={styles.OpenMenuDots}
                      ref={btnRef}
                      onClick={onOpen}
                    >
                      ...
                    </Button>
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ZeroSequenceCurrentTransformersType"}
                    label={"Тип"}
                    inputType={"text"}
                    
                    opt1={"zeroSequenceCurrentTransformers"}
                    opt2={"type"}
                    value={zeroSequenceCurrentTransformers?.type}
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
                      type={"zeroSequenceCurrentTransformers"}
                    />
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ZeroSequenceCurrentTransformersName"}
                    label={"Наименование"}
                    inputType={"text"}
                    
                    opt1={"zeroSequenceCurrentTransformers"}
                    opt2={"name"}
                    value={zeroSequenceCurrentTransformers?.name}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ZeroSequenceCurrentTransformersManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    
                    opt1={"zeroSequenceCurrentTransformers"}
                    opt2={"manufacturer"}
                    value={zeroSequenceCurrentTransformers?.manufacturer}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ZeroSequenceCurrentTransformersTransformationRatio"}
                    label={"Коэффициент трансформации"}
                    inputType={"text"}
                    
                    opt1={"zeroSequenceCurrentTransformers"}
                    opt2={"transformationRatio"}
                    value={zeroSequenceCurrentTransformers?.transformationRatio}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ZeroSequenceCurrentTransformersTransformationRatio"}
                    label={"Коэффициент трансформации"}
                    inputType={"text"}
                    
                    opt1={"zeroSequenceCurrentTransformers"}
                    opt2={"oneSecondThermalCurrentOfTheSecondaryWinding"}
                    value={
                      zeroSequenceCurrentTransformers?.oneSecondThermalCurrentOfTheSecondaryWinding
                    }
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

export default ZeroSequenceCurrentTransformers;
