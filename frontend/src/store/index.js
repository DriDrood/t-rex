import { createStore } from 'vuex'
import backend from './backend'

export default createStore({
  state: {
    displayPage: "main",
    theme: "light",
    errCount: 0,
    errors: [],
    gameID: null,
    playerId: null,
    masterId: null,
    players: {},
    hallOfFame: [],
  },
  mutations: {
    changeDisplayPage(state, newPage) {
      state.displayPage = newPage;
    },
    raiseError(state, payload) {
      state.errors.push({code: payload.code, message: payload.message + state.errCount});
      state.errCount++;
      setTimeout(() => state.errors.shift(), 5000);
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
      state.players[payload.id] = { nickname: payload.nickname, master: payload.master };
    },
    // playerId, masterId
    playerLeft(state, payload) {
      // it is me!
      if (payload.playerId == state.playerId) {
        state.gameId = null;
        state.playerId = null;
        state.players = {};
        return;
      }

      delete state.players[payload.playerId];
      state.masterId = payload.masterId;
    },
    // gameId, playerId, players
    joined(state, payload) {
      state.players = payload.players;
      state.playerId = payload.playerId;
      state.gameId = payload.gameId;
    },
    startGame(state) {
      state.displayPage = "game";
    },
    hallOfFame(state, payload) {
      state.hallOfFame = payload;
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
      context.commit('beOn', { method: 'hallOfFame', action: data => context.commit('hallOfFame', data)})
      context.dispatch('beSend', { method: 'getHallOfFame' });
    },
    listenLobby: (context) => {
      context.commit('beOn', { method: 'playerRenamed', action: data => context.commit('playerRenamed', data) });
      context.commit('beOn', { method: 'playerJoined', action: data => context.commit('playerJoined', data) });
      context.commit('beOn', { method: 'playerLeft', action: data => context.commit('playerLeft', data) });
      context.commit('beOn', { method: 'startGame', action: data => context.commit('startGame') });
    },
  },
  modules: {
    backend,
  },
})
