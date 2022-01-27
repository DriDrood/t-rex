<template>
  <center>
    <h1>T-rex Multiplayer</h1>
    <pixelBtn>Host</pixelBtn>
    <pixelBtn>Join</pixelBtn>
  </center>
  <canvas></canvas>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue'

export default {
  name: 'mainMenuComponent',
  components: {
    pixelBtn: pixelBtnComponent,
  }
}
</script>

<style scoped>
h1 {
  font-family: 'M04_FATAL FURY BLACK', sans-serif;
  font-size: 300%;
  margin: 100px;
  margin-top: 200px;
}
</style>
