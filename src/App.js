import React, { useState, useEffect } from "react";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import CalculatorCase from "./components/CalculatorCase/CalculatorCase";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  // eslint-disable-next-line
  const [endsWithNumeric, setEndsWithNumeric] = useState(true);

  const handleClear = () => {
    setInput("");
    setResult("");
    setIsCalculated(false);
    setEndsWithNumeric(true);
  };

  const handleClick = (value) => {
    if (value === "delete") {
      setInput((prevInput) => prevInput.slice(0, -1));
      setIsCalculated(false);
      setEndsWithNumeric(/\d/.test(input.slice(-1)));
    } else {
      setInput((prevInput) => prevInput + value);
      setIsCalculated(false);
      setEndsWithNumeric(/\d/.test(value));
    }
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult.toString());
      setIsCalculated(true);
    } catch (error) {
      setResult("");
    }
  };

  useEffect(() => {
    const lastChar = input.slice(-1);
    const endsWithOperator = input.endsWith(lastChar) && isCalculated;
    const startsWithOperator = input.startsWith(lastChar) && isCalculated;
    const isNumber = /\d/.test(lastChar);

    if (
      isCalculated ||
      endsWithOperator ||
      (!endsWithOperator && startsWithOperator) ||
      startsWithOperator ||
      isNumber
    ) {
      let calculatedResult;
      try {
        if (input.includes(`%[+\-*/]*`)) {
          calculatedResult = math.evaluate(input.replace("%", "%"));
        } else {
          calculatedResult = math.evaluate(input);
        }
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult("");
      }
    } else if (!input) {
      setResult("");
    } else {
      setResult(result);
    }
  }, [input, isCalculated, result]);

  return (
    <div className="App">
      <CalculatorCase>
        <Header />
        <Display input={input} result={result} isCalculated={isCalculated} />
        <ButtonGrid
          handleClick={handleClick}
          handleClear={handleClear}
          handleCalculate={handleCalculate}
        />
      </CalculatorCase>
    </div>
  );
}

export default App;
