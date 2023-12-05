// Design and Developed by Digvijay Dheer

// Importing necessary modules and components
import React from "react";
import styles from "./calculatorCase.module.css";

// CalculatorCase component for wrapping calculator content
function CalculatorCase({ children }) {
  return <div className={styles.calculatorCase}>{children}</div>;
}

export default CalculatorCase;
