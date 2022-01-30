<template>
<div>
  <center>
    <h1>ENTER LOBBY CODE</h1>
    <form @submit="onSubmit">
      <label for="pixelInput" class="label-red" v-if="codeInvalid">Invalid lobby code</label>
      <div>
        <pixelInput type="number" @inputToParent="onInputChange" @submitFromInput="onSubmit"/>
      </div>
      <label for="pixelInput" class="label-normal" v-if="passwordInput">Enter password</label>
      <div>
        <pixelInput type="password" v-if="passwordInput" @inputToParent="onPassowrdInputChange" @submitFromInput="onSubmit"/>
      </div>
    </form>
    <div>
      <pixelBtn btnText="BACK" @buttonToParent="onButtonClick"/>
      <pixelBtn btnText="JOIN" @buttonToParent="onSubmit"/>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue';
import pixelInputComponent from './pixelInputComponent.vue';
import sound from '../sound.js';

function verifyLobbyCode(code) {
  if(code == "1234" || code == "789") {
    return true;
  } else {
    return false;
  }
}

function isPrivateLobby(code) {
  if(code == "789") {
    return true
  } else {
    return false
  }
}

export default {
  name: 'joinMenuComponent',
  data() {
    return {
      codeInvalid: false,
      passwordInput: false,
      lobbyCode: "",
      lobbyPassword: ""
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
    pixelInput: pixelInputComponent
  }, methods: {
    onButtonClick(value) {
      sound.play("button");
      this.$emit("menuToApp", value);
    },
    onInputChange(value) {
      this.lobbyCode = value;
      this.codeInvalid = false;
      this.passwordInput = false;
    },
    onPassowrdInputChange(value) {
      this.lobbyPassword = value;
    },
    onSubmit(event) {
      event?.preventDefault?.()
      console.log("Form submitted")
      sound.play("button");
      if(verifyLobbyCode(this.lobbyCode)) {
        this.codeInvalid = false;
        if(isPrivateLobby(this.lobbyCode)) {
          this.passwordInput = true
        } else {
          this.$emit("menuToApp", "lobby");
        }
      } else {
        this.codeInvalid = true;
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
.label-normal {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 100%;
  margin: 10px;
}
</style>