<template>
<div class="page">
  <div class="join-container">
    <h2>JOIN</h2>
    <div class="join-input-container">
      <span v-if="err" v-html="errText" class="errText"></span>
      <p>Lobby ID:</p>
      <input v-model="lobbyID" type="text" pattern="[0-9a-f]*" placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6">
      <p>Nickname:</p>
      <input v-model="nickname" type="text" pattern="^[a-zA-Z0-9]+$" placeholder="Your nickname">
    </div>
    <div class="buttons-container">
      <button class="button-primary" @click="changePage('main')">Back</button>
      <button class="button-primary" @click="joinLobby">Enter</button>
    </div>
  </div>
</div>
</template>

<script>
import validations from '../../validations.js';

export default {
  name: 'join',
  data: () => ({
    err: false,
    errText: "",
    lobbyID: null,
    nickname: ""
  }),
  methods: {
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    },
    async joinLobby() {
      let response = await validations.verifyJoin(this.nickname, this.lobbyID)
      if (response.success) {
        this.changePage('lobby');
      } else {
        this.err = true;
        this.errText = response.message;
      }
    }
  }
}
</script>

<style>
.join-container {
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

.join-container h2 {
  font-size: 2.5em;
  padding-bottom: 3rem;
}

.join-container p {
  font-size: .75em;
  text-align: left;
}

.join-input-container {
  display: flex;
  flex-direction: column;
  gap: .75rem;
  max-width: 800px;
  width: 100%;
}

.join-input {
  color: #091A28;
  font-size: .75em;
  border: 3px solid var(--font-color);
}
</style>