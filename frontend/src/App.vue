<template>
<div>
  <themeSwitch/>
  <mainMenu v-if="displayPage=='main'"/>
  <game v-if="displayPage=='game'"/>
</div>
</template>

<script>

import mainMenu from "./vue/pages/mainMenu.vue"
import game from "./vue/pages/game.vue"
import themeSwitch from './vue/components/themeSwitch.vue';

export default {
  name: 'App',
  components: {
    mainMenu,
    game,
    themeSwitch
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
