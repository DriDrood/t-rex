<template>
  <input v-model="inputValue" v-on:input="emitInput()">
</template>

<script>

export default {
  name: 'pixelInputComponent',
  data() {
    return {
      inputValue: ""
    }
  },
  props: {
  },
  methods: {
    emitInput() {
      this.$emit("inputToMenu", this.inputValue)
    }
  }
}
</script>

<style scoped>
input {
  background-color: white;
  border-color: black;
  padding: 15px 25px;
  font-family: 'M04_FATAL FURY BLACK', sans-serif;
  font-size: 200%;
}
</style>