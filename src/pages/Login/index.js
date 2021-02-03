import React from "react";

import FormLogin from "../../components/FormLogin/index";

import styles from "./style.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <FormLogin />
    </div>
  );
}

export default Login;
