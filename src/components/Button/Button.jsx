import React from "react";
import styles from "./button.module.css";

function Button({ children, btnType, spanTwoColumns, spanTwoRows }) {
  let classes = styles.buttonStyles;

  if (btnType === "number" && spanTwoColumns) {
    classes += ` ${styles.numberButton} ${styles.spanTwoColumns}`;
  } else if (btnType === "number" && spanTwoRows) {
    classes += ` ${styles.numberButton} ${styles.spanTwoRows}`;
  } else if (btnType === "number") {
    classes += ` ${styles.numberButton}`;
  } else if (btnType === "action" && spanTwoColumns) {
    classes += ` ${styles.actionButton} ${styles.spanTwoColumns}`;
  } else if (btnType === "action" && spanTwoRows) {
    classes += ` ${styles.actionButton} ${styles.spanTwoRows}`;
  } else if (btnType === "action") {
    classes += ` ${styles.actionButton}`;
  } else if (btnType === "calculate") {
    classes += ` ${styles.calcButton}`;
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
