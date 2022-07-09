<template>

<div class="main-main">

  <h1 class="main-title">T-rex Multiplayer</h1>

  <div class="main-buttons">
    <button @click="changePage('join')" class="primary-button">Join</button>
    <button @click="changePage('host')" class="primary-button">Host</button>
  </div>
</div>
 
</template>

<script>

export default {
  name: 'mainMenu',
  methods: {
    changePage(newPage) {
      this.$router.push(`/${newPage}`);
    }
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