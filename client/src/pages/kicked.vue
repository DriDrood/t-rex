<template>
<div class="main-kicked">
  <h1 class="title2-primary">You were kicked from the lobby!</h1>
  <button @click="this.$router.push('/')" class="btn primary-button">Return to home</button>
</div>
</template>

<script>

export default {
  name: 'notFound',
  data: () => ({
    message: ''
  }),
}

</script>

<style>
.main-kicked {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>