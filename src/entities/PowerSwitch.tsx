import React, { useState, FC } from "react";
import noSwitch from "../SvgModels/2.svg";
import mySwitch from "../SvgModels/PowerSwitch.svg";
import styles from "./PowerSwitch.module.scss";
import { useAppSelector } from "../hook";
import Drawout from "../SvgModels/Drawout.svg";
interface IPowerSwitchProps {
  id: string;
}

const PowerSwitch: FC<IPowerSwitchProps> = ({ id }) => {
  const node = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  return (
    <div className={styles.container}>
      {node?.currentCommutationOption === 0 ? (
        <div className={styles.noSwitchContainer}>
          <img src={noSwitch} alt="#" className={styles.noSwitch} />
        </div>
      ) : (
        <div className={styles.mySwitchContainer}>
          <img src={Drawout} alt="#" className={styles.DrawoutUp} />
          <img src={mySwitch} alt="#" className={styles.mySwitch} />
          <img src={Drawout} alt="#" className={styles.DrawoutDown} />
        </div>
      )}
    </div>
  );
};

export default PowerSwitch;
