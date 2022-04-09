const signalR = require("@microsoft/signalr");
let connection;
const start = async () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/api/game")
    .build()
  await connection.start();
}

const createLobby = async (nickname) => {
  await connection.invoke("createLobby", nickname);
}

const joinLobby = async (nickname, lobbyID) => {
  await connection.invoke("joinLobby", nickname);
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
  createLobby,
  joinLobby,
  leaveLobby,
  getHallOfFameData,
}