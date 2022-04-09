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

const verifyLobbyID = (lobbyID) => {
  if (lobbyID == null) {
    return {success: false, message: 'Lobby ID is required'};
  } else {
    return {success: true, message: ''}
  }
}

const verifyJoin = (nickname, lobbyID) => {
  let nick = verifyNick(nickname);
  let lobby = verifyLobbyID(lobbyID);

  if (nick.success && lobby.success) {
    return {success: true, message: ''};
  } else {
    return {success: false, message: nick.message + ' ' + lobby.message};
  }
}

export default {
  verifyNick,
  verifyLobbyID,
  verifyJoin,
}