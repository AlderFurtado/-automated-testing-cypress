import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import FormCreateQuestion from "../../components/FormCreateQuestion";

import socket from "../../services/socket/index";

import style from "./style.module.css";

function Main() {
  const history = useHistory();

  const roomNamelocalStorage = localStorage.getItem("roomName");
  const playerNamelocalStorage = localStorage.getItem("playerName");

  const [roomName, setRoomName] = useState(
    !roomNamelocalStorage ? "No room" : roomNamelocalStorage
  );
  const [playerName, setPlayerName] = useState(
    !playerNamelocalStorage ? "No player name" : playerNamelocalStorage
  );
  const [playersConnected, setPlayersConnected] = useState([]);
  const [quiz, setQuiz] = useState([
    { question: "", helper: "", answers: [""] },
  ]);

  useEffect(() => {
    connectRoomWebSocket();
    getConnectedPlayers();
  }, []);

  const connectRoomWebSocket = () => {
    socket.emit("room", playerName);
  };

  const getConnectedPlayers = () => {
    socket.on("connectedsRoom", (players) => {
      setPlayersConnected(players);
    });
  };

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
      <h1>Welcome</h1>
      <h2>Room Name: {roomName} </h2>
      <h2>Player Name: {playerName} </h2>

      <h3>Jogadores connectados</h3>
      {/* <ul>
        {playersConnected?.map(({ name, id }, index) => {
          return <li key={`player ${index}`}>{name}</li>;
        })}
      </ul> */}
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
