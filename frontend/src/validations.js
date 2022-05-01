import store from "./store/index.js";

const verifyNick = (nickname) => {
  if (nickname.length < 3) {
    return {sucess: false, message: 'Nickname must be at least 3 characters long'};
  } else if (nickname.length > 10) {
    return {sucess: false, message: 'Nickname cannot be longer than 10 characters'};
  } else if (!/^[a-zA-Z0-9]+$/.test(nickname)) {
    return {sucess: false, message: 'Nickname can only contain letters and numbers'};
  } else {
    return {sucess: true, message: ''};
  }
}

const verifyLobbyID = async (lobbyID, nickname) => {
  if (lobbyID == null) {
    return {success: false, message: 'Lobby ID is required'};
  } else {
    store.dispatch('join', { gameId: lobbyID, nickname });
    return new Promise((resolve, reject) => {
      context.commit('beOn', { method: 'joined', action: data => resolve(data) });
    });
  }
}

const verifyJoin = async (nickname, lobbyID) => {
  let nick = verifyNick(nickname);
  let lobby = await verifyLobbyID(lobbyID);

  if (nick.success && lobby.success) {
    return {success: true, message: ''};
  } else {
    return {success: false, message: `${nick.message} <br> ${lobby.message}`};
  }
}

export default {
  verifyNick,
  verifyLobbyID,
  verifyJoin,
}