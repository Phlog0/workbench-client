import React, { FC, useEffect, useState } from "react";
import styles from "./Skkaf.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";

interface IShkafProps {
  id: string;
}

import horiz from "../SvgModels/shyny_svg/AnyConv.com__shyny_1.svg";

{
  /*========================= ТРАНСФОРМАТОРЫ ========================= */
}
import NO_TRANS from "../SvgModels/trans_svg/AnyConv.com__trans_no.svg";
import TT_2_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_2_2.svg";
import TT_2_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_2_3.svg";
import TT_3_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_3_2.svg";
import TT_3_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_3_3.svg";
import TT_4_A_C from "../SvgModels/trans_svg/AnyConv.com__trans_4_2.svg";
import TT_4_A_B_C from "../SvgModels/trans_svg/AnyConv.com__trans_4_3.svg";

{
  /*========================= ВЫКЛЮЧАТЕЛИ / ТИП КОММУТАЦИОННОГО АППАРАТА (ВН,ВР...) ========================= */
}
import str_2 from "../SvgModels/vykl_svg/test3 1.svg";
import str_nold from "../SvgModels/AnyConv.com__str_bold.svg";

import vyklNo from "../SvgModels/vykl_svg/AnyConv.com__vykl_no.svg"; //НЕТ
import vykl1 from "../SvgModels/vykl_svg/AnyConv.com__vykl_1.svg";
import vykl2 from "../SvgModels/vykl_svg/AnyConv.com__vykl_2.svg"; //Р
import vykl3 from "../SvgModels/vykl_svg/AnyConv.com__vykl_3.svg"; //ВВ
import vykl4 from "../SvgModels/vykl_svg/AnyConv.com__vykl_4.svg"; //ВН Со стороны шарнирных контактов (предохранителей)
import vykl5 from "../SvgModels/vykl_svg/AnyConv.com__vykl_5.svg"; //ВН Со стороны разъемных контактов
import vykl6 from "../SvgModels/vykl_svg/AnyConv.com__vykl_6.svg"; //ВН С двух сторон
import vykl7 from "../SvgModels/vykl_svg/AnyConv.com__vykl_7.svg";
import vykl8 from "../SvgModels/vykl_svg/AnyConv.com__vykl_8.svg";
import vykl9 from "../SvgModels/vykl_svg/AnyConv.com__vykl_9.svg";
import vykl10 from "../SvgModels/vykl_svg/AnyConv.com__vykl_10.svg";
import vykl11 from "../SvgModels/vykl_svg/AnyConv.com__vykl_11.svg";

const currentTypeOfSwitchingDeviceImgs = [
  NO_TRANS,
  TT_2_A_C,
  TT_3_A_C,
  TT_4_A_C,
  TT_2_A_B_C,
  TT_3_A_B_C,
  TT_4_A_B_C,
];

const vyklVariants = [vyklNo, vykl3, vykl4, vykl2];
// select,select,select, select, select-string, string, string
const vyklVNVariantsImgs = [vykl4, vykl5, vykl6];

// const powerSwitchImgs = [str_nold, str_2];

const Shkaf: FC<IShkafProps> = ({ id }) => {
  // const vyklVariants = {
  //   vykl4: "Со стороны шарнирных контактов (предохранителей)",
  //   vykl5: "Со стороны разъемных контактов",
  //   vykl6: "С двух сторон"
  // }

  const vyklVNVariants = [
    "Со стороны шарнирных контактов (предохранителей)",
    "Со стороны разъемных контактов",
    "С двух сторон",
  ];

  const item = useAppSelector((state) => state.nodes.nodes).find(
    (item) => item.id === id
  );

  const [
    currentTypeOfSwitchingDevicePictureVN,
    setCurrentTypeOfSwitchingDevicePictureVN,
  ] = useState<number>(0);
  const [test, setTest] = useState<number>(0);
  // const item = values.find((item) => item.id === id);

  // console.log(test)
  const currentTransformatorOption = item?.currentTransformatorOption;

  const currentTypeOfSwitchingDevice = item?.currentTypeOfSwitchingDevice; // ВН-ВР-Р-НЕТ
  // const locationOfGroundingBladesValue =
  // item?.switchingDeviceVN?.locationOfGroundingBlades ||
  // "Со стороны шарнирных контактов (предохранителей)"; //ВН-Варианты
  let locationOfGroundingBladesValue =
    item?.switchingDeviceVN?.locationOfGroundingBlades || null; //ВН-Варианты

  const checkVN = () => {
    return Math.abs(
      vyklVNVariants.findIndex(
        (item) => item === locationOfGroundingBladesValue?.trim()
      )
    );
  };

  useEffect(() => {
    setCurrentTypeOfSwitchingDevicePictureVN(checkVN);
  }, [locationOfGroundingBladesValue]);

  // console.log(currentTypeOfSwitchingDevicePictureVN);

  // if (currentTypeOfSwitchingDevice === 2) {
  //   const locationOfGroundingBladesValue = item?.switchingDeviceVN?.locationOfGroundingBlades || "Со стороны шарнирных контактов (предохранителей)";

  //   console.log(locationOfGroundingBladesValue)
  //   setCurrentTypeOfSwitchingDevicePictureVN(0)

  // }

  // console.log('SHKAF.TSX RENDER>>>');
  // console.log(currentTypeOfSwitchingDevicePictureVN)

  return (
    <div className={styles.shkaf}>
      <img src={horiz} alt="" className={styles.top} />

      {/*========================= ВЫКЛЮЧАТЕЛИ (ВН,ВР...) ========================= */}

      <div className={styles.shkafPowerSwitch}>
        {locationOfGroundingBladesValue !== null &&
        currentTypeOfSwitchingDevice === 2 ? (
          <div className={styles.vnImage}>
            <img
              src={vyklVNVariantsImgs[currentTypeOfSwitchingDevicePictureVN]}
              alt="#"
            />
          </div>
        ) : (
          <div className={styles.switchingDevice}>
            <img src={vyklVariants[currentTypeOfSwitchingDevice!]} alt="#" />
          </div>
        )}
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
