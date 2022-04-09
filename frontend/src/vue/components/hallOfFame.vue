<template>
  <p>Hall of Fame</p>
  <div class="hallOfFame-container">
    <div class="hallOfFame-names">
      <p v-for="(player, index) in hallData" class="hallOfFame-text">{{ index+1 }}.{{ player.name }}</p>
    </div>
    <div class="hallOfFame-scores">
      <p v-for="player in hallData" class="hallOfFame-text">{{ player.score }}m</p>
    </div>
  </div>
</template>

<script>
import backend from '../../backend.js'

export default {
  name: 'hallOfFame',
  computed: {
    hallData() {
      return backend.getHallOfFameData();
    }
  },
}
</script>

<style>
.hallOfFame-container {
  display: flex;
  flex-direction: row;
  border: solid 2px var(--font-color);
  height: fit-content;
}
.hallOfFame-names .hallOfFame-scores {
  margin: 30px;
  display: flex;
  flex-direction: column;
}
.hallOfFame-text{
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
}
</style>