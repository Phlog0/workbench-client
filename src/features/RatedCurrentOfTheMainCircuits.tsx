import React, { useEffect, useState } from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import TotalPowerOfAllElectricalAppliances from "./totalPowerOfAllElectricalAppliances";

const RatedCurrentOfTheMainCircuits = ({ id }) => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );

  const totalVoltageForAll = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === "mainScheme")
        ?.totalVoltageForAll
  );
  const totalPowerOfAllElectricalAppliances = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === "mainScheme")
        ?.totalPowerOfAllElectricalAppliances
  );

  const [formula, setFormula] = useState(0);

  useEffect(() => {
    setFormula(
      (totalPowerOfAllElectricalAppliances /( (totalVoltageForAll * 1000)) *
        3 ** (1 / 2))
    );
  }, [totalPowerOfAllElectricalAppliances]);

  console.log(formula);
  const { data, error, isLoading } = useFetchDataQuery(
    "RatedCurrentOfTheMainCircuits"
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const ratedCurrentOfTheMainCircuits =
    currentItemProperties?.ratedCurrentOfTheMainCircuits;

  return (
    <>
      <TotalPowerOfAllElectricalAppliances />
      <MySelect
        tag={"ratedCurrentOfTheMainCircuits"}
        label={"Номинальный ток главных цепей,А"}
        options={data}
        itemId={currentItemId}
        current={ratedCurrentOfTheMainCircuits}
      />
    </>
  );
};

export default RatedCurrentOfTheMainCircuits;
