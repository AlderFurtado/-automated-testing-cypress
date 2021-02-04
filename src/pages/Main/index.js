import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import socket from "../../services/socket/index";

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

  useEffect(() => {
    connectRoomWebSocket();
    getConnectedPlayers();
  }, []);

  const connectRoomWebSocket = () => {
    socket.emit("room", playerName);
  };

  const getConnectedPlayers = () => {
    socket.on("connectedsRoom", (players) => {
      console.log(players);
      setPlayersConnected(players);
    });
  };

  return (
    <>
      <h1>Welcome</h1>
      <h2>Room Name: {roomName} </h2>
      <h2>Player Name: {playerName} </h2>

      <h3>Jogadores connectados</h3>
      <ul>
        {playersConnected?.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default Main;
