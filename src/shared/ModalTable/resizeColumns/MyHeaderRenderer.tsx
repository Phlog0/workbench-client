import React from "react";
import Draggable from "react-draggable";



const resizeRow = ({ dataKey, deltaX }) =>
  setState((prevState) => {
    const prevWidths = 400;
    const percentDelta = deltaX / 1600;

    // This is me being lazy :)
    const nextDataKey = dataKey === "ТИП" ? "НАИМЕНОВАНИЕ" : "ПРОИЗВОДИТЕЛЬ";

    return {
      widths: {
        ...prevWidths,
        [dataKey]: prevWidths[dataKey] + percentDelta,
        [nextDataKey]: prevWidths[nextDataKey] - percentDelta,
      },
    };
  });

export default MyHeaderRenderer;
