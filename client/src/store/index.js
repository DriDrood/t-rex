import { createStore } from 'vuex'
const url = "http://54.37.72.116:8090"

export default createStore({
  state: {
    user: {
      nickname: '',
      playerId: ''
    },
    lobbyId: '',
    players: null,
    hallOfFame: {
      players: [],
      count: 5
    },
  },
  getters: {
    getHallOfFame: (state) => {
      return state.hallOfFame
    },
  },
  mutations: {
    saveLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId
      state.user.playerId = payload.playerId
    },
    setPlayers: (state, payload) => {
      state.user.playerId = payload.playerId
      state.players = payload.players
    },
    saveHallOfFame: (state, payload) => {
      // use only for action (setHallOfFame)
      state.hallOfFame.players = payload
    }
  },
  actions: {
    async createLobby({ state, commit }) {
      const response = await axios.post(`${url}/api/lobby`, { nickname: state.user.nickname })
      commit('saveLobby', response.data)
    },
    async joinLobby({ state, commit }) {
      const response = await axios.post(`${url}/api/join`, { lobbyId: state.lobbyId, nickname: state.nickname })
      commit('setplayers', response.data)
    },
    async loadHallOfFame({ state, commit }) {
      const response = await axios.post(`${url}/api/hallOfFame`, )
      commit('saveHallOfFame', response.data)
    },
  },
  modules: {
  }
})
