<template>
<div>
  <center>
    <div v-if="formStage=='1' && !hostMode">
      <h1>ENTER LOBBY ID</h1>
      <label v-if="lobbyIDError" class="label-error">Invalid lobby ID</label>
      <div>
        <pixelInput id="lobbyID" type="number" @inputToParent="onInputChange" @submitFromInput="onSubmit"/>
      </div>
      <pixelBtn btnText="BACK" id="joinBACK" @buttonToParent="onButtonClick"/>
      <pixelBtn btnText="JOIN" id="joinJOIN" @buttonToParent="onSubmit"/>
    </div>
    <div v-if="formStage=='2' || hostMode">
      <h1>PICK YOUR NICKNAME</h1>
      <label v-if="nickError" class="label-error">Nickname is already taken or invalid</label>
      <div>
        <pixelInput id="nickName" maxLength="10" @inputToParent="onInputChange" @submitFromInput="onSubmit"/>
      </div>
      <pixelBtn btnText="BACK" id="joinBACK" @buttonToParent="onButtonClick"/>
      <pixelBtn v-if="hostMode" btnText="HOST" @buttonToParent="onSubmit"/>
      <pixelBtn v-else btnText="JOIN" @buttonToParent="onSubmit"/>
    </div>
  </center>
</div>
</template>

<script>
import pixelBtnComponent from './pixelBtnComponent.vue';
import pixelInputComponent from './pixelInputComponent.vue';
import sound from '../sound.js';
import backend from '../backendCommunication.js'

export default {
  name: 'joinMenuComponent',
  data() {
    return {
      formStage: "1",  
      lobbyID: "",
      nickName: "",
      nickError: false,
      lobbyIDError: false,
    }
  },
  components: {
    pixelBtn: pixelBtnComponent,
    pixelInput: pixelInputComponent
  },
  props: {
    hostMode: Boolean
  },
  methods: {
    onInputChange(data) {
      this.nickError = false;
      this.lobbyIDError = false;
      var id = data[0];
      var value = data[1];
      this[id] = value;
    },
    onButtonClick(id) {
      sound.play("button")
      if(id == "joinBACK") {
        this.$emit("childToParent", ["joinMenu", "main"]);
      }
    },
    onSubmit() {
      sound.play("button")
      if(this.hostMode == true) {
        this.lobbyID = backend.getlobbyID()
        this.$emit("childToParent", ["joinMenu", "lobby", this.lobbyID]);
      } else if(this.formStage == "1") {
        if(backend.verifylobbyID(this.lobbyID)) {
          this.formStage = "2"
        } else {
          this.lobbyIDError = true;
        }
      } else if(this.formStage == "2") {
        if(backend.verifyNickAvailability(this.nickName, this.lobbyID)) {
          this.$emit("childToParent", ["joinMenu", "lobby", this.lobbyID]);
        } else {
          this.nickError = true;
        }
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
.label-error {
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