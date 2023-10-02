import { createContext, useReducer } from "react";
import calculatorReducer from "../reducers/calculator.reducer";

export const CalculateContext = createContext();

const CalculateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    num1: 3,
    num2: 2,
    result: 5,
    operator: "plus",
  });
  return (
    <CalculateContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContextProvider;
