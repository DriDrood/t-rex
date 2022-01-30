<template>
<div>
  <center>
    <h1>T-REX MULTIPLAYER</h1>
    <pixelBtn btnText="JOIN" v-on:buttonToParent="onButtonClick"/>
    <pixelBtn btnText="HOST" v-on:buttonToParent="onButtonClick"/>
    <div>
      <canvas width="600" height="150"></canvas>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue';
import sound from '../sound.js';

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
      sound.play("button");
      this.$emit("menuToApp", value);
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 300%;
  margin: 100px;
  margin-top: 200px;
}
</style>