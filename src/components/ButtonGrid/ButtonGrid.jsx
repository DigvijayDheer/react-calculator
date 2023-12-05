import React from "react";
import Button from "../Button/Button";
import styles from "./buttonGrid.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faDivide,
  faPercent,
  faXmark,
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

function ButtonGrid() {
  return (
    <div className={styles.buttonContainer}>
      <Button btnType="action">AC</Button>
      <Button btnType="action">
        <FontAwesomeIcon icon={faDivide} />
      </Button>
      <Button btnType="action">
        <span className={styles.specialButtonStyles}>/</span>
      </Button>

      <Button btnType="action">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </Button>

      <Button btnType="number">7</Button>
      <Button btnType="number">8</Button>
      <Button btnType="number">9</Button>
      <Button btnType="action">
        <FontAwesomeIcon icon={faXmark} />
      </Button>

      <Button btnType="number">4</Button>
      <Button btnType="number">5</Button>
      <Button btnType="number">6</Button>
      <Button btnType="action">
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <Button btnType="number">1</Button>
      <Button btnType="number">2</Button>
      <Button btnType="number">3</Button>
      <Button btnType="action">
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Button btnType="action">
        <FontAwesomeIcon icon={faPercent} />
      </Button>
      <Button btnType="number">0</Button>
      <Button btnType="number">.</Button>
      <Button btnType="calculate">
        <FontAwesomeIcon icon={faEquals} />
      </Button>
    </div>
  );
}

export default ButtonGrid;
