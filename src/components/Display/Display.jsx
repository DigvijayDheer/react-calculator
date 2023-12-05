import React, { useEffect, useRef } from "react";
import styles from "./display.module.css";

function Screen({ input }) {
  input =
    "1000000 + 10000000 20 - 10 * 20 / 1000 + 2000 / 3000 + 1000000 + 10000000 20 - 10 * 20 / 1000 + 2000 / 3000 + 1000000 + 10000000 20 - 10 * 20 / 1000 + 2000 / 3000 + 1000000 + 10000000 20 - 10 * 20 / 1000 + 2000 / 3000";

  const inputRef = useRef();

  useEffect(() => {
    // Scroll to the bottom of the container after rendering
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [input]);

  return (
    <div className={styles.display}>
      <div className={styles.input} ref={inputRef}>
        <p className={styles.para}>{input}</p>
        <h4 className={styles.heading}>= 100</h4>
      </div>
    </div>
  );
}

export default Screen;
