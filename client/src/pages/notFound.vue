<template>
<div class="main-404">
  <h1 class="title2-primary title-404">404 Not Found!</h1>
  <img src="/assets/images/404.png" alt="404"/>
  <button @click="this.$router.push('/')" class="btn primary-button">Home</button>
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
.main-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>