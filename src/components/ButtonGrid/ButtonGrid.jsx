// Designed and Developed by Digvijay Dheer

// Importing necessary modules and components
import React from "react";
import Button from "../Button/Button";
import styles from "./buttonGrid.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faDivide,
  faXmark,
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

// ButtonGrid component with buttons for a calculator
function ButtonGrid({ handleClick, handleCalculate, handleClear }) {
  return (
    <div className={styles.buttonContainer}>
      {/* Row one */}
      <Button btnType="action" onClick={handleClear}>
        AC {/* Clear All */}
      </Button>
      <Button btnType="action" onClick={() => handleClick("%")}>
        <FontAwesomeIcon icon={faDivide} /> {/* Percentage */}
      </Button>
      <Button btnType="action" onClick={() => handleClick("/")}>
        <span className={styles.specialButtonStyles}>/</span> {/* Division */}
      </Button>
      <Button btnType="action" onClick={() => handleClick("delete")}>
        <FontAwesomeIcon icon={faDeleteLeft} /> {/* Delete */}
      </Button>
      {/* Row two */}
      <Button btnType="number" onClick={() => handleClick("7")}>
        7
      </Button>
      <Button btnType="number" onClick={() => handleClick("8")}>
        8
      </Button>
      <Button btnType="number" onClick={() => handleClick("9")}>
        9
      </Button>
      <Button btnType="action" onClick={() => handleClick("*")}>
        <FontAwesomeIcon icon={faXmark} /> {/* Multiplication */}
      </Button>
      {/* Row three */}
      <Button btnType="number" onClick={() => handleClick("4")}>
        4
      </Button>
      <Button btnType="number" onClick={() => handleClick("5")}>
        5
      </Button>
      <Button btnType="number" onClick={() => handleClick("6")}>
        6
      </Button>
      <Button btnType="action" onClick={() => handleClick("-")}>
        <FontAwesomeIcon icon={faMinus} /> {/* Subtraction */}
      </Button>
      {/* Row four */}
      <Button btnType="number" onClick={() => handleClick("1")}>
        1
      </Button>
      <Button btnType="number" onClick={() => handleClick("2")}>
        2
      </Button>
      <Button btnType="number" onClick={() => handleClick("3")}>
        3
      </Button>
      <Button btnType="action" onClick={() => handleClick("+")}>
        <FontAwesomeIcon icon={faPlus} /> {/* Addition */}
      </Button>
      {/* Row five */}
      <Button btnType="number">+/-</Button> {/* Change Sign */}
      <Button btnType="number" onClick={() => handleClick("0")}>
        0
      </Button>
      <Button btnType="number" onClick={() => handleClick(".")}>
        .
      </Button>{" "}
      {/* Decimal Point */}
      <Button btnType="calculate" onClick={handleCalculate}>
        <FontAwesomeIcon icon={faEquals} /> {/* Equals */}
      </Button>
    </div>
  );
}

export default ButtonGrid;
