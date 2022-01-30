<template>
<div>
  <center>
    <div v-if="setNickPage">
      <h1>PLEASE PICK A NICKNAME</h1>
      <label for="pixelInput" class="label-red" v-if="nickError">Nickname already taken or invalid</label>
      <div>
        <pixelInput maxLength="10" @inputToParent="onInputChange" @submitFromInput="onSubmit"/>
      </div>
      <pixelBtn btnText="HOST" v-if="hostMode" @buttonToParent="onSubmit"/>
      <pixelBtn btnText="JOIN" v-else @buttonToParent="onSubmit"/>
    </div>
    <div v-if="lobbyMenu">
      <h1>LOBBY</h1>
      <playerList :hostMode="hostMode" :players="players"/>
      <pixelBtn btnText="START" v-if="hostMode" @buttonToParent="onButtonClick"/>
      <pixelBtn btnText="LEAVE" v-else @buttonToParent="onButtonClick"/>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue';
import pixelInputComponent from './pixelInputComponent.vue';
import playerListComponent from './playerListComponent.vue';
import sound from '../sound.js';

function verifyNickAvailability(nick) {
  // Verify if nick name isn't already taken.
  if(nick) {
    return true
  } else {
    return false
  }
}

export default {
  name: 'lobbyComponent',
  data() {
    return {
      setNickPage: true,
      lobbyMenu: false,
      nickName: "",
      nickError: false,
      players: ["Dumba", "HonzaKubita", "Lucijaa", "manLuke", "jakubwj2", "Johy", "Fukl", "Petr Watson-Jones", "Petr Watson-Jones", "Petr Watson-Jones"]
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
    pixelInput: pixelInputComponent,
    playerList: playerListComponent
  },
  props: {
    hostMode: Boolean
  },
  methods: {
    onButtonClick(value) {
      sound.play("button");
      if(value == "START" && this.hostMode == true) {
        // Start game
      } else if(value == "LEAVE" && this.hostMode == false) {
        // Leave game
      }
    },
    onInputChange(value) {
      this.nickName = value;
    },
    onSubmit() {
      sound.play("button");
      if(verifyNickAvailability(this.nickName)) {
        this.setNickPage = false;
        this.lobbyMenu = true;
      } else {
        this.nickError = true;
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 300%;
  margin: 100px;
  margin-top: 200px;
}

.label-red {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 100%;
  color: red;
}
</style>