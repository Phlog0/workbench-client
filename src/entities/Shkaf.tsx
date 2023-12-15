import React, { FC, useEffect, useState } from "react";
import styles from "./Skkaf.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import tire from "../SvgModels/SERGO_tire.svg";
import PowerSwitch from "../features/PowerSwitch";
interface IShkafProps {
  id: string;
}

import mainSkelet from "../SvgModels/1.svg";
import TT_2_A_B_C from "../SvgModels/ТТ_2_А-В-С.svg";
import TT_2_A_C from "../SvgModels/ТТ_2_А-С.svg";

import TT_3_A_B_C from "../SvgModels/ТТ_3_А-В-С.svg";
import TT_3_A_C from "../SvgModels/ТТ_3_А-С.svg";

import TT_4_A_B_C from "../SvgModels/ТТ_4_А-В-С.svg";
import TT_4_A_C from "../SvgModels/ТТ_4_А-С.svg";

import TT_5_A_B_C from "../SvgModels/ТТ_5_А-В-С.svg";
import TT_5_A_C from "../SvgModels/ТТ_5_А-С.svg";

import TT_6_A_B_C from "../SvgModels/ТТ_6_А-В-С.svg";
import TT_6_A_C from "../SvgModels/ТТ_6_А-С.svg";

const hash = [
  mainSkelet, 
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  TT_2_A_C,
  TT_3_A_C,
  TT_4_A_C,
  TT_5_A_C,
  TT_6_A_C,
  TT_2_A_B_C,
  TT_3_A_B_C,
  TT_4_A_B_C,
  TT_5_A_B_C,
  TT_6_A_B_C,
];

const Shkaf: FC<IShkafProps> = ({ id }) => {
  const item = useAppSelector((state) => state.nodes.nodes).find((item) => item.id === id);

  // const item = values.find((item) => item.id === id);

  const currentTransformatorOption = item?.currentTransformatorOption;
  return (
    <div className={styles.shkaf}>
      <img src={mainSkelet} alt="" className={styles.mainSkelet} />
      <div className={styles.shkafPowerSwitch}>
        <PowerSwitch id={id} />
      </div>
      <div className={styles.shkafMiddle}>
        {/*========================= COMPONENT TRANSFORMATOR========================= */}
        <div className={styles.transformators}>
          <img src={hash[currentTransformatorOption]} alt="#" />
        </div>

        {/*========================= COMPONENT TRANSFORMATOR========================= */}
      </div>
      <div className={styles.shkafBottom}></div>
    </div>
  );
};

export default Shkaf;
