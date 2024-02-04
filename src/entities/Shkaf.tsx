import React, { FC, useEffect, useState } from "react";
import styles from "./Skkaf.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import tire from "../SvgModels/SERGO_tire.svg";
import PowerSwitch from "../features/PowerSwitch";

interface IShkafProps {
  id: string;
}

import mainSkelet from "../SvgModels/1.svg";
import horiz from "../SvgModels/shyny_svg/AnyConv.com__shyny_1.svg"


{
  /*========================= ТРАНСФОРМАТОРЫ ========================= */
}

import TT_2_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_2_2.svg";
import TT_2_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_2_3.svg";
import TT_3_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_3_2.svg";
import TT_3_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_3_3.svg";
import TT_4_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_4_2.svg";
import TT_4_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_4_3.svg";

{
  /*========================= ВЫКЛЮЧАТЕЛИ (ВН,ВР...) ========================= */
}
import str_2 from "../SvgModels/vykl_svg/test3 1.svg";
import str_nold from "../SvgModels/AnyConv.com__str_bold.svg";

const currentTypeOfSwitchingDeviceImgs = [
  mainSkelet,
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  TT_2_A_C,
  TT_3_A_C,
  TT_4_A_C,
  TT_2_A_B_C,
  TT_3_A_B_C,
  TT_4_A_B_C,
];

const powerSwitchImgs = [str_nold, str_2];

const Shkaf: FC<IShkafProps> = ({ id }) => {
  const item = useAppSelector((state) => state.nodes.nodes).find(
    (item) => item.id === id
  );

  // const item = values.find((item) => item.id === id);

  const currentTransformatorOption = item?.currentTransformatorOption;

  const currentTypeOfSwitchingDevice = item?.currentTypeOfSwitchingDevice;


  // console.log('SHKAF.TSX RENDER>>>');

  return (
    <div className={styles.shkaf}>
      <img src={horiz} alt="" className={styles.mainSkelet} />

      {/*========================= ВЫКЛЮЧАТЕЛИ (ВН,ВР...) ========================= */}

      <div className={styles.shkafPowerSwitch}>
        <img
          src={powerSwitchImgs[currentTypeOfSwitchingDevice as number]}
          alt="#"
        />
      </div>

      {/*========================= ТРАНСФОРМАТОРЫ ========================= */}

      <div className={styles.transformators}>
        <img
          src={
            currentTypeOfSwitchingDeviceImgs[
              currentTransformatorOption as number
            ]
          }
          alt="#"
        />
      </div>
    </div>
  );
};

export default Shkaf;
