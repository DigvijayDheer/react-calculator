// Design and Developed by Digvijay Dheer

// Importing necessary modules and components
import React from "react";
import styles from "./header.module.css";

// Header component displaying the calculator title
function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* Display the calculator title */}
      <h3>Conventional Calculator</h3>
    </div>
  );
}

export default Header;
