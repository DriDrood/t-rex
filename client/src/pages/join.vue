<template>
  <div class="join-main">
    <h2 class="title2-primary">Join</h2>
    <div class="join-input">
      <span v-if="errMsg !== ''" class="primary-errMsg">{{ errMsg }}</span>
      <p>Lobby id:</p>
      <input class="primary-input" type="text" pattern="[0-9a-f]*" v-model="lobbyId"
        placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6" />
      <p>Nickname:</p>
      <input class="primary-input" type="text" placeholder="nickname" v-model="nickname" pattern="\w{3,15}" />
    </div>
    <div class="join-btn primary-input-gap ">
      <button class="btn primary-button" @click="this.$router.push('/')">Back</button>
      <button class="btn primary-button" @click="joinLobby()">Join</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'join',
  data() {
    return {
      nickname: '',
      lobbyId: '',
      errMsg: ""
    }
  },
  methods: {
    joinLobby() {
      const validNickname = /\w{3,15}$/.test(this.nickname);
      if (!validNickname) {
        this.errMsg = "Name is not valid";
      } else if (validNickname) {
        // console.log('Nickname is valid');
        this.errMsg = "";
        this.$store.dispatch('joinLobby', { nickname: this.nickname, lobbyId: this.lobbyId });
        this.$router.push('/game');
      }
    }
  }
};
</script>

<style lang="scss">
.join-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
}

.join-input {
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }
}
</style>
