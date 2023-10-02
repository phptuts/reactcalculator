import CalculateContextProvider from "./contexts/calculate.context";
import Math from "./Math";
import Result from "./Result";
function App() {
  return (
    <CalculateContextProvider>
      <Math />
      <Result />
    </CalculateContextProvider>
  );
}

export default App;
