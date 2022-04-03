<template>
<div id="canvasContainer" class="game-canvas-container game-canvas-day">
  <canvas id="gameCanvas" class="game-canvas" width="600" height="150"></canvas>
</div>
</template>

<script>

import { game } from "../../game/gameScript.js"

export default {
  name: 'game',
  data: () => ({
    c: null 
  }),
  mounted() {
    let canvas = document.getElementById("gameCanvas").getContext("2d");
    game.run(canvas);
  }
}
</script>

<style>
.game-canvas {
  border:2px solid black;
}

.game-canvas-container {
  display: grid;
  place-items: center;
  
}

.game-canvas-day {
  background-color: rgb(255, 255, 255);
}
.game-canvas-night {

}

</style>
