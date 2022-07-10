<template>
  <infoBox/>
  <main>
    <RouterView />
  </main>
</template>

<script>
import infoBox from '@/components/infoBox.vue'

export default {
  name: 'App',
  components: {
    infoBox,
  }
}

</script>

<style lang="scss">
main {
  height: 100vh;
}
</style>
