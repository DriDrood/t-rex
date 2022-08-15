import { createStore } from 'vuex';
import router from "../router";
import signalR from '@/signalR';
// const url = "http://54.37.72.116:8090"
const url = "";

export default createStore({
  state: {
    messages: [],
    playerId: null,
    lobbyId: null,
    players: {},
    hallOfFame: {
      players: [],
      count: 5
    },
  },
  getters: {
    me: state => state.players[state.playerId],
  },
  mutations: {
    displayInfo: (state, payload) => {
      state.messages.push(payload);
      setTimeout(() => state.messages.shift(), 5000)
    },
    afterCreateLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId;
      state.playerId = payload.playerId;
      state.players[payload.playerId] = {
        nickname: payload.nickname,
        isMaster: true,
      };
    },
    afterJoinLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId;
      state.playerId = payload.playerId;
      state.players = payload.players;
    },
    afterLoadHallOfFame: (state, payload) => {
      state.hallOfFame.players = payload
    },
    onNewPlayerJoin: (state, payload) => {
      state.players[payload.playerId] = {
        nickname: payload.nickname,
      };
    },
    onPlayerLeft: (state, payload) => {
      if (payload.playerId == state.playerId) {
        router.push('/kicked');
        state.lobbyId = null;
        state.playerId = null;
        state.players = {};
        return;
      }

      delete state.players[payload.playerId];
    },
  },
  actions: {
    async createLobby({ state, commit }, newNickname) {
      try {
        const response = await axios.post(`${url}/api/lobby/create`, { nickname: newNickname });
        commit('afterCreateLobby', { nickname: newNickname, ...response.data });

        router.push(`/lobby/${state.lobbyId}`);
      }
      catch (error) {
        console.warn(error);
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
    async joinLobby({ state, commit }, payload) {
      try {
        const response = await axios.post(`${url}/api/lobby/join`, { lobbyId: payload.lobbyId, nickname: payload.nickname });
        commit('afterJoinLobby', { ...payload, ...response.data });

        router.push(`/lobby/${state.lobbyId}`);
      }
      catch (error) {
        console.warn(error);
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
    async startGame() {
      signalR.invoke('startGame');
    },
    async onEntryLobby({ state, commit }) {
      await signalR.connect(state.playerId);
      signalR.on('playerJoined', data => commit('onNewPlayerJoin', data));
      signalR.on('playerLeft', data => commit('onPlayerLeft', data));
      signalR.on('gameStarted', () => router.push('/game'));
    },
    kickPlayer(state, payload) {
      signalR.invoke('kickPlayer', payload);
    },
    async loadHallOfFame({ state, commit }, payload) {
      try
      {
        const response = await axios.get(`${url}/api/HallOfFame/getTop?count=${payload??5}`);
        commit('afterLoadHallOfFame', response.data);
      }
      catch (error) {
        console.warn(error);
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
  },
  modules: {
  }
})
