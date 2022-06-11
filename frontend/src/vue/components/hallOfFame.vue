<template>
  <p>Hall of Fame</p>
  <div class="hallOfFame-container">
    <div class="hallOfFame-names">
      <p v-for="(player, index) in hallOfFame" class="hallOfFame-text">{{ index+1 }}.{{ player.nickname }}: {{ player.score }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'hallOfFame',
  computed: {
    ...mapState(['hallOfFame'])
  },
  mounted() {
    this.$store.dispatch('loadHallOfFame');
  }
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
.hallOfFame-scores {
  text-align: right;
}
.hallOfFame-text{
  margin: 2px 10px;
}
</style>