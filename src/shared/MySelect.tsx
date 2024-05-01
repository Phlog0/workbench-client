import React, { FC, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  changeCurrentGrid,
  updateNodePropSelect,
  updatePropsByRow,
  setInitialProps,
} from "../store/flowSlice";

import styles from "./MySelect.module.scss";
import initialProps from "../store/utils/initialProps";
import {
  useSetInitialPropsMutation,
  useUpdateCurrentSelectMutation,
  useUpdatePropsByRowMutation,
} from "../services/projectService";
import useAuth from "../hooks/useAuth";

interface IMySelectProps {
  options: string[];
  itemId?: string;
  current: number;
  label: string;
  tag: string;
  disabledOpts?: number[];
}

const MySelect: FC<IMySelectProps> = ({
  options,
  itemId,
  current,
  label,
  tag,
  disabledOpts,
}) => {
  const dispatch = useAppDispatch();
  disabledOpts = disabledOpts || "";
  const selectRef = useRef(null);
  const toast = useToast();
  const [updatePropsByRowApi, resultPropsByRow] = useUpdatePropsByRowMutation();
  const [updateCurrentSelectApi, resultCurrentSelect] =
    useUpdateCurrentSelectMutation();
  const [setInitialPropsApi, resultInitialProps] = useSetInitialPropsMutation();
  const [valid, setValid] = useState(false);

  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;
    if (select.name === "snapGrid")
      dispatch(changeCurrentGrid({ index: select.selectedIndex }));

    const data = {
      id: itemId,
      index: select.selectedIndex,
      // key: select.id, БЫЛО
      key: select.name,
    };
    dispatch(updateNodePropSelect(data));

    updateCurrentSelectApi(data);

    if (select.name === "currentTransformatorOption") {
      const updatedProps = {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        accuracyClass: "",
        oneSecondThermalCurrent: "",
        typeOfService: "",
      };
      dispatch(
        updatePropsByRow({
          id: itemId,
          type: "instrumentCurrentTransformers",
          updatedProps,
        })
      );
      updatePropsByRowApi({
        shkafId: itemId,
        type: "instrumentCurrentTransformers",
        updatedProps,
      });
    }

    if (
      select.name === "currentCellOption" &&
      (select.selectedIndex === 1 || select.selectedIndex === 4)
    ) {
      dispatch(
        setInitialProps({
          id: itemId,
          initialProps,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: initialProps,
      });
    }

    if (
      select.name === "currentCellOption" && //TN
      select.selectedIndex === 0
    ) {
      const data = {
        isThereAVoltageTransformers: initialProps.isThereAVoltageTransformers,
        voltageTransformers: initialProps.voltageTransformers,
      };

      dispatch(
        setInitialProps({
          id: itemId,
          initialProps: data,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data,
      });
    }
    if (
      select.name === "currentCellOption" && //SV
      select.selectedIndex === 2
    ) {
      const data = {
        isThereAVoltageTransformers: initialProps.isThereAVoltageTransformers,
        voltageTransformers: initialProps.voltageTransformers,
        isThereAnOpn: initialProps.isThereAnOpn,
        opn: initialProps.opn,
        isThereAElectricityMeter: initialProps.isThereAElectricityMeter,
        electricityMeter: initialProps.electricityMeter,
        transformersForOwnNeeds: initialProps.transformersForOwnNeeds,
      };

      dispatch(
        setInitialProps({
          id: itemId,
          initialProps: data,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: data,
      });
    }
    if (
      select.name === "currentCellOption" && //SR
      select.selectedIndex === 3
    ) {
      dispatch(
        setInitialProps({
          id: itemId,
          initialProps,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: initialProps,
      });
    }
    if (
      select.name === "currentCellOption" && //SR
      [5, 6].includes(select.selectedIndex)
    ) {
      const data = {
        isThereAVoltageTransformers: initialProps.isThereAVoltageTransformers,
        voltageTransformers: initialProps.voltageTransformers,
        transformersForOwnNeeds: initialProps.transformersForOwnNeeds,
      };

      dispatch(
        setInitialProps({
          id: itemId,
          initialProps: data,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: data,
      });
    }
    if (
      select.name === "currentCellOption" && //SR
      [7].includes(select.selectedIndex)
    ) {
      const data = {
        isThereAVoltageTransformers: initialProps.isThereAVoltageTransformers,
        voltageTransformers: initialProps.voltageTransformers,
        transformersForOwnNeeds: initialProps.transformersForOwnNeeds,
        isThereAnOpn: initialProps.isThereAnOpn,
        opn: initialProps.opn,
        isThereAElectricityMeter: initialProps.isThereAElectricityMeter,
        electricityMeter: initialProps.electricityMeter,
      };

      dispatch(
        setInitialProps({
          id: itemId,
          initialProps: data,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: data,
      });
    }
    if (
      select.name === "currentCellOption" && //SR
      [8].includes(select.selectedIndex)
    ) {
      const data = {
        transformersForOwnNeeds: initialProps.transformersForOwnNeeds,
        isThereAnOpn: initialProps.isThereAnOpn,
        opn: initialProps.opn,
        isThereAElectricityMeter: initialProps.isThereAElectricityMeter,
        electricityMeter: initialProps.electricityMeter,
      };

      dispatch(
        setInitialProps({
          id: itemId,
          initialProps: data,
        })
      );
      setInitialPropsApi({
        id: itemId,
        data: data,
      });
    }
  };

  useEffect(() => {
    // if (disabledOpts?.includes(selectRef.current.selectedIndex))
    // console.log(disabledOpts?.includes(current), disabledOpts, current); //ПРИ ПЕРВОМ РЕНДЕРЕ ВЫСКОЧИТ ПРЕДУПРЕЖДЕНИЕ, ХОТЯ НЕ ДОЛЖНО БЫТЬ ТАКОГО
    if (
      disabledOpts?.includes(current) &&
      tag === "currentTypeOfSwitchingDevice"
    ) {
      // console.log(itemId, disabledOpts, selectRef.current.selectedIndex);
      toast({
        title: `Ошибка! Выберите другое коммутационное устройство`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      //   console.log(disabledOpts?.includes(selectRef.current.selectedIndex));
      setValid(true);
    } else {
      setValid(false);
    }
  }, [disabledOpts, selectRef?.current?.selectedIndex]);
  // [disabledOpts, current, itemId, toast]
  const { auth } = useAuth();
  return (
    <FormControl>
      <div className={styles.container}>
        <FormLabel>{label}</FormLabel>
        {/* <label className={styles.label} htmlFor={tag}>
        {label}
      </label> */}
        <Select
          ref={selectRef}
          name={tag}
          // id={tag}
          onChange={(e) => selectChange(e)}
          isInvalid={valid}
          disabled={false}
          
          // value={currentCellOption}

          // defaultValue={selectValue}
        >
          {options &&
            options.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item}
                  data-key={index}
                  selected={index === current ? true : false}
                  disabled={disabledOpts?.includes(index)}
                >
                  {item}
                </option>
              );
            })}
        </Select>
      </div>
    </FormControl>
  );
};

export default MySelect;
