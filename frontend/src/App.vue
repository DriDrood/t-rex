<template>
<themeSwitch/>
  <lobby v-if="gameId != null" />
  <mainMenu v-else-if="displayPage=='main'"/>
  <join v-else-if="displayPage=='join'"/>
  <host v-else-if="displayPage=='host'"/>
  <game v-else-if="displayPage=='game'"/>
</template>

<script>
import { mapState } from 'vuex';

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
   ...mapState(['displayPage', 'gameId'])
  },
  mounted() {
    this.$store.dispatch('beInit');

    if (window.location.search) {
      var gameId = window.location.search.substring(1)
        .split('&')
        .map(p => p.split('='))
        .find(p => p[0] == 'gameId')?.[1];

      if (gameId)
        this.$store.dispatch('join', { gameId });
    }
  }
}
</script>

<style>
.errText {
  font-size: 0.5em;
  color: red;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
