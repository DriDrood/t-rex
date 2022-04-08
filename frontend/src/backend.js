const signalR = require("@microsoft/signalr");
let connection;
const start = async () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/api/game")
    .build()
  await connection.start();
}

const joinLobby = async (nickname, lobbyID) => {
  await connection.invoke("joinLobby", nickname);
}

const leaveLobby = async () => {
    await connection.invoke("leaveLobby");
}

export default {
  connection,
  start,
  joinLobby,
  leaveLobby,
}