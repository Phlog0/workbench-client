import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const MyAccordeonSpravochinNomTok = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Номинальный ток главных цепей
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Номинальным ударным током цепи  является установленное
          изготовителем значение ударного тока, которое данная цепь может
          выдержать при условиях проведения испытаний<div className=""></div> ГОСТ 14693-90
          ЕЖГОСУДАРСТВЕННЫЙ СТАНДАРТ УСТРОЙСТВА КОМПЛЕКТНЫЕ РАСПРЕДЕЛИТЕЛЬНЫЕ
          НЕГЕРМЕТИЗИРОВАННЫЕ В МЕТАЛЛИЧЕСКОЙ ОБОЛОЧКЕ НА НАПРЯЖЕНИЕ ДО 10 кВ
          (КРУ)
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinNomTok;
