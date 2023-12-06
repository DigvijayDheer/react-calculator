// Designed and Developed by Digvijay Dheer

// Importing necessary modules and components
import React, { useEffect, useRef } from "react";
import styles from "./display.module.css";

// Display component to show input, result, and calculation status
function Display({ input, result, isCalculated }) {
  // Ref to the input container for handling scroll
  const inputRef = useRef();

  // Scroll to the bottom of the input container when input changes
  useEffect(() => {
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [input]);

  return (
    <div className={styles.display}>
      {/* Container for input and result */}
      <div className={styles.input} ref={inputRef}>
        {/* Display input text */}
        <p className={styles.para}>{input}</p>
        <br />
        {/* Display result if available */}
        {result && (
          <h4
            className={styles.headingResult}
            style={{ opacity: isCalculated ? 1 : 0.1 }}
          >{`= ${result}`}</h4>
        )}
      </div>
    </div>
  );
}

export default Display;
