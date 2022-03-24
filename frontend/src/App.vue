<template>
  <themeSwitch />
  <mainMenu v-if="displayPage=='main'"/>
  <game v-else-if="displayPage=='game'"/>
</template>

<script>
import { mapState } from 'vuex';
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
    ...mapState(['displayPage'])
  }
}
</script>

<style>
</style>
