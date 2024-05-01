import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  TagLabel,
} from "@chakra-ui/react";
import React, {
  Suspense,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useDispatch } from "react-redux";
import { updateProp } from "../store/flowSlice";
import { useAppSelector } from "../hook";

import { memo } from "react";
import debounce from "debounce";
import { useUpdateCurrentPropMutation } from "../services/projectService";
import { useDebounce } from "use-debounce";
import useAuth from "../hooks/useAuth";
// import styles from "./MyInputModal.module.scss";
const MyNumberInput = ({
  tag,
  label,
  inputType,
  value,
  opt1,
  onChange,
  opt2,
  myId,
  max,
  min,
  propValid,
  id,
}) => {
  const dispatch = useDispatch();

  // console.log(`>>>>>>>>>>>>>>>>>>>>${opt1}-${opt2}<<<<<<<<<<<<<<<<<<<<<<<<<`);

  const currentId = useAppSelector((state) => state.flow.currentNodeId);

  const [state, setState] = useState("");
  const [inputValue, setInputValue] = React.useState(value);
  const [debouncedValue] = useDebounce(inputValue, 1000);
  // const redValue = useAppSelector((state) =>
  //   state.flow.nodes.find((node) => node.id === currentId)
  // );

  // const debouncedSearchTerm = useDebounce(localInputState, 500);
  // useEffect(() => {
  //   setLocalInputState(redValue[opt1][opt2]);
  // }, [currentId]);

  const [updateCurrentPropApi, resultUpdateCurrentProp] =
    useUpdateCurrentPropMutation();

  // useEffect(() => {
  //   inputValue.current.value = value;
  // }, [currentId, value]);

  // const inputValue = useRef(null);

  // const [state, setState] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [currentId, value]);

  const handleChange = (e) => {
    const updatedProp = {
      id: myId || currentId,
      key1: opt1,
      key2: opt2,
      // value: e.target.value,
      value: inputValue?.current?.value,
    };
    dispatch(updateProp(updatedProp));

    updateCurrentPropApi(updatedProp);
  };

  const debouncedHandleChange = debounce(handleChange, 1000);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleInputClickInc = (event, action) => {
    if (inputValue >= 1) return;
    const value = +inputValue + action;
    setInputValue(value);
  };
  const handleInputClickDec = (event, action) => {
    if (inputValue <= 0) return;
    const value = +inputValue + action;
    setInputValue(value.toFixed(2));
  };

  useEffect(() => {
    const updateFiled = async () => {
      const updatedProp = {
        id: myId || currentId,
        key1: opt1,
        key2: opt2,
        // value: e.target.value,
        value: Number(debouncedValue),
      };
      console.log(debouncedValue);
      dispatch(updateProp(updatedProp));

      await updateCurrentPropApi(updatedProp);
    };
    updateFiled();
  }, [debouncedValue]);


  const {auth} = useAuth();

  return (
    <FormControl
      isInvalid={propValid || false}
      className={"styles.container"}
      isDisabled={[1, 2].includes(auth?.roleId) ? false : true}
    >
      <FormLabel position={"relative"}>{label}</FormLabel>

      <NumberInput
        precision={2}
        step={0.2}
        keepWithinRange={true}
        clampValueOnBlur={true}
        value={inputValue}
        max={max || null}
        min={min || null}
      >
        <NumberInputField
          name={tag}
          id={tag}
          // defaultValue={value}
          // defaultValue={inputValue}
          data-opt1={opt1}
          data-opt2={opt2}
          // value={inputValue}
          // onChange={(e) => inputChange(e.target.value)}
          onChange={handleInputChange}
        />
        <NumberInputStepper>
          <NumberIncrementStepper
            onClick={(event) => handleInputClickInc(event, 0.2)}
          />
          <NumberDecrementStepper
            onClick={(event) => handleInputClickDec(event, -0.2)}
          />
        </NumberInputStepper>
      </NumberInput>

      <Divider marginBlock={"1rem"} />
    </FormControl>
  );
};

export default MyNumberInput;
