import React from "react";
import styles from "./OprosnyList.module.scss";
import { useAppSelector } from "../../hook";
import { shallowEqual } from "react-redux";
import Shkaf from "../../entities/Shkaf";
import {
  currentCellArray,
  currentSwitchingDevice,
  currentTransformersAccuracyClass,
  currentTransformersPower,
  currentTransformersQuantity,
  voltageTransformerPower2,
  voltageTransformersAccuracyClass1,
  voltageTransformersAccuracyClass2,
  voltageTransformerPower1,
  electircityMeter,
  microProc,
  opn,
  electromagneticLocking,
} from "./utils";
const OprosnyList = ({ myRef }) => {
  const allShkafs = useAppSelector(
    (state) => state.flow.nodes,
    shallowEqual
  )?.filter((item) => item.type === "ElectricalPanelsNodeType");
  console.log(allShkafs);
  const orderedShkafs = allShkafs.sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );
  const orderedData = allShkafs.map((item) => Date.parse(item.createdAt));
  console.log(orderedData);
  return (
    <div className={styles.container}>
      <table ref={myRef}>
        <tbody>
          <tr>
            <td colSpan={2}>Номинальное напряжение главных цепей, кВ</td>
            <td>6</td>
            {orderedShkafs &&
              orderedShkafs.map((item) => (
                <td rowSpan={5} colSpan={1} className={styles.shkaf}>
                  <Shkaf id={item.id} />
                </td>
              ))}
          </tr>
          <tr>
            <td colSpan={2}>Номинальное ток сборных шин</td>
            <td>630</td>
          </tr>
          <tr>
            <td colSpan={2}>Ток термической стойкости, кА</td>
            <td>20,00</td>
          </tr>
          <tr>
            <td colSpan={2}>Род и напряжение оперативного тока</td>
            <td>220 АС</td>
          </tr>
          <tr>
            <td colSpan={3}>Схема соединения главных цепей</td>
          </tr>
          <tr>
            <td colSpan={3}>Номер шкафа по проекту</td>

            {allShkafs && allShkafs.map((item, index) => <td>{index + 1}</td>)}
          </tr>
          <tr>
            <td colSpan={3}>Назначение шкафа</td>

            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{currentCellArray[item.currentCellOption]}</td>
              ))}
          </tr>
          <tr>
            <td colSpan={3}>Выключатель</td>

            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{currentSwitchingDevice(item)}</td>
              ))}
          </tr>
          <tr>
            <td rowSpan={4}>Измерительные трансформаторы тока</td>
          </tr>
          <tr>
            <td colSpan={2}>Коэфф. трансформации</td>

            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{currentTransformersPower(item)}</td>
              ))}
          </tr>
          <tr>
            <td colSpan={2}>Количество</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{currentTransformersQuantity(item)}</td>
              ))}
          </tr>
          <tr>
            <td colSpan={2}>Класс точности</td>

            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{currentTransformersAccuracyClass(item)}</td>
              ))}
          </tr>

          <tr>
            <td rowSpan={4}>Измерительные трансформаторы напряжения</td>
            <td rowSpan={2}>Обм. I</td>
            <td>Мощность, ВА</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{voltageTransformerPower1(item)}</td>
              ))}
          </tr>
          <tr>
            <td>Класс точности</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{voltageTransformersAccuracyClass1(item)}</td>
              ))}
          </tr>
          <tr>
            <td rowSpan={2}>Обм. II</td>
            <td>Мощность, ВА</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{voltageTransformerPower2(item)}</td>
              ))}
          </tr>
          <tr>
            <td>Класс точности</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{voltageTransformersAccuracyClass2(item)}</td>
              ))}
          </tr>

          <tr>
            <td colSpan={3}>Счётчик элекртоэнергии, тип</td>

            {allShkafs &&
              allShkafs.map((item, index) => <td>{electircityMeter(item)}</td>)}
          </tr>
          <tr>
            <td colSpan={3}>
              Микропроцессорное устройство защиты и автоматики
            </td>

            {allShkafs &&
              allShkafs.map((item, index) => <td>{microProc(item)}</td>)}
          </tr>
          <tr>
            <td colSpan={3}>Ограничитель перенапряжения</td>

            {allShkafs && allShkafs.map((item, index) => <td>{opn(item)}</td>)}
          </tr>
          <tr>
            <td colSpan={3}>Электромагнитные блокировки</td>
            {allShkafs &&
              allShkafs.map((item, index) => (
                <td>{electromagneticLocking(item)}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OprosnyList;
