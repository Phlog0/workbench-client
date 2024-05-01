import React from "react";
import { useAppSelector } from "../../hook";

const QuestionnaireTable = ({ currentItemId }) => {
  // const currentItemId = useAppSelector((state) => state.flow.currentNodeId);
  // console.log(currentItemId);
  console.log(currentItemId);
  return (
    <table>
      <tr>
        <td>{currentItemId}</td>
        <td>{currentItemId}</td>
        <td>{currentItemId}</td>
      </tr>
    </table>
  );
};

export default QuestionnaireTable;
