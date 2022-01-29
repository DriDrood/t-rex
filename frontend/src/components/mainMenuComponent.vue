<template>
<div>
  <center>
    <h1>T-rex Multiplayer</h1>
    <pixelBtn btnText="join" v-on:buttonToMenu="onButtonClick"></pixelBtn>
    <pixelBtn btnText="host" v-on:buttonToMenu="onButtonClick"></pixelBtn>
    <div>
      <canvas width="600" height="150"></canvas>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue'

export default {
  name: 'mainMenuComponent',
  data() {
    return {
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
  },
  methods: {
    onButtonClick(value) {
      this.$emit("menuToApp", value)
    }
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