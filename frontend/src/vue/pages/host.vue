<template>
<div class="page">
  <div class="host-container">
    <h2>HOST</h2>
    <div class="host-input-container">
      <span v-if="err" v-html="errText" class="errText"></span>
      <p>Nickname:</p>
      <input v-model="nickname" type="text" pattern="^[a-zA-Z0-9]+$" placeholder="Your nickname">
    </div>
    <div class="buttons-container">
      <button class="button-primary" @click="changePage('main')">Back</button>
      <button class="button-primary" @click="hostLobby">Enter</button>
    </div>
  </div>
</div>
</template>

<script>
import validations from '../../validations.js';

export default {
  name: 'host',
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
    async hostLobby() {
      let response = await validations.verifyhost(this.nickname, this.lobbyID)
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
.host-container {
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

.host-container h2 {
  font-size: 2.5em;
  padding-bottom: 3rem;
}

.host-container p {
  font-size: .75em;
  text-align: left;
}

.host-input-container {
  display: flex;
  flex-direction: column;
  gap: .75rem;
  max-width: 800px;
  width: 100%;
}

.host-input {
  color: #091A28;
  font-size: .75em;
  border: 3px solid var(--font-color);
}
</style>