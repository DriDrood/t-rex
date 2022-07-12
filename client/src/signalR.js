// SignalR
const connection = new signalR.HubConnectionBuilder()
  .withUrl("/api/game")
  .build();

export default {
  async connect() {
    try {
      await connection.start();
      console.log("SignalR Connected.");
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