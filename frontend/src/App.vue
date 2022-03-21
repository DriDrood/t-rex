<template>
<div>
  <mainMenu v-if="displayPage=='main'"/>
</div>
</template>

<script>

import mainMenu from "./vue/pages/mainMenu.vue"

export default {
  name: 'App',
  components: {
    mainMenu
  },
  computed: {
    displayPage() {
      return this.$store.state.displayPage;
    }
  }
}
</script>

<style>
</style>
