import React, { useState } from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import styles from "./style.module.css";

export default function FormLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    alert("Seja Bem-vindo(a)");
  };

  return (
    <form onSubmit={handleForm} className={styles.form}>
      <Input
        name="Name"
        type="text"
        data-cy="input-name-login-form"
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="Email"
        type="email"
        data-cy="input-email-login-form"
        placeholder="Type your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="Password"
        type="password"
        data-cy="input-phone-login-form"
        placeholder="Type your password"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br></br>
      <Button type="submit" data-cy="input-submit-login-form">
        Login
      </Button>
    </form>
  );
}
