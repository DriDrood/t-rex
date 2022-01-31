export default {
  verifylobbyID(id) {
    if(id == "1234" || id == "789") {
      return true;
    } else {
      return false;
    }
  },

  isPrivateLobby(id) {
    if(id == "789") {
      return true
    } else {
      return false
    }
  },

  verifyNickAvailability(nick, lobbyID) {
  // Verify if nick name isn't already taken.
    if(nick && lobbyID) {
      return true;
    } else {
      return false;
    }
  },

  getlobbyID() {
    var lobbyID = Math.floor(Math.random() * 1000001);
    return lobbyID;
  }
}
