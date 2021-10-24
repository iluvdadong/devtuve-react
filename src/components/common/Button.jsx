import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { label, onClick, disabled } = props;
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
export default Button;
