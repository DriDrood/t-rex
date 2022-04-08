<template>
<div class="row">
  <div class="mainManuContainer">
    <h1>Host</h1>
    <p v-if="err">{{ errText }}</p>
    <p>Nickname: <input v-model="nick"></p>
    <button @click="changePage('main')">Back</button>
    <button @click="joinLobby">Create lobby</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'mainMenu',
  data: () => ({
    err: false,
    errText: "",
    nick: ""
  }),
  methods: {
    joinLobby() {
      // SignalR send nick to server
      // SignalR send lobbyID to server

    },
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    }
  }
}
</script>

<style>
</style>
