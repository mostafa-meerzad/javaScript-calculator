import React from "react";
import Display from "./components/Display";
import { NumPad } from "./components/NumPad";
import "./styles/style.css";
import { useSelector } from "react-redux";
import {
  selectFirstNum,
  selectSecondNum,
  selectResult,
  selectOperator
} from "./features/CalculatorSlice";

const Calculator = () => {
  const first = useSelector(selectFirstNum);
  const second = useSelector(selectSecondNum);
  const operator = useSelector(selectOperator);
  const result = useSelector(selectResult);

  return (
    <main className="calculator">
      <Display
        first={first}
        second={second}
        operator={operator}
        equals={"="}
        result={result}
      />
      <NumPad />
    </main>
  );
};

export default Calculator;
