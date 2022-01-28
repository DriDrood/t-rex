<template>
    <div>
        <input>
    </div>
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
    emitClick() {
      this.$emit("buttonToMenu", this.btnText)
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