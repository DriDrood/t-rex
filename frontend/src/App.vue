<template>
  <div>
    <mainMenu v-if="mainMenuVisible" v-on:menuToApp="menuToApp"></mainMenu>
    <joinMenu v-if="joinMenuVisible" v-on:menuToApp="joinToApp"></joinMenu>
  </div>
</template>

<script>

import mainMenuComponent from './components/mainMenuComponent.vue'
import joinMenuComponent from './components/joinMenuComponent.vue'

export default {
  name: 'App',
  components: {
    mainMenu: mainMenuComponent,
    joinMenu: joinMenuComponent
  }, data() {
    return {
      mainMenuVisible: true,
      joinMenuVisible: false,
      hostMenuVisible: false
    }
  }, methods: {
    menuToApp(value) {
      if(value == "join") {
        this.mainMenuVisible = false
        this.hostMenuVisible =  false
        this.joinMenuVisible = true
      }
    },
    joinToApp(value) {
      if(value == "back") {
        this.mainMenuVisible = true
        this.hostMenuVisible =  false
        this.joinMenuVisible = false
      }
    }
  }
}
</script>

<style>

</style>
