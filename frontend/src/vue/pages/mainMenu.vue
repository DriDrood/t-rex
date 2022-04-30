<template>
<div class="page">
  <div class="main-menu-container">
    <h1>T-rex multiplayer</h1>
    <div class="buttons-container">
      <button class="button-primary" @click="changePage('join')">Join</button>
      <button class="button-primary" @click="host">Host</button>
    </div>
  </div>
  <hallOfFame/>
</div>
</template>

<script>
import hallOfFame from '../components/hallOfFame.vue';

export default {
  name: 'mainMenu',
  components: {
    hallOfFame
  },
  methods: {
    changePage(newPage) {
      this.$store.commit("changeDisplayPage", newPage);
    },
    host() {
      this.$store.dispatch('host');
    }
  }
}
</script>

<style>
.main-menu-container {
  font-size: 1.4rem;
  text-align: center;
  width: 80%;
  max-width: 1300px;
  margin-top: 20vh;
}

.main-menu-container h1 {
  font-size: 2.5em;
}
</style>
