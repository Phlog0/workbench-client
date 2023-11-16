import React, { FC, useState, useRef } from "react";
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
import styles from "./SwitchOPN.module.scss";
import MyModal from "../widgets/MyModal";
import MyInput from "../shared/MyInput";

interface ISwitchOPNProps {
  id: string;
}

const SwitchOPN: FC<ISwitchOPNProps> = ({ id }) => {
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

                  <Box as="span" flex="1" textAlign="left">
                    ОПН
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div
                  className={`${styles.AccordionPanelItem} ${styles.openModalInput}`}
                >
                  <MyInput
                    tag={"SwitchOPNType"}
                    label={"Тип"}
                    inputType={"text"}
                  />
                  <span
                    className={styles.OpenMenuDots}
                    ref={btnRef}
                    onClick={onOpen}
                  >
                    ...
                  </span>
                  <MyModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    btnRef={btnRef}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNName"}
                    label={"Наименование"}
                    inputType={"text"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNRatedOperatingVoltage"}
                    label={"Номинальное рабочее напряжение"}
                    inputType={"text"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNThroughput"}
                    label={"Пропускная способность, А"}
                    inputType={"text"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNRatedDischargeCurrent"}
                    label={"Номинальный разрядный ток, А"}
                    inputType={"text"}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={
                      "SwitchOPNMaximumContinuousPermissibleOperatingVoltage"
                    }
                    label={
                      "Наибольшее длительно допустимое рабочее напряжение, кВ"
                    }
                    inputType={"text"}
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

export default SwitchOPN;
