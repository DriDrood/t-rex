<template>
<div class="row">
  <div class="mainManuContainer">
    <h1>Lobby</h1>
    <p>Players: {{ playerList }}</p>
    <button @click="joinLobby">Leave</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'mainMenu',
  data: () => ({
    playerList: [],
  }),
  methods: {
    leave() {

    },
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    }
  }
}
</script>

<style>
</style>
