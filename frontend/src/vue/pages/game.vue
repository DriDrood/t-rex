<template>
<div>
  <canvas id="gameCanvas" class="game-canvas"></canvas>
</div>
</template>

<script>

import gameScript from "../../gameScript.js"

export default {
  name: 'game',
  data: () => ({
    c: null 
  }),
  mounted() {
    this.canvas = document.getElementById("gameCanvas").getContext("2d");
    gameScript.game.run(this.canvas)
  }
}
</script>

<style>
.game-canvas {
  width: 600px;
  height: 150px;
  border:2px solid black;
}
</style>
