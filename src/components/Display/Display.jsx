import React from "react";
import styles from "./display.module.css";

function Screen({ input }) {
  return <div className={styles.display}>{input}</div>;
}

export default Screen;
