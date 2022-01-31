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
    id: String,
    btnText: String
  },
  methods: {
    emitClick() {
      this.$emit("buttonToParent", this.id);
    }
  }
}
</script>

<style scoped>
button {
  background-color: white;
  border-color: black;
  padding: 15px 25px;
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 200%;
  margin: 100px;
}

button:active {
  background-color: rgb(167, 167, 167);
  border-color: rgb(53, 53, 53);
  transform: translateY(+5px);
}
</style>