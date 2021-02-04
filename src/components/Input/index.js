import React from "react";
import styles from "./style.module.css";

function Input(props) {
  return (
    <>
      <label className={styles.label}>{props.name}</label>
      <input {...props} className={styles.input} />
    </>
  );
}

export default Input;
