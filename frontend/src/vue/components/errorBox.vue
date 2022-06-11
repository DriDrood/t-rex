<template>
<div class="error-container">
  <div v-for="error in errors" class="error-box">{{ error.message }}</div>
</div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'errorBox',
  computed: {
    ...mapState(['errors'])
  }
}

</script>

<style>

.error-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.error-box {
  display: flex ;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  width: fit-content;
  margin-top: 10px;
  padding: 10px;
  border: 5px solid rgb(255, 0, 0, 0.5);
  background-color: rgb(255, 0, 0, 0.3);
  opacity: 1;
  animation: show-error-box 5s ease;
}

@keyframes show-error-box {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

</style>