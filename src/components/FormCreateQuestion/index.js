import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

import styles from "./style.module.css";

function FormCreateQuestion() {
  // const [structure, setStructure] = useState([]);
  const [question, setQuestion] = useState("");
  const [helper, setHelper] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([answer]);

  const addQuestion = () => {
    setAnswers([...answers, answer]);
  };

  return (
    <form className={styles.form}>
      <Input
        name="Question"
        placeholder="Type your question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Input
        name="Helper"
        placeholder="Type a help (image link, video link, some tip)"
        onChange={(e) => setHelper(e.target.value)}
      />
      <br></br>
      {answers.map((answerWrite, index) => {
        return (
          <Input
            key={answerWrite}
            name={`${index + 1}º Answer`}
            placeholder="Type a alternative"
            onChange={(e) => setAnswer(e.target.value)}
          />
        );
      })}

      <small className={styles.add_answer} onClick={addQuestion}>
        Add another answer
      </small>
      <button>teste</button>
      <br></br>
      <br></br>
    </form>
  );
}

export default FormCreateQuestion;
