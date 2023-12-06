// Designed and Developed by Digvijay Dheer

// Importing necessary modules and components
import React from "react";
import styles from "./button.module.css";

// Button component with dynamic styling based on props
function Button({ children, btnType, spanTwoColumns, spanTwoRows, onClick }) {
  // Define the base button style
  let classes = styles.buttonStyles;

  // Define common button styles based on type and layout
  if (spanTwoColumns) {
    classes += ` ${styles.spanTwoColumns}`;
  } else if (spanTwoRows) {
    classes += ` ${styles.spanTwoRows}`;
  }

  // Add specific button styles based on the type
  if (btnType === "number") {
    classes += ` ${styles.numberButton}`;
  } else if (btnType === "action") {
    classes += ` ${styles.actionButton}`;
  } else if (btnType === "calculate") {
    classes += ` ${styles.calcButton}`;
  }

  // Render the button with dynamic styles and onClick handler
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
