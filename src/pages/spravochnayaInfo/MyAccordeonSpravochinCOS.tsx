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

const MyAccordeonSpravochinCOS = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Коэффициент мощности (cos φ)
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          безразмерная физическая величина, характеризующая потребителя
          переменного электрического тока с точки зрения наличия в нагрузке
          реактивной составляющей и мощности искажения (собирательное название —
          неактивная мощность).
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinCOS;
