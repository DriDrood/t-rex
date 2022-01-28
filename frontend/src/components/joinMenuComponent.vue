<template>
<div>
  <center>
    <h1>Enter lobby code</h1>
    <div>
      <label for="pixelInput" v-if="codeInvalid">Invalid lobby code</label>
      <pixelInput></pixelInput>
      <pixelBtn btnText="back" v-on:buttonToMenu="onButtonClick"></pixelBtn>
      <pixelBtn btnText="join" v-on:buttonToMenu="onSubmit"></pixelBtn>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue'
import pixelInputComponent from './pixelInputComponent.vue'

export default {
  name: 'joinMenuComponent',
  data() {
    return {
      codeInvalid: false
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
    pixelInput: pixelInputComponent
  }, methods: {
    onButtonClick(value) {
      this.$emit("menuToApp", value)
    },
    onSubmit() {
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
label {
  font-family: 'M04_FATAL FURY BLACK', sans-serif;
  font-size: 100%;
  text-align: left;
  color: red;
}
</style>