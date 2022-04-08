<template>
<themeSwitch/>
  <mainMenu v-if="displayPage=='main'"/>
  <join v-else-if="displayPage=='join'"/>
  <host v-else-if="displayPage=='host'"/>
  <lobby v-else-if="displayPage=='lobby'"/>
  <game v-else-if="displayPage=='game'"/>
</template>

<script>
import { mapState } from 'vuex';

import backend from './backend.js'

import mainMenu from "./vue/pages/mainMenu.vue"
import host from "./vue/pages/host.vue"
import join from "./vue/pages/join.vue"

import lobby from "./vue/pages/lobby.vue"
import game from "./vue/pages/game.vue"

import themeSwitch from './vue/components/themeSwitch.vue';

export default {
  name: 'App',
  components: {
    mainMenu,
    game,
    themeSwitch,
    join,
    host,
    lobby
  },
  computed: {
   ...mapState(['displayPage'])
  },
  async mounted() {
    backend.start();
  }
}
</script>

<style>
</style>
