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

const MyAccordeonSpravochinSCHETCHIK = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Счетчик электроэнергии
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Предназначен для измерения и учета активной и реактивной энергии
          прямого и обратного направления в цепях переменного тока напряжением 6
          (10) кВ, частотой 50 Гц на границе балансовой принадлежности между
          различными субъектами рынка. Использования в составе
          автоматизированных систем контроля и учета электроэнергии (АСКУЭ) для
          передачи измеренных и вычисленных параметров на диспетчерский пункт по
          контролю, учету и распределению электрической энергии.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinSCHETCHIK;
