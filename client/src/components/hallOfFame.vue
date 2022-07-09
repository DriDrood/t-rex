<template>

<div class="hall-main">
  <h4>Hall of fame</h4>
  <br>
  <div>
    <p v-if="!highScores">Loading...</p>
    <div v-else v-for="(player, index) in highScores" class="hall-score">
      <p>{{ index + 1 }}.{{ player.Name }}</p>
      <p>{{ player.Score }}</p>
    </div>
  </div>
  <button @click="this.$router.push('/halloffame')" class="hall-button">Show more</button>
</div>

</template>


<script>

export default {
  name: "hallOfFame",
  computed: {
    highScores() {
      return [{ Name: "Dumba", Score: "2048"}, { Name: "ManLuke", Score: "512"}, { Name: "Honza", Score: "404"}, { Name: "I have a long name :D :)", Score: "300"}]
    }
  }
}

</script>


<style lang="scss">

.hall-main {
  margin: 30px;
  padding: 10px;
  border: 4px solid black;
  text-align: center;
}

.hall-score {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hall-button {
  background: transparent;
  border: 3px solid black;
  padding: 5px;
  margin: 10px;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(189, 189, 189, 0.897);
  }
}

</style>