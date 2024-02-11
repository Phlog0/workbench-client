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
  Text,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";

import { useAppSelector } from "../hook";

const ZeroSequenceCurrentTransformers = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

 

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  const zeroSequenceCurrentTransformers =
    currentItemProperties?.zeroSequenceCurrentTransformers;

 

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
                    <Text>Трансформаторы тока нулевой последовательности</Text>
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
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
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
                    label={"Односекундный ток термической стойкости вторичной обмотки (А)"}
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
