import React, { useState, FC } from "react";
import styles from "./SwitchingDevice.module.scss";
import { useAppSelector } from "../../hook";
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
} from "@chakra-ui/react";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const SwitchingDevice: FC<{ id: string }> = ({ id }) => {


  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const currentCommutationOption =
    currentItemProperties?.currentCommutationOption;



  return (
    <div>
      {currentCommutationOption !== 0 ? (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ?<BsChevronDown />  :<BsChevronRight /> }
                    <Box as="span" flex="1" textAlign="left">
                      Коммутационный аппарат
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.AccordionPanelItem}>
                    <label htmlFor="SwitchingDeviceType">Тип</label>
                    <Input
                      type="text"
                      name="SwitchingDeviceType"
                      id="SwitchingDeviceType"
                    />
                  </div>
                  <label htmlFor="SwitchingDeviceName">Наименование</label>
                  <Input
                    type="text"
                    name="SwitchingDeviceName"
                    id="SwitchingDeviceName"
                  />
                  <label htmlFor="SwitchingDeviceRatedCurrent">
                    Номинальный ток (А)
                  </label>
                  <Input
                    type="number"
                    name="SwitchingDeviceRatedCurrent"
                    id="SwitchingDeviceRatedCurrent"
                  />
                  <label htmlFor="SwitchingDeviceRatedCutOffCurrent">
                    Номинальный ток отключения (кА)
                  </label>
                  <Input
                    type="number"
                    name="SwitchingDeviceRatedCutOffCurrent"
                    id="SwitchingDeviceRatedCutOffCurrent"
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      ) : null}
    </div>
  );

  // return (
  //   <div>
  //     {currentCommutationOption !== 0 ? (
  //       <div className={styles.SwitchingDevice}>
  //         <span className={styles.SwitchingDeviceTitle} onClick={handleClick}>
  //           {isOpen === false ? "▶" : "▼"}Коммутационный аппарат
  //         </span>
  //         <div className={isOpenClass}>
  //           <label htmlFor="SwitchingDeviceType">Тип</label>
  //           <input
  //             type="text"
  //             name="SwitchingDeviceType"
  //             id="SwitchingDeviceType"
  //           />
  //           <label htmlFor="SwitchingDeviceName">Наименование</label>
  //           <input
  //             type="text"
  //             name="SwitchingDeviceName"
  //             id="SwitchingDeviceName"
  //           />
  //           <label htmlFor="SwitchingDeviceRatedCurrent">
  //             Номинальный ток (А)
  //           </label>
  //           <input
  //             type="number"
  //             name="SwitchingDeviceRatedCurrent"
  //             id="SwitchingDeviceRatedCurrent"
  //           />
  //           <label htmlFor="SwitchingDeviceRatedCutOffCurrent">
  //             Номинальный ток отключения (кА)
  //           </label>
  //           <input
  //             type="number"
  //             name="SwitchingDeviceRatedCutOffCurrent"
  //             id="SwitchingDeviceRatedCutOffCurrent"
  //           />
  //         </div>
  //       </div>
  //     ) : null}
  //   </div>
  // );
};

export default SwitchingDevice;
