<template>
<div>
  <center>
    <h1>T-REX MULTIPLAYER</h1>
    <pixelBtn btnText="JOIN" id="join" v-on:buttonToParent="onButtonClick"/>
    <pixelBtn btnText="HOST" id="host" v-on:buttonToParent="onButtonClick"/>
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
      this.$emit("childToParent", ["mainMenu", value]);
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