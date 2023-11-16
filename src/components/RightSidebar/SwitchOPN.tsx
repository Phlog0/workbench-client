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
import MyModal from "../modalMenu/MyModal";

interface ISwitchOPNProps {
  id: string;
}

const SwitchOPN: FC<ISwitchOPNProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const btnRef = useRef(null);

  const openModal = () => {};

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
                  <label htmlFor="SwitchOPNType">Тип</label>
                  <Input type="text" name="SwitchOPNType" id="SwitchOPNType" />
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
                  <label htmlFor="SwitchOPNName">Наименование</label>
                  <Input type="text" name="SwitchOPNName" id="SwitchOPNName" />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <label htmlFor="SwitchOPNManufacturer">Производитель</label>
                  <Input
                    type="text"
                    name="SwitchOPNManufacturer"
                    id="SwitchOPNManufacturer"
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <label htmlFor="SwitchOPNRatedOperatingVoltage">
                    Номинальное рабочее напряжение
                  </label>
                  <Input
                    type="text"
                    name="SwitchOPNRatedOperatingVoltage"
                    id="SwitchOPNRatedOperatingVoltage"
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <label htmlFor="SwitchOPNThroughput">
                    Пропускная способность, А
                  </label>
                  <Input
                    type="text"
                    name="SwitchOPNThroughput"
                    id="SwitchOPNThroughput"
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <label htmlFor="SwitchOPNRatedDischargeCurrent">
                    Номинальный разрядный ток, А
                  </label>
                  <Input
                    type="text"
                    name="SwitchOPNRatedDischargeCurrent"
                    id="SwitchOPNRatedDischargeCurrent"
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <label htmlFor="SwitchOPNMaximumContinuousPermissibleOperatingVoltage">
                    Наибольшее длительно допустимое рабочее напряжение, кВ
                  </label>
                  <Input
                    type="text"
                    name="SwitchOPNMaximumContinuousPermissibleOperatingVoltage"
                    id="SwitchOPNMaximumContinuousPermissibleOperatingVoltage"
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
