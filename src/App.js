import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import CalculatorCase from "./components/CalculatorCase/CalculatorCase";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <CalculatorCase>
        <Header />
        <Display />
        <ButtonGrid />
      </CalculatorCase>
    </div>
  );
}

export default App;
