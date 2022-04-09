<template>
<div class="row">
  <div class="hostContainer">
    <h1>Host</h1>
    <p v-if="err" class="errText">{{ errText }}</p>
    <p>Nickname: <input v-model="nickname"></p>
    <button @click="changePage('main')">Back</button>
    <button @click="createLobby">Create lobby</button>
  </div>
</div>
</template>

<script>
import backend from '../../backend.js'
import validations from '../../validations.js'

export default {
  name: 'mainMenu',
  data: () => ({
    err: false,
    errText: "",
    nickname: ""
  }),
  methods: {
    createLobby() {
      this.err = false;
      let payload = validations.verifyNick(this.nickname);
      if (!payload.success) {
        this.err = true;
        this.errText = payload.message;
        return;
      } else {    
        backend.createLobby(this.nickname);
      }
    },
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    }
  }
}
</script>

<style>
.hostContainer {
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
</style>
