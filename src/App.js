// Design and Developed by Digvijay Dheer

// Importing necessary modules and components
import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import ButtonGrid from "./components/ButtonGrid/ButtonGrid"; // Import ButtonGrid component
import CalculatorCase from "./components/CalculatorCase/CalculatorCase"; // Import CalculatorCase component
import Display from "./components/Display/Display"; // Import Display component
import Header from "./components/Header/Header"; // Import Header component
import * as math from "mathjs"; // Import the math library for mathematical operations

// Main App component
function App() {
  // State variables
  const [input, setInput] = useState(""); // State to store the input string
  const [result, setResult] = useState(""); // State to store the result of calculations
  const [isCalculated, setIsCalculated] = useState(false); // State flag to track if the result is calculated

  // Function to clear input and result
  const handleClear = () => {
    setInput(""); // Clear the input
    setResult(""); // Clear the result
    setIsCalculated(false); // Reset the calculation flag
  };

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "delete") {
      setInput((prevInput) => {
        // Remove the last character from the input
        const updatedInput = prevInput.slice(0, -1);

        // Remove trailing space if the last character was an operator
        const lastChar = updatedInput.slice(-1);
        return /[+\-*/%]/.test(lastChar)
          ? updatedInput.slice(0, -1)
          : updatedInput;
      });
      setIsCalculated(false); // Reset the calculation flag
    } else if (/[+\-*/%]/.test(value)) {
      setInput((prevInput) => {
        // Add an operator with spaces to the input
        return `${prevInput} ${value} `;
      });
      setIsCalculated(false); // Reset the calculation flag
    } else {
      setInput((prevInput) => `${prevInput}${value}`); // Add a number or digit to the input
      setIsCalculated(false); // Reset the calculation flag
    }
  };

  // Function to handle calculation
  const handleCalculate = () => {
    try {
      const trimmedInput = input.trim(); // Remove leading and trailing spaces from the input

      // Replace percentage with division by 100 and evaluate the expression
      const calculatedResult = math.evaluate(
        trimmedInput.includes("%")
          ? trimmedInput.replace("%", "/ 100")
          : trimmedInput
      );

      // Set the result and update the state
      setResult(formatResult(calculatedResult));
      setIsCalculated(true); // Set the calculation flag
    } catch (error) {
      console.error(error); // Log any errors during calculation
      setResult(""); // Reset the result in case of an error
    }
  };

  // Function to format the result for display
  const formatResult = (result) => {
    if (result.toString().length > 8) {
      // If the result is too long, format it in exponential notation
      const shortenedResult = result.toExponential(3);
      return `approx: ${shortenedResult}`;
    } else {
      // Otherwise, display the result as a string
      return result.toString();
    }
  };

  // Effect hook to update the result based on input changes
  useEffect(() => {
    const lastChar = input.slice(-1);
    const endsWithOperator = input.endsWith(lastChar) && isCalculated;
    const startsWithOperator = input.startsWith(lastChar) && isCalculated;
    const isNumber = /\d/.test(lastChar);

    // Check various conditions to update the result
    if (
      isCalculated ||
      endsWithOperator ||
      (!endsWithOperator && startsWithOperator) ||
      startsWithOperator ||
      isNumber
    ) {
      try {
        // Evaluate the expression and update the result
        const calculatedResult = math.evaluate(
          input.includes("%") ? input.replace("%", "/ 100") : input
        );
        setResult(formatResult(calculatedResult));
      } catch (error) {
        console.error(error); // Log any errors during calculation
        setResult(""); // Reset the result in case of an error
      }
    } else if (!input) {
      setResult(""); // Reset the result if the input is empty
    }
  }, [input, isCalculated]);

  // Render the main component structure
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

// Export the App component
export default App;
