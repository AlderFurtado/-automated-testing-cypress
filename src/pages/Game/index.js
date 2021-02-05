import React, { useEffect, useState } from "react";
import Ranking from "../../components/Ranking";

import socket from "../../services/socket/index";

import style from "./style.module.css";

function Game() {
  const roomNamelocalStorage = localStorage.getItem("roomName");
  const playerNamelocalStorage = localStorage.getItem("playerName");

  const [roomName, setRoomName] = useState(
    !roomNamelocalStorage ? "No room" : roomNamelocalStorage
  );
  const [playerName, setPlayerName] = useState(
    !playerNamelocalStorage ? "No player name" : playerNamelocalStorage
  );
  const [playersConnected, setPlayersConnected] = useState([]);

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

  return (
    <div className={style.container}>
      <Ranking playersConnected={playersConnected} />
    </div>
  );
}

export default Game;
