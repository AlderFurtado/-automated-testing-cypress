import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";

import styles from "./style.module.css";

function FormCreateQuestion({ createQuiz, index, copyQuiz }) {
  console.log(`copyQuiz ${index}`, copyQuiz);
  const [question, setQuestion] = useState(copyQuiz.question);
  const [helper, setHelper] = useState(copyQuiz.helper);
  const [answers, setAnswers] = useState(copyQuiz.answers);
  const [quantAnswer, setQuantAnswer] = useState(copyQuiz.answers.length);

  useEffect(() => {
    createQuiz(
      {
        question,
        helper,
        answers,
      },
      index
    );
  }, [question, helper, answers]);
  const addNewAnswer = () => {
    let plusQuantAnswer = quantAnswer + 1;
    setQuantAnswer(plusQuantAnswer);
  };

  const onAnswer = (item, index) => {
    let newArray = JSON.parse(JSON.stringify(answers));
    newArray[index] = item;

    setAnswers(newArray);
  };

  const log = (e) => {
    e.preventDefault();
    let sctructure = {
      question,
      helper,
      answers,
    };
  };

  return (
    <form className={styles.form}>
      <Input
        value={question}
        name="Question"
        placeholder="Type your question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Input
        value={helper}
        name="Helper"
        placeholder="Type a help (image link, video link, some tip)"
        onChange={(e) => setHelper(e.target.value)}
      />
      <br></br>
      {[...Array(quantAnswer)].map((answerWrite, index) => {
        return (
          <Input
            value={answers[index]}
            key={answerWrite}
            name={`${index + 1}º Answer`}
            placeholder="Type a alternative"
            onChange={(e) => onAnswer(e.target.value, index)}
          />
        );
      })}

      <small className={styles.add_answer} onClick={addNewAnswer}>
        Add another answer
      </small>
      <button onClick={(e) => log(e)}>teste</button>
      <br></br>
      <br></br>
    </form>
  );
}

export default FormCreateQuestion;
