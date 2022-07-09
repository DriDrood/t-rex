<template>

<div class="main-main">

  <h1 class="main-title">T-rex Multiplayer</h1>

  <div class="main-buttons">
    <button @click="this.$router.push('/join')" class="primary-button">Join</button>
    <button @click="this.$router.push('/host')" class="primary-button">Host</button>
  </div>

  <hallOfFame/>

</div>
 
</template>

<script>
import hallOfFame from '@/components/hallOfFame.vue'

export default {
  name: 'mainMenu',
  components: {
    hallOfFame
  }
}

</script>


<style lang="scss">

.main-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
}

.main-title {
  font-size: 80px;
  margin: 50px;
}

.main-buttons {
  display: flex;
  gap: 100px;
}

</style>