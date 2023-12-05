import React from "react";
import styles from "./button.module.css";

function Button({ children, btnType }) {
  let classes = styles.buttonStyles;

  if (btnType === "number") {
    classes = `${styles.buttonStyles} ${styles.numberButton}`;
  }

  if (btnType === "action") {
    classes = `${styles.buttonStyles} ${styles.actionButton}`;
  }

  if (btnType === "calculate") {
    classes = `${styles.buttonStyles} ${styles.calcButton}`;
  }

  return (
    <>
      <button className={classes}>{children}</button>
    </>
  );
}
export default Button;
