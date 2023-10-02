import { useContext } from "react";
import { CalculateContext } from "./contexts/calculate.context";

const Math = () => {
  const { state, dispatch } = useContext(CalculateContext);

  function onChangeNum1(e) {
    dispatch({ type: "set_number_1", payload: +e.target.value });
  }

  function onChangeNum2(e) {
    dispatch({ type: "set_number_2", payload: +e.target.value });
  }

  function onChangeResult(e) {
    dispatch({ type: e.target.value });
  }

  return (
    <div>
      <input
        type="number"
        onChange={onChangeNum1}
        value={state.num1}
        placeholder="Number 1"
      />
      <select onChange={onChangeResult} name="" id="">
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="times">x</option>
        <option value="divide">/</option>
      </select>
      <input
        type="number"
        onChange={onChangeNum2}
        value={state.num2}
        placeholder="Number 2"
      />
    </div>
  );
};

export default Math;
