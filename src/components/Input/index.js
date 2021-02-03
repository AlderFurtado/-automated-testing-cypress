import React from "react";
import styles from "./style.module.css";
// import { Container } from './styles';

function Input(props) {
  return (
    <>
      <label className={styles.label}>{props.name}</label>
      <input {...props} className={styles.input} />
    </>
  );
}

export default Input;
