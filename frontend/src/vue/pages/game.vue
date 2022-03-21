<template>
<div>
  <canvas id="gameCanvas" class="game-canvas"></canvas>
</div>
</template>

<script>

import gameScript from "../../gameScript.js"

// gameScript.game.run();

export default {
  name: 'game',
}
</script>

<style>
.game-canvas {
  width: 600px;
  height: 150px;
  border:2px solid black;
}
</style>
