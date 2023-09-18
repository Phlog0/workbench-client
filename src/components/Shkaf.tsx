import React, { FC, useEffect, useState } from "react";
import styles from "./Skkaf.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import tire from "../SvgModels/SERGO_tire.svg";
interface IShkafProps {
  id: string;
}
import PowerSwitch from "../SvgModels/PowerSwitch.svg";
import CurrentMeasuringTransformer_2 from "../SvgModels/CurrentMeasuringTransformer_2.svg";

// MIDDLE OPTIONS
import Ammeter from "../SvgModels/Ammeter.svg";
import Drawout from "../SvgModels/Drawout.svg";
import ExcessVoltageSuppressor from "../SvgModels/ExcessVoltageSuppressor.svg";
import Fuse from "../SvgModels/Fuse.svg";
import GroundKnife from "../SvgModels/GroundKnife.svg";
import VoltageMeasuringTransformer from "../SvgModels/VoltageMeasuringTransformer.svg";

const Shkaf: FC<IShkafProps> = ({ id }) => {
  // const values = useAppSelector((state) =>
  //   state.nodes.nodes.find((item) => item.id === id)
  // );
  const values = useAppSelector((state) => state.nodes.nodes);

  const item = values.find((item) => item.id === id);
  // console.log(item);

  // console.log('SHKAF>>>',topItemsCount, middleItemsCount,bottomItemsCount);
  return (
    <div className={styles.shkaf}>
      <div className={styles.shkafTop}>
        {/* {item?.prop1 &&
          Array(item?.prop1)
            .fill("")
            .map((i) => {
              return (
                <div onClick={() => console.log("hello")} key={Math.random()}>
                </div>
              );
            })} */}
        <img src={tire} alt="#" className={styles.topTire} />
      </div>
      <div className={styles.shkafMiddle}>
        {/* {item?.prop2 &&
          Array(item?.prop2)
            .fill(" ")
            .map<JSX.Element>((i) => {
              return <div key={Math.random()}></div>;
            })} */}
        <img src={tire} alt="#" className={styles.middleTopTire} />
        <div className={styles.middlePowerSwitch}>
          <img src={PowerSwitch} alt="#" />
        </div>
        <div className={styles.middleTransformers}>
          <img src={CurrentMeasuringTransformer_2} alt="#" />
          <img src={CurrentMeasuringTransformer_2} alt="#" />
          <img src={CurrentMeasuringTransformer_2} alt="#" />
        </div>

        {/* САМЫЙ ОБЪЁМНЫЙ БЛОК */}

        <div className={styles.middleVoltage}>
          <img src={tire} alt=""  className={styles.middleLine}/>
          <div className={styles.middleVoltageLeft}>
            <img src={Drawout} alt="#" />
            <img src={Ammeter} alt="#" />
            <img src={GroundKnife} alt="#" />
          </div>
          <div className={styles.middleVoltageLine}>
            <img src={tire} alt="#" />
          </div>
          <div className={styles.middleVoltageRight}>
            <div className={styles.middleVoltageRightTop}><img src={VoltageMeasuringTransformer} alt="" /></div>
            <div className={styles.middleVoltageRightMiddle}><img src={Fuse} alt="" /></div>
            <div className={styles.middleVoltageRightBottom}><img src={ExcessVoltageSuppressor} alt="" /></div>
          </div>
        </div>
      </div>
      <div className={styles.shkafBottom}>
        {/* {item?.prop3 &&
          Array(item?.prop3)
            .fill("")
            .map((i) => {
              return <div key={Math.random()}></div>;
            })} */}
      </div>
    </div>
  );
};

export default Shkaf;
