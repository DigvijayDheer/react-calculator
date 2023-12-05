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

  const handleClear = () => {
    setInput("");
    setResult("");
    setIsCalculated(false);
  };

  const handleClick = (value) => {
    if (value === "delete") {
      setInput((prevInput) => prevInput.slice(0, -1));
      setIsCalculated(false);
    } else if (/[+\-*/%]/.test(value)) {
      setInput((prevInput) => `${prevInput} ${value} `);
      setIsCalculated(false);
    } else {
      setInput((prevInput) => `${prevInput}${value}`);
      setIsCalculated(false);
    }
  };

  const handleCalculate = () => {
    try {
      const trimmedInput = input.trim();

      const calculatedResult = math.evaluate(
        trimmedInput.includes("%")
          ? trimmedInput.replace("%", "/ 100")
          : trimmedInput
      );

      setResult(formatResult(calculatedResult));
      setIsCalculated(true);
    } catch (error) {
      console.error(error);
      setResult("");
    }
  };

  const formatResult = (result) => {
    if (result.toString().length > 8) {
      const shortenedResult = result.toExponential(3);
      return `approx: ${shortenedResult}`;
    } else {
      return result.toString();
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
      try {
        const calculatedResult = math.evaluate(
          input.includes("%") ? input.replace("%", "/ 100") : input
        );
        setResult(formatResult(calculatedResult));
      } catch (error) {
        console.error(error);
        setResult("");
      }
    } else if (!input) {
      setResult("");
    }
  }, [input, isCalculated]);

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
