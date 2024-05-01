import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
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
const MyInput = memo(function MyInput({
  tag,
  label,
  inputType,
  value,
  opt1,
  onChange,
  opt2,
  myId,
  max,
  propValid,
  id,
}) {
  const dispatch = useDispatch();

  // console.log(`>>>>>>>>>>>>>>>>>>>>${opt1}-${opt2}<<<<<<<<<<<<<<<<<<<<<<<<<`);

  const currentId = useAppSelector((state) => state.flow.currentNodeId);

  const reactiveCos = useAppSelector(
    (state) => state.flow.nodes.find((item) => item.id)?.reactiveCos
  );

  const [state, setState] = useState("");
  const [inputValue, setInputValue] = React.useState();
  const [debouncedValue] = useDebounce(inputValue, 1000);

  const { auth } = useAuth();

  // const redValue = useAppSelector((state) =>
  //   state.flow.nodes.find((node) => node.id === currentId)
  // );

  // const debouncedSearchTerm = useDebounce(localInputState, 500);
  // useEffect(() => {
  //   setLocalInputState(redValue[opt1][opt2]);
  // }, [currentId]);

  const totalVoltageForAll = useAppSelector(
    (state) =>
      state.flow.nodes.find((item) => item.type === "MainSchemeType")
        ?.totalVoltageForAll
  );

  const [updateCurrentPropApi, resultUpdateCurrentProp] =
    useUpdateCurrentPropMutation();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = value;
  }, [currentId, value]);

  // const [state, setState] = useState(value);

  // useEffect(() => {
  //   console.log("id changed");
  //   setInputValue(value);
  // }, [currentId, value]);

  const handleChange = async (e) => {
    const updatedProp = {
      id: myId || currentId,
      key1: opt1,
      key2: opt2,
      // value: e.target.value,
      value:
        inputType === "number"
          ? +inputRef?.current?.value
          : inputRef?.current?.value,
    };

    dispatch(updateProp(updatedProp));
    await updateCurrentPropApi(updatedProp);

    if (opt1 === "totalPowerOfAllElectricalAppliances") {
      console.log(+inputRef?.current?.value);
      const updatedCurrent = {
        id: myId || currentId,
        key1: "currentOL",
        key2: "",
        // value: e.target.value,
        value: +inputRef?.current?.value / totalVoltageForAll / 3 ** (1 / 2),
      };
      dispatch(updateProp(updatedCurrent));
      await updateCurrentPropApi({
        id: myId || currentId,
        key1: "currentOL",
        key2: "",
        // value: e.target.value,
        value: +inputRef?.current?.value / totalVoltageForAll / 3 ** (1 / 2),
      });
    }
  };

  const debouncedHandleChange = debounce(handleChange, 1000);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  // useEffect(() => {
  //   const updatedProp = {
  //     id: myId || currentId,
  //     key1: opt1,
  //     key2: opt2,
  //     // value: e.target.value,
  //     value: debouncedValue,
  //   };
  //   console.log(debouncedValue);
  //   dispatch(updateProp(updatedProp));

  //   updateCurrentPropApi(updatedProp);
  // }, [debouncedValue]);
  return (
    <FormControl
      isDisabled={[1, 2].includes(auth?.roleId) ? false : true}
      isInvalid={propValid || false}
      className={"styles.container"}
    >
      {/* <FormLabel position={"relative"}> */}
      <FormLabel position={"relative"}>
        {/* <label htmlFor={tag}>{label}</label> */}
        {label}
      </FormLabel>

      <Input
        ref={inputRef}
        type={inputType}
        name={tag}
        data-opt1={opt1}
        data-opt2={opt2}
        // value={inputValue}
        // onChange={handleInputChange}
        onChange={debouncedHandleChange}
      />

      <Divider marginBlock={"1rem"} />
    </FormControl>
  );
});

export default MyInput;
