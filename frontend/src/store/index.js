import { createStore } from 'vuex'
import backend from './backend'

export default createStore({
  state: {
    displayPage: "main",
    theme: "light",
    gameId: null,
    playerId: null,
    players: {},
    hallOfFame: [{name: "Dumba", score: 4513}, {name: "Fukl", score: 3238}, {name: "Kuba", score: 2314}, {name: "Tomas", score: 456}, {name: "Honza", score: 404}]
  },
  mutations: {
    changeDisplayPage(state, newPage) {
      state.displayPage = newPage;
    },
    switchTheme(state, newTheme) {
      state.theme = newTheme;
      document.documentElement.setAttribute('theme', newTheme);
    },
    // gameId, playerId, nickname
    gameCreated(state, payload) {
      state.gameId = payload.gameId;
      state.playerId = payload.playerId;
      state.players[payload.playerId] = { nickname: payload.nickname };
    },
    // id, nickname
    playerRenamed(state, payload) {
      console.warn(payload, state.players);
      state.players[payload.id].nickname = payload.nickname;
    },
    // id, nickname
    playerJoined(state, payload) {
      state.players[payload.id] = { nickname: payload.nickname };
    },
    playerLeft(state, payload) {
      // it is me!
      if (payload == state.playerId) {
        state.gameId = null;
        state.playerId = null;
        state.players = {};
        return;
      }

      delete state.players[payload];
    },
    // gameId, playerId, players
    joined(state, payload) {
      state.players = payload.players;
      state.playerId = payload.playerId;
      state.gameId = payload.gameId;
    }
  },
  actions: {
    host: (context) => {
      context.commit('beOn', { method: 'gameCreated', action: data => context.commit('gameCreated', data) });
      context.dispatch('listenLobby');
      context.dispatch('beSend', { method: 'createGame' });
    },
    // gameId
    join: (context, payload) => {
      context.commit('beOn', { method: 'joined', action: data => context.commit('joined', { ...data, gameId: payload.gameId }) });
      context.dispatch('listenLobby');
      context.dispatch('beSend', { method: 'joinGame', payload: payload.gameId });
    },
    leave: (context) => {
      context.dispatch('beSend', { method: 'leaveGame' });
    },
    // nickname
    setNickname: (context, payload) => {
      context.dispatch('beSend', { method: 'setNickname', payload: payload.nickname });
    },
    loadHallOfFame: (context) => {
      context.dispatch('beSend', { method: 'getHallOfFame' });
    },
    listenLobby: (context) => {
      context.commit('beOn', { method: 'playerRenamed', action: data => context.commit('playerRenamed', data) });
      context.commit('beOn', { method: 'playerJoined', action: data => context.commit('playerJoined', data) });
      context.commit('beOn', { method: 'playerLeft', action: data => context.commit('playerLeft', data) });
    },
  },
  modules: {
    backend,
  },
})
