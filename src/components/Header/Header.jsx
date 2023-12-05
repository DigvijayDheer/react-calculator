import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>Conventional Calculator</h1>
    </div>
  );
}

export default Header;
