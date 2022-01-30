<template>
  <div>
    <mainMenu v-if="visiblePage=='main'" @menuToApp="menuToApp"/>
    <joinMenu v-if="visiblePage=='join'" @menuToApp="joinToApp"/>
    <lobby :hostMode="false" v-if="visiblePage=='lobby'"/>
    <lobby :hostMode="true" v-if="visiblePage=='hostLobby'"/>
  </div>
</template>

<script>

import mainMenuComponent from './components/mainMenuComponent.vue'
import joinMenuComponent from './components/joinMenuComponent.vue'
import lobbyComponent from './components/lobbyComponent.vue'

export default {
  name: 'App',
  components: {
    mainMenu: mainMenuComponent,
    joinMenu: joinMenuComponent,
    lobby: lobbyComponent
  }, data() {
    return {
      visiblePage: "main"
    }
  }, methods: {
    menuToApp(value) {
      if(value == "JOIN") {
        this.visiblePage = "join"
      } else if (value == "HOST") {
        this.visiblePage = "hostLobby"
      }
    },
    joinToApp(value) {
      if(value == "BACK") {
        this.visiblePage = "main"
      } else if (value == "lobby") {
        this.visiblePage = "lobby"
      }
    },
  }
}

</script>

<style>

</style>