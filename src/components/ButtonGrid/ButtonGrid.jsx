import React from "react";
import Button from "../Button/Button";
import styles from "./buttonGrid.module.css";
// Import the necessary dependencies
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
      <Button>AC</Button>
      <Button>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faPercent} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faDivide} />
      </Button>

      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>
        <FontAwesomeIcon icon={faXmark} />
      </Button>

      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Button>H</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>
        <FontAwesomeIcon icon={faEquals} />
      </Button>
    </div>
  );
}

export default ButtonGrid;
