import { createStore } from 'vuex'
const url = "http://54.37.72.116:8090"

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
    saveLobby: (state, payload) => {
      state.lobbyId = payload.lobbyId
      state.user.playerId = payload.playerId
    },
    setPlayerNickname (state, payload) {
      state.user.nickname = payload.nickname
    },
    setLobbyId (state, payload) {
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
    async createLobby({ state, commit }, newNickname) {
      try {
        const response = await axios.post(`${url}/api/lobby`, { nickname: state.user.nickname })
        commit('saveLobby', response.data)
        commit('setPlayerNickname', { nickname: newNickname })
        this.$router.push(`/lobby/${state.lobbyId}`)
      }
      catch (error) {
        commit('displayInfo', { text: error.message, type: 'error' })
      }
    },
    async joinLobby({ state, commit }, payload) {
      try {
        const response = await axios.post(`${url}/api/join`, { lobbyId: state.lobbyId, nickname: state.nickname })
        commit('setplayers', response.data)
        commit('setPlayerNickname', payload.nickname)
        commit('setLobbyId', payload.lobbyId)
        this.$router.push(`/lobby/${state.lobbyId}`)
      }
      catch (error) {
        commit('displayInfo', { text: error.message, type: 'error' })
      }
    },
    async loadHallOfFame({ state, commit }) {
      const response = await axios.get(`${url}/api/HallOfFame/getTop`)
      commit('saveHallOfFame', response.data)
    },
  },
  modules: {
  }
})
