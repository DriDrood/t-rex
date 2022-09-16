<template>
<div class="main-404">
  <h1 class="title-404">404 Not Found!</h1>
  <img src="/assets/images/404.png" alt="404"/>
  <button @click="this.$router.push('/')" class="btn primary-button">Home</button>
</div>
</template>

<script>

export default {
  name: 'notFound',
}

</script>

<style>
.main-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-404 {
  font-size: 60px;
  margin: 50px;
}

/* Mobile/Tablet support */

@media screen and (max-width: 500px) {
  .main-404 img {
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  .title-404 {
    font-size: 13vw;
  }
}
</style>