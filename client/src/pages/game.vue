<template>

<div class="game-main">
  <div id="game" class="game">
    <!-- Objects will be insterted here -->
  </div>
</div>

</template>


<script>
import game from '@/game-src/gameMain.js'

export default {
  name: 'game',
  mounted() {
    game.mountDiv('game');
    game.start();
  }
}

</script>


<style>

.game-main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game {
  width: 600px;
  height: 150px;
  overflow: hidden;
  position: relative;
  border: 1px solid black /* Remove in production */
}

.game-object {
  position: absolute;
}

.game div {
  /* background-color: rgba(255, 0, 0, 0.603); */
}

.game p {
  font-size: 8px;
}

</style>