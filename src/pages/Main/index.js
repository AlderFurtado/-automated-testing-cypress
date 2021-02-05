import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import FormCreateQuestion from "../../components/FormCreateQuestion";

import style from "./style.module.css";

function Main() {
  const [quiz, setQuiz] = useState([
    { question: "", helper: "", answers: [""] },
  ]);

  const copyLastQuestion = () => {
    let lastQuestion = JSON.parse(JSON.stringify(quiz[quiz.length - 1]));
    setQuiz([...quiz, lastQuestion]);
  };

  const addQuestion = () => {
    setQuiz([...quiz, {}]);
  };

  const createQuiz = (sctucture, index) => {
    let newQuiz = JSON.parse(JSON.stringify(quiz));
    newQuiz[index] = sctucture;
    setQuiz(newQuiz);
  };

  return (
    <div className={style.container}>
      <div className={style.container_create_quiz}>
        {quiz.map((v, i) => {
          return (
            <FormCreateQuestion
              createQuiz={createQuiz}
              index={i}
              copyQuiz={quiz[i]}
            />
          );
        })}
        <div className={style.container_options}>
          <span className={style.add_question} onClick={addQuestion}>
            Add one more question
          </span>
          <span className={style.add_question} onClick={copyLastQuestion}>
            Copy the last question
          </span>
        </div>
        <Button>Save Quiz</Button>
      </div>
    </div>
  );
}

export default Main;
