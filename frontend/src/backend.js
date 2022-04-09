const signalR = require("@microsoft/signalr");
let connection;
const start = async () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("/api/game")
    .build()
  await connection.start();
}

const joinLobby = async (nickname, lobbyID) => {
  await connection.invoke("joinLobby", nickname, lobbyID);
}

const leaveLobby = async () => {
  await connection.invoke("leaveLobby");
}

const getHallOfFameData = () => {
  let randomValues = [{name: "Dumba", score: 4513}, {name: "Fukl", score: 3238}, {name: "Kuba", score: 2314}, {name: "Tomas", score: 456}, {name: "Honza", score: 404}]
  //const data = await connection.invoke("getHallOfFameData");
  return randomValues; // Only for testing
}

export default {
  connection,
  start,
  joinLobby,
  leaveLobby,
  getHallOfFameData,
}