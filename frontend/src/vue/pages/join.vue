<template>
<div class="row">
  <div class="joinContainer">
    <h2>JOIN</h2>
    <div class="joinInput">
      <span v-if="failId" class="failJoinMessage">Lobby doesn't exist.</span>
      <span v-else-if="failUsername" class="failJoinMessage">This username is already taken.</span>
      <p>nickname:</p>
      <input v-model="nickname" type="text" maxlength="15" placeholder="MrHat">
      <p>lobby id:</p>
      <input v-model="lobbyID" type="number" pattern="\d*" maxlength="6" placeholder="123456">
    </div>
    <div class="joinButtons">
      <button class="joinButton" @click="changePage('main')">Back</button>
      <button class="joinButton" @click="joinLobby">Enter</button>
    </div>
  </div>
</div>
</template>
<script>
import backend from '../../backend.js'

export default {
  name: 'join',
  data: () => ({
    failUsername: false,
    failId: false,
    lobbyID: null,
    nickname: ""
  }),
  methods: {
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    },
    joinLobby() {
      backend.joinLobby(this.nickname, this.lobbyID);
    }
  }
}
</script>
<style>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.joinContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.4rem;
  text-align: center;
  width: 80%;
  max-width: 1000px;
  margin-top: 15vh;
}

.failJoinMessage{
  font-size: .75em;
  color: var(--error-red-color);
  padding: 2rem 0;
}

.joinContainer h2 {
  font-size: 2.5em;
  padding-bottom: 1rem;
}

.joinContainer p {
  font-size: .75em;
  text-align: left;
}

.joinInput {
  gap: .75rem;
  margin-top: 1rem;
  width: 70%;
}

input {
  color: #091A28;
  font-size: .75em;
  width: 100%;
  border: 3px solid var(--font-color);
  margin-bottom: 1rem;
}

.joinButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin-top: 3rem;
}

.joinButton {
  font-size: 1.2em;
  background: var(--button-background-color);
  border-radius: 0;
  border: 5px solid var(--font-color);
  padding: .75em 2em;
}

.joinButton:active {
  transform: translateY(4px);
}

@media screen and (max-width: 640px) {
.joinContainer {
  font-size: 1rem;
  }
.joinButtons {
  flex-direction: column;
  font-size: 1.2rem;
  gap: 3rem;
  }
}
@media screen and (max-width: 430px){
  .joinContainer{
    font-size: .75em;
    width: 90%;
  }
}
</style>