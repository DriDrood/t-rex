<template>
  <input :type="type" :maxlength="maxLength" v-model="inputValue" @input="emitInput" @keyup.enter="inputSubmit">
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
    id: String,
    type: String,
    maxLength: Number,
  },
  methods: {
    emitInput() {
      this.$emit("inputToParent", [this.id, this.inputValue]);
    },
    inputSubmit() {
      this.$emit("submitFromInput", true);
    }
  }
}
</script>

<style scoped>
input {
  background-color: white;
  border-color: black;
  padding: 15px 25px;
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 200%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>