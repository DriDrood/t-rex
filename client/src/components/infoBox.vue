<template>

<div class="info-box-main">
  <div v-for="message in messages" class="info-box" :class="{ 'info-info': message.type == 'info', 'info-success': message.type == 'success', 'info-warning': message.type == 'warn', 'info-error': message.type == 'error'}">
    <p>{{ message.text }}</p>
  </div>
</div>

</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'infoBox',
  computed: {
    ...mapState(['messages']),
  },
}

</script>


<style>

.info-box-main {
  width: 100%;
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 5px;
  background-color: white;
}

.info-info {
  color: black;
  border: 4px solid black;
}

.info-success {
  color: green;
  border: 4px solid green;
}

.info-warning {
  color: orange;
  border: 4px solid orange;
}

.info-error {
  color: red;
  border: 4px solid red;
}


</style>