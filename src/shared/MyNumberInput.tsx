import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
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
import { updateOPNProp, updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
import useDebounce from "../hooks/useDebounce";

import debounce from "debounce";

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
}) => {
  const dispatch = useDispatch();

  const currentId = useAppSelector((state) => state.nodes.currentNode.id);

  const redValue = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === currentId)
  );
  const [localInputState, setLocalInputState] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    inputValue.current.value = value;
  }, [currentId, value]);

  const inputValue = useRef(null);
  const handleChange = (e) => {
    inputValue.current.blur();
    console.log(e.target);
    setTimeout(() => {
      dispatch(
        updateProp({
          id: myId || currentId,
          key1: opt1,
          key2: opt2,
          value: e.target.value,
          // value: inputValue.current.value,
        })
      );
    }, 0);
  };

  const debouncedHandleChange = debounce(handleChange, 1000);

  return (
    // <FormControl className={"styles.container"}>
    <>
      <Box position={"relative"}>
        <label htmlFor={tag}>{label}</label>
      </Box>
      {inputValue !== null && (
        <>
          {" "}
          <NumberInput
            keepWithinRange={true}
            clampValueOnBlur={true}
            min={0}
            max={1}
          >
            <NumberInputField
              name={tag}
              id={tag}
              // defaultValue={value}
              defaultValue={value}
              data-opt1={opt1}
              data-opt2={opt2}
              ref={inputValue}
              onChange={debouncedHandleChange}
            />
            <NumberInputStepper></NumberInputStepper>
          </NumberInput>
          {/* <Input
            type={inputType}
            name={tag}
            id={tag}
            // value={localInputState}
            // ПРЯМО С РЕДАКСА
            // data-opt1={redValue[opt1]}
            // data-opt2={redValue[opt2]}
            data-opt1={opt1}
            data-opt2={opt2}
            // ref={inputValue}
            // onChange={(e) => (inputValue.current.value = e.target.value)}
            // onChange={onChange}
            // onChange={handleChange}
            ref={inputValue}
            // onChange={(e) => setLocalInputState(e.target.value)}
            onChange={debouncedHandleChange}
            max={max || null}
          />{" "} */}
        </>
      )}
      <Divider marginBlock={"1rem"} />
    </>
    // </FormControl>
  );
};

export default MyNumberInput;
