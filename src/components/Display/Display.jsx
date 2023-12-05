import React, { useEffect, useRef } from "react";
import styles from "./display.module.css";

function Display({ input, result, isCalculated }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [input]);

  return (
    <div className={styles.display}>
      <div className={styles.input} ref={inputRef}>
        <p className={styles.para}>{input}</p>
        <br />
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
