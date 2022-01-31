<template>
  <div>
    <mainMenu v-if="visiblePage=='main'" @childToParent="childToParent"/>
    <joinMenu v-if="visiblePage=='join'" :hostMode="hostMode" @childToParent="childToParent"/>
    <lobby v-if="visiblePage=='lobby'" :hostMode="hostMode" :lobbyID="lobbyID" @childToParent="childToParent"/>
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
    lobby: lobbyComponent,
  }, data() {
    return {
      visiblePage: "main",
      hostMode: false,
      lobbyID: ""
    }
  }, methods: {
    childToParent(data) {
      var child = data[0];
      var value = data[1];
      var additionalData = data[2]
      if(child == "mainMenu") {
        if(value == "join") {
          this.hostMode = false;
          this.visiblePage = "join";
        } else if (value == "host") {
          this.hostMode = true;
          this.visiblePage = "join";
        }
      } else if(child == "joinMenu") {
        if(value == "main") {
          this.visiblePage = "main";
        } else if (value == "lobby") {
          this.lobbyID = additionalData;
          this.visiblePage = "lobby";
        }
      } else if(child == "lobby") {
        if(value == "main"){
          this.visiblePage = "main";
        }
      }
    },
  }
}

</script>

<style>

</style>