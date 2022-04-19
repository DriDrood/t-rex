<template>
<div class="row">
  <div class="mainMenuContainer">
    <h1>T-rex multiplayer</h1>
    <div class="mainMenuButtons">
      <button class="mainButton" @click="changePage('join')">Join</button>
      <button class="mainButton" @click="host">Host</button>
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
.mainMenuContainer {
  font-size: 1.4rem;
  text-align: center;
  width: 80%;
  max-width: 1300px;
  margin-top: 20vh;
}

.mainMenuContainer h1 {
  font-size: 2.5em;
}

.mainMenuButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin: 4rem;
}

.mainButton {
  font-size: 1.2em;
  background: var(--button-background-color);
  border-radius: 0;
  border: 5px solid var(--font-color);
  padding: .75em 2em;
}

.mainButton:active {
  transform: translateY(5px);
}

@media screen and (max-width: 640px) {
.mainMenuContainer {
  font-size: 1rem;
  }
.mainMenuButtons {
  flex-direction: column;
  font-size: 1.2rem;
  gap: 3rem;
  }
}
@media screen and (max-width: 430px){
  .mainMenuContainer{
    font-size: .75em;
    width: 90%;
  }
}
</style>
