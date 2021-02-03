import React from "react";
import styles from "./style.module.css";

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
