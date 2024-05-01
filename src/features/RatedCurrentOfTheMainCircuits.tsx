// @ts-nocheck
import React, { useEffect, useState } from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import TotalPowerOfAllElectricalAppliances from "./TotalPowerOfAllElectricalAppliances";
import { shallowEqual } from "react-redux";

const RatedCurrentOfTheMainCircuits = ({ id }) => {
  const currentItemId = useAppSelector((state) => state.flow.currentNodeId);
  const totalVoltageForAll = useAppSelector(
    //10 kV
    (state) =>
      state.flow.nodes.find((item) => item.id === "mainScheme")
        ?.totalVoltageForAll
  );
  const reactiveCos = useAppSelector(
    //0 - 0.99
    (state) => state.flow.nodes.find((item) => item.id === id)?.reactiveCos
  );
  const totalPowerOfAllElectricalAppliances = useAppSelector(
    //4000 Вт
    (state) =>
      state.flow.nodes.find((item) => item.id === id)
        ?.totalPowerOfAllElectricalAppliances
  );

  const currentCellOption = useAppSelector(
    (state) =>
      state.flow.nodes.find((item) => item.id === id)?.currentCellOption
  );

  // const [formula, setFormula] = useState(0);

  // useEffect(() => {

  //   setFormula(
  //     totalPowerOfAllElectricalAppliances /
  //       (totalVoltageForAll * (3 ** (1 / 2)) * reactiveCos)
  //   );
  // }, [totalPowerOfAllElectricalAppliances, reactiveCos]);

  const { data, error, isLoading } = useFetchDataQuery(
    "RatedCurrentOfTheMainCircuits"
  );

  const ratedCurrentOfTheMainCircuits = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)
        ?.ratedCurrentOfTheMainCircuits
  );

  const currentProps = useAppSelector(
    (state) => state.flow.nodes.find((item) => item.id === currentItemId),
    shallowEqual
  );
  const curFastener = useAppSelector((state) =>
    state.flow.nodes.find(
      (item) =>
        item.type === "FastenerNodeType" && currentProps?.parentNode === item.id
    )
  );
  const tireCurrentOLAll = useAppSelector(
    (state) =>
      state.flow.nodes.find((item) => item.id === curFastener?.parentNode)
        ?.tireCurrentOLAll
  );
  const [tokVvod, setTokVvod] = useState();

  const [disOpts, setDisOpts] = useState([]);
  //
  // const disOpts = [];
  useEffect(() => {
    setDisOpts([])
    const gostTok = [630, 1000, 1250, 1600, 2000, 2500, 3150, 4000];

    gostTok.map((item, index) => {
      if (item < tireCurrentOLAll) setDisOpts((prev) => [...prev, index]);
      // disOpts.push(index);
    });
    gostTok;
  }, [tireCurrentOLAll, currentItemId]);

  return (
    <>
      <MySelect
        tag={"ratedCurrentOfTheMainCircuits"}
        label={"Номинальный ток главных цепей,А"}
        options={data}
        itemId={currentItemId}
        current={ratedCurrentOfTheMainCircuits}
        disabledOpts={
          currentCellOption !== 5 ? [0, 1, 2, 3, 4, 5, 6, 7] : [...disOpts]
        }
      />
    </>
  );
};

export default RatedCurrentOfTheMainCircuits;
