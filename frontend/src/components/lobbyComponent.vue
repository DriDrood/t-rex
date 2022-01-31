<template>
<div>
  <center>
    <h1>LOBBY</h1>
    <pixelBtn :btnText="lobbyID" @buttonToParent="copylobbyID(lobbyID)"></pixelBtn>
    <div class="player-list-container">
      <playerList :hostMode="hostMode" :players="players"/>
    </div>
    <pixelBtn btnText="LEAVE" id="leaveLobby" @buttonToParent="onButtonClick"/>
    <pixelBtn btnText="START" id="startLobby" @buttonToParent="onButtonClick"/>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue';
import playerListComponent from './playerListComponent.vue';
import sound from '../sound.js';

export default {
  name: 'lobbyComponent',
  data() {
    return {
      nickName: "",
      nickError: false,
      players: ["Dumba", "HonzaKubita", "Lucijaa", "manLuke", "jakubwj2", "Johy", "Fukl", "Petr Watson-Jones", "Petr Watson-Jones", "Petr Watson-Jones"]
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
    playerList: playerListComponent
  },
  props: {
    hostMode: Boolean,
    lobbyID: String
  },
  methods: {
    onButtonClick(value) {
      sound.play("button");
      if(value == "startLobby" && this.hostMode == true) {
        // Start game
      } else if(value == "leaveLobby") {
        // Leave lobby
        console.log("left lobby")
        this.$emit("childToParent", ["lobby", "main"])
      }
    },
    copylobbyID(str) { // tohle vubec nevim co dela ale ve vysledku to da str parametr do copypaste
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px'};
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 300%;
  margin: 10px;
  margin-top: 50px;
}

button {
  background-color: white;
  border-color: black;
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 200%;
  margin: 10px;
}

.label-red {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 100%;
  color: red;
}

.player-list-container {
  margin: 50px;
}
</style>