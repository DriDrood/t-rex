<template>
<div class="main-404">
  <h1 class="title2-primary title-404">404 Not found</h1>
  <img src="/assets/images/404.png" alt="404"/>
  <button @click="this.$router.push('/')" class="btn primary-button">Home</button>
</div>
</template>

<script>
</script>

<style>
.main-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title-404 {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }   
}
</style>