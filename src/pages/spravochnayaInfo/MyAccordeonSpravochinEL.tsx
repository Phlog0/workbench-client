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

const MyAccordeonSpravochinEL = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Электромагнитная блокировка
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Электромагнитная блокировка служит для предотвращения ошибочных
          действий на оборудовании оперативных персоналом. Данные устройства
          устанавливают на таком оборудовании, как разъединители, стационарные
          заземляющие устройства, выкатные части тележек КРУ.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinEL;
