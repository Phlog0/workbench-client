import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const MyAccordeonSpravochin = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Типы ячеек
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ul>
            <li>
              ТСН - Трансформаторы собственных нужд или ТСН предназначены для
              питания нагрузки подстанций, КРУН, КРУ для обеспечения своих
              потребностей. ТСН обеспечивает работу электроустановки и
              функциональность подключенных потребителей нагрузки.
              Количественный состав и тип нагрузки собственных нужд
              электроустановки зависят от вида, мощности силовых тр-ров,
              предусмотрены или нет синхронные компенсаторы и от класса
              подключенного электрооборудования.
            </li>
            <li>
              Шинный мост - инный мост с воздушной изоляцией в цепях переменного
              (постоянного) тока, напряжением 0,4-35кВ, номинальным током до
              4000А и частотой 50-60Гц, климатическим исполнением УХЛ,
              предназначены для выполнения электрических соединений:
              распределительных устройств собственных нужд электростанций;
              распределительных устройств комплектных трансформаторных
              подстанций энергосистем, промышленных предприятий, нефтепромыслов,
              сельскохозяйственных предприятий и т. д. Шинные мосты в части
              воздействия климатических факторов внешней среды по ГОСТ 15150-69
              и ГОСТ 15543-70 относятся к климатическому исполнению - У,
              категории размещения – 1,2.
            </li>
            <li>
              СВ - Секционные автоматические выключатели предназначены для
              включения резервного питания в распределительных устройствах
              низкого напряжения, для осуществления подключения резервного
              питания на ТП. Также они используются для поддержания подключения
              между работающими генераторами на электростанциях, но данный тип
              подключения используется только на подобных объектах. Основное
              применение они нашли именно в РУ для низкого напряжения. Также
              может применяться в быту, для переключения питания от сетевого
              ввода на запасное питание от генератора.
            </li>
            <li>
              СР - Секционные разъединители - это самый популярный вид
              коммутирующих устройств на напряжение 10 кВ. Разъединители
              предназначены для включения и отключения под напряжением
              обесточенных участков цепи высокого напряжения, а также заземления
              отключенных участков при помощи стационарных заземлителей. Для
              отключения участков цепи под нагрузкой необходимо использовать
              выключатели нагрузки или вакуумные выключатели. Однако, в
              подстанциях мощностью до 400 кВА в некоторых случаях также
              допускается использование разъединителей вместо выключателей
              нагрузки.
            </li>
            <li>
              Ввод - Вводная ячейка предназначенна для коммутации электрических
              сетей трех-фазного переменного тока.{" "}
            </li>
            <li>
              Отходящая линия - Ячейка отходящей линии к иному объекту к такому
              же классу напряжения, например, на другой распределительный пункт,
              реже, непосредственно к то-копотребителям.
            </li>
            <li>
              УКРМ - УКРМ 6(10) кВ используются для компенсации реактивной
              нагрузки на предприятиях с высоковольтным напряжением. Их
              основными задачами являются коррекция коэффициента мощности и его
              поддержание на одном уровне, что снижает нагрузку на электрическую
              сеть и распределительное оборудование. Это позволяет подключить
              дополнительные мощности, снизить расходы на электроэнергию, и
              получить множество других преимуществ. Быстродействующие вакуумные
              выключатели осуществляют коммутацию косинусных конденсаторов, а
              высоковольтные ограничивающие ток предохранители защищают от
              перегрузок. Если нелинейные потребители превышают нагрузку по
              мощности более чем на 15% от общей, то для компенсации возникающих
              гармонических искажений используются специальные фильтрующие
              дроссели.
            </li>
            <li>
              ТН - Трансформаторы напряжения 10 кВ используются в высоковольтных
              электрических сетях для преобразования параметров напряжения. Они
              позволяют снизить высокое напряжение до значений, адекватных для
              измерительных приборов, обеспечив надежную изоляцию высоковольтных
              цепей.
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochin;