import { useContext } from "react";
import { CalculateContext } from "./contexts/calculate.context";

const Result = () => {
  const { state } = useContext(CalculateContext);
  return <h2>{state.result}</h2>;
};

export default Result;
