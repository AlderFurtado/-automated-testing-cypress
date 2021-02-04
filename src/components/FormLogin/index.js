import React, { useState } from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";

export default function FormLogin() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("roomName", roomName);
    localStorage.setItem("playerName", name);

    history.push("/");
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
        name="Room"
        type="text"
        data-cy="input-room-name-login-form"
        placeholder="Type your room name"
        onChange={(e) => setRoomName(e.target.value)}
      />
      <br></br>
      <Button type="submit" data-cy="input-submit-login-form">
        Login
      </Button>
    </form>
  );
}
