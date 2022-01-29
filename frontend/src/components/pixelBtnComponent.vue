<template>
  <button @click="emitClick">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'pixelBtnComponent',
  data() {
    return {
    }
  },
  props: {
    btnText: String
  },
  methods: {
    emitClick() {
      this.$emit("buttonToMenu", this.btnText)
    }
  }
}
</script>

<style scoped>
button {
  background-color: white;
  border-color: black;
  padding: 15px 25px;
  font-family: 'M04_FATAL FURY BLACK', sans-serif;
  font-size: 200%;
  margin: 100px;
}

button:active {
  background-color: rgb(167, 167, 167);
  border-color: rgb(53, 53, 53);
  transform: translateY(+5px);
}
</style>