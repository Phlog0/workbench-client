import React, { useEffect, useState } from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import TotalPowerOfAllElectricalAppliances from "./TotalPowerOfAllElectricalAppliances";

const RatedCurrentOfTheMainCircuits = ({ id }) => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );
  const totalVoltageForAll = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === "mainScheme")
        ?.totalVoltageForAll
  );
  const reactiveCos = useAppSelector(
    (state) => state.nodes.nodes.find((item) => item.id === id)?.reactiveCos
  );
  const totalPowerOfAllElectricalAppliances = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === id)
        ?.totalPowerOfAllElectricalAppliances
  );

  const [formula, setFormula] = useState(0);

  useEffect(() => {
    console.log(
      reactiveCos,
      totalPowerOfAllElectricalAppliances,
      totalVoltageForAll
    );
    setFormula(
      totalPowerOfAllElectricalAppliances /
        (totalVoltageForAll * (3 ** (1 / 2)) * reactiveCos)
    );
  }, [totalPowerOfAllElectricalAppliances, reactiveCos]);

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
