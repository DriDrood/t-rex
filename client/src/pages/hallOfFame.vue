<template>

<div class="hall-page-main">

  <div class="hall-page-header">
    <button @click="this.$router.push('/')" class="btn primary-button">Back</button>
    <h2 class="title2-primary">Hall Of Fame</h2>
  </div>

  <div class="hall-page-scoreboard">
    <div v-for="(player, index) in highScores" :key="index" class="hall-page-score">
      <p>{{ index + 1 }}.{{ player.nickname }}</p>
      <p>{{ player.score }}</p>
    </div>
  </div>

</div>


</template>


<script>

export default {
  name: "hallOfFamePage",
  computed: {
    highScores() {
      return this.$store.state.hallOfFame.players
    }
  },
  mounted() {
    this.$store.dispatch("loadHallOfFame", 100)
  }
}

</script>


<style lang="scss">

.hall-page-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hall-page-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  
  h2 {
    text-align: center;
  }
  button {
    margin: auto auto auto 30px;
  }
}

.hall-page-scoreboard {
  border: 4px solid black;
  width: 50%;
}
.hall-page-score {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (max-width: 900px) {
  .hall-page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button {
      margin: 15px;
    }
  }
}

@media screen and (max-width: 500px) {
  .hall-page-scoreboard {
    width: 80%;
  }
}

</style>