const signalR = require("@microsoft/signalr");

export default {
  state: {
    connection: null,
    listeners: new Set(),
    queue: [],
    listenersQueue: [],
  },
  mutations: {
    beCreateConnection: (state) => {
      state.connection = new signalR.HubConnectionBuilder()
        .withUrl("/api/game")
        .build();
    },
    // method, action
    beOn: (state, payload) => {
      // listener already exists -> ignore
      if (state.listeners.has(payload.method))
        return;

      if (state.connection == null) {
        state.listenersQueue.push(payload);
        return;
      }

      state.listeners.add(payload.method);
      state.connection.on(payload.method, payload.action);
    },
    // method, payload
    beEnqueue: (state, payload) => {
      state.queue.push(payload);
    },
  },
  actions: {
    beInit: async (context) => {
      context.commit('beCreateConnection');
      await context.state.connection.start();

      while (context.state.listenersQueue.length) {
        const item = context.state.listenersQueue.pop();
        context.commit('beOn', item);
      }

      while (context.state.queue.length) {
        const item = context.state.queue.pop();
        context.dispatch('beSend', item);
      }
    },
    // method, payload
    beSend: async (context, payload) => {
      if (context.state.connection == null || context.state.connection.state != "Connected") {
        context.commit('beEnqueue', payload);
        return;
      }
      
      if (payload.payload != null)
        await context.state.connection.invoke(payload.method, payload.payload);
      else
        await context.state.connection.invoke(payload.method);
    },
  }
};
