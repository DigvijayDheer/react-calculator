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

function ButtonGrid({ handleClick, handleCalculate, handleClear }) {
  return (
    <div className={styles.buttonContainer}>
      {/* Row one */}
      <Button btnType="action" onClick={handleClear}>
        AC
      </Button>
      <Button btnType="action" onClick={() => handleClick("%")}>
        <FontAwesomeIcon icon={faDivide} />
      </Button>
      <Button btnType="action" onClick={() => handleClick("/")}>
        <span className={styles.specialButtonStyles}>/</span>
      </Button>
      <Button btnType="action" onClick={() => handleClick("delete")}>
        <FontAwesomeIcon icon={faDeleteLeft} />
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
        <FontAwesomeIcon icon={faXmark} />
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
        <FontAwesomeIcon icon={faMinus} />
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
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      {/* Row five */}
      <Button btnType="action">D</Button>
      <Button btnType="number" onClick={() => handleClick("0")}>
        0
      </Button>
      <Button btnType="number" onClick={() => handleClick(".")}>
        .
      </Button>
      <Button btnType="calculate" onClick={handleCalculate}>
        <FontAwesomeIcon icon={faEquals} />
      </Button>
    </div>
  );
}

export default ButtonGrid;
