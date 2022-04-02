<template>
<themeSwitch/>
  <mainMenu v-if="displayPage=='main'"/>
  <join v-else-if="displayPage=='join'"/>
  <game v-else-if="displayPage=='game'"/>
</template>

<script>
import { mapState } from 'vuex';
import mainMenu from "./vue/pages/mainMenu.vue"
import join from "./vue/pages/join.vue"
import game from "./vue/pages/game.vue"
import themeSwitch from './vue/components/themeSwitch.vue';

export default {
  name: 'App',
  components: {
    mainMenu,
    game,
    themeSwitch,
    join
  },
  computed: {
    ...mapState(['displayPage'])
  }
}
</script>

<style>
</style>
