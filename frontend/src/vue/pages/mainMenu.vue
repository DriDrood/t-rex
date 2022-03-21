<template>
<div>
  <h1>T-rex multiplayer</h1>
  <div>
    <button @click="changePage('join')">Join</button>
    <button @click="changePage('host')">Host</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'mainMenu',
  methods: {
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    }
  }
}
</script>

<style>
</style>
