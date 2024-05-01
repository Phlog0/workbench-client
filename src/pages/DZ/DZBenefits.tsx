import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const DZBenefits = () => {
  const plus = [
    "Автоматизация",
    "Надёжность",
    "Ускорение бизнес-процессов",
    "Интеграция с ЦД",
    "Система самопроверок",
  ];

  const minus = ["Нету!"];

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton color={'green'}>
            <Box as="span" flex="1" textAlign="left">
              Преимущества
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color={'green'}>
          <ul>{plus && plus.map((item) => <li>{item}</li>)}</ul>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton color={'red'}>
            <Box as="span" flex="1" textAlign="left">
              Недостатки
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color={'red'}>
        <ul>{minus && minus.map((item) => <li>{item}</li>)}</ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DZBenefits;
