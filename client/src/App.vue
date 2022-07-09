<template>
<errorBox/>
<themeSwitch/>
<mainMenu v-if="displayPage=='main'"/>
<join v-else-if="displayPage=='join'"/>
<host v-else-if="displayPage=='host'"/>
<lobby v-else-if="displayPage=='lobby'" />
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
import errorBox from './vue/components/errorBox.vue';

export default {
  name: 'App',
  components: {
    errorBox,
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
  methods: {
    displayError() {
      this.$store.commit("raiseError", {code: "error", message: "error message"});
    }
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

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-primary {
  font-size: 1.2em;
  background: var(--button-background-color);
  border-radius: 0;
  border: 5px solid var(--font-color);
  padding: 0.75em 2em;
  margin: 0.5em;
}

.button-primary:active {
  transform: translateY(4px);
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin: 3rem 0;
}
</style>
