import { createStore } from 'vuex'
import router from "../router"
import signalR from '@/signalR';
// const url = "http://54.37.72.116:8090"
const url = "";

export default createStore({
  state: {
    messages: [],
    user: {
      nickname: '',
      playerId: ''
    },
    lobbyId: '',
    players: [],
    hallOfFame: {
      players: [],
      count: 5
    },
  },
  getters: {
    getHallOfFame: (state) => {
      return state.hallOfFame
    },
    isMaster: (state) => {
      return state.players.find(player => player.isMaster)?.nickname == state.user.nickname
    }
  },
  mutations: {
    displayInfo: (state, payload) => {
      state.messages.push(payload);
      setTimeout(() => {
        state.messages.shift();
      }, 5000)
    },
    afterCreateLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId;
      state.user.playerId = payload.playerId;
      state.user.nickname = payload.nickname;
      state.players = [{ nickname: payload.nickname, isMaster: true }];
    },
    afterJoinLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId
      state.user.nickname = payload.nickname
      state.user.playerId = payload.playerId
      state.players = payload.players
    },
    saveHallOfFame: (state, payload) => {
      // use only for action (setHallOfFame)
      state.hallOfFame.players = payload
    }
  },
  actions: {
    async createLobby({ state, commit }, newNickname) {
      try {
        const response = await axios.post(`${url}/api/lobby/create`, { nickname: newNickname })
        commit('afterCreateLobby', { nickname: newNickname, ...response.data });
        router.push(`/lobby/${state.lobbyId}`);
        await signalR.connect();
      }
      catch (error) {
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
    async joinLobby({ state, commit }, payload) {
      try {
        const response = await axios.post(`${url}/api/lobby/join`, { lobbyId: payload.lobbyId, nickname: payload.nickname });
        commit('afterJoinLobby', { lobbyId: payload.lobbyId, nickname: payload.nickname, ...response.data });
        router.push(`/lobby/${state.lobbyId}`);
        await signalR.connect();
      }
      catch (error) {
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
    async loadHallOfFame({ state, commit }, payload) {
      try
      {
        const response = await axios.get(`${url}/api/HallOfFame/getTop?count=${payload??5}`);
        commit('saveHallOfFame', response.data);
      }
      catch (error) {
        commit('displayInfo', { text: error.response.data, type: 'error' });
      }
    },
  },
  modules: {
  }
})
