import React from "react";
import styles from "./calculatorCase.module.css";

function CalculatorCase({ children }) {
  return <div className={styles.calculatorCase}>{children}</div>;
}

export default CalculatorCase;
