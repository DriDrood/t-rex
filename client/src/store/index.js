import { createStore } from 'vuex';
import router from "../router";
import axios from '@/axios';
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
      const data = await axios.post(commit, `${url}/api/lobby/create`, { nickname: newNickname });
      commit('afterCreateLobby', { nickname: newNickname, ...data });

      router.push(`/lobby/${state.lobbyId}`);
    },
    async joinLobby({ state, commit }, payload) {
      const data = await axios.post(commit, `${url}/api/lobby/join`, { lobbyId: payload.lobbyId, nickname: payload.nickname });
      commit('afterJoinLobby', { ...payload, ...data });

      router.push(`/lobby/${state.lobbyId}`);
    },
    async startGame() {
      signalR.invoke('startGame');
    },
    async onEntryLobby({ state, commit }) {
      await signalR.connect(state.playerId);
      signalR.on('playerJoined', data => commit('onNewPlayerJoin', data));
      signalR.on('playerLeft', data => commit('onPlayerLeft', data));
      signalR.on('gameStarted', () => router.push('/game'));
      // signalR.on('tick');
      // signalR.on('gameEnded');
    },
    kickPlayer(state, payload) {
      signalR.invoke('kickPlayer', payload);
    },
    async loadHallOfFame({ state, commit }, payload) {
      const data = await axios.get(commit, `${url}/api/HallOfFame/getTop?count=${payload ?? 5}`);
      commit('afterLoadHallOfFame', data);
    },
  },
  modules: {
  }
})
