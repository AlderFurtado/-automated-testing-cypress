import io from "socket.io-client";
let socket = io("http://localhost:3001", {
  transports: ["websocket"],
});
export default socket;
