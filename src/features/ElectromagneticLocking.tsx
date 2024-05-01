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
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { updateProp } from "../store/flowSlice";
import MySelect from "../shared/MySelect";
const ElectromagneticLocking = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const isThereAnElectromagneticLocking = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.isThereAnElectromagneticLocking
  );
  const manufacturer = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.electromagneticLocking.manufacturer
  );
  const name = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.electromagneticLocking.name
  );
  const type = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.electromagneticLocking.type
  );



  return (
    <div className={styles.container}>
      <MySelect
        tag={"isThereAnElectromagneticLocking"}
        label={"Есть электромагнитная блокировка"}
        options={["Нет", "Да"]}
        itemId={id}
        current={isThereAnElectromagneticLocking}
      />
      {isThereAnElectromagneticLocking !== 0 && (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <div className={styles.inputContainer}>
                      <Text>Электромагнитная блокировка</Text>
                      <MyInput
                        tag={"ElectromagneticLockingType"}
                        label={"Тип"}
                        inputType={"text"}
                        value={type}
                        opt1={"electromagneticLocking"}
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
                          type={"electromagneticLocking"}
                        />
                      )}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"ElectromagneticLockingName"}
                      label={"Наименование"}
                      inputType={"text"}
                      value={name}
                      opt1={"electromagneticLocking"}
                      opt2={"name"}
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"ElectromagneticLockingManufacturer"}
                      label={"Производитель"}
                      inputType={"text"}
                      value={manufacturer}
                      opt1={"electromagneticLocking"}
                      opt2={"manufacturer"}
                    />
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default ElectromagneticLocking;
