const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        result: state.num1 + state.num2,
        operator: action.type,
      };
    case "minus":
      return {
        ...state,
        result: state.num1 - state.num2,
        operator: action.type,
      };
    case "times":
      return {
        ...state,
        result: state.num1 * state.num2,
        operator: action.type,
      };
    case "divide":
      return {
        ...state,
        result: state.num1 / state.num2,
        operator: action.type,
      };
    case "set_number_1":
      const num1 = action.payload;
      return calculatorReducer({ ...state, num1 }, { type: state.operator });
    case "set_number_2":
      const num2 = action.payload;
      return calculatorReducer({ ...state, num2 }, { type: state.operator });
    default:
      return { ...state };
  }
};

export default calculatorReducer;
