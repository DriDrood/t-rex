<template>
<div class="kicked-main">
  <h1 class="kicked-title">You were kicked from the lobby!</h1>
  <button @click="this.$router.push('/')" class="btn primary-button">Return to home</button>
</div>
</template>

<script>

export default {
  name: 'kicked',
}

</script>

<style>
.kicked-main {
  height: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Mobile/Tablet support */


</style>