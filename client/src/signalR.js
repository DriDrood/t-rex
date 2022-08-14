// SignalR
const connection = new signalR.HubConnectionBuilder()
  .withUrl("/api/game")
  .build();

export default {
  async connect(playerId) {
    try {
      await connection.start();
      console.log("SignalR Connected.");
      if (playerId) {
        this.invoke("joinGame", playerId);
      }
    } catch (err) {
      console.log(err);
      setTimeout(this.connect, 5000);
    }
  },
  async invoke(method, payload) {
    try {
      await connection.invoke(method, payload);
    } catch (err) {
      console.error(err);
    }
  },
  on(method, func) {
    connection.on(method, func)
  }  
}