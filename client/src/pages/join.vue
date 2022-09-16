<template>
  <div class="join-main">
    <h2 class="join-title">Join</h2>
    <div class="join-input-box">
      <p>Lobby id:</p>
      <input v-model="lobbyId" class="join-input" type="text" pattern="[0-9a-f]*"
        placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6" />
      <p>Nickname:</p>
      <input v-model="nickname" class="join-input" type="text" placeholder="nickname" pattern="\w{3,15}" maxlength="15"/>
    </div>
    <div class="join-buttons">
      <button @click="this.$router.push('/')" class="btn primary-button">Back</button>
      <button @click="joinLobby()" class="btn primary-button">Join</button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'join',
  data: () => ({
      nickname: '',
      lobbyId: '',
  }),
  methods: {
    joinLobby() {
      this.$store.dispatch('joinLobby', { nickname: this.nickname, lobbyId: this.lobbyId })
    }
  },
  mounted() {
    if (this.$route.params.lobbyId) {
      this.lobbyId = this.$route.params.lobbyId;
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

.join-title {
  font-size: 60px;
  margin: 50px;
}

.join-input-box {
  
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }
}

.join-input {
  margin: 5px 0;
  width: 700px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 0;
  border: solid black 4px;
}

.join-buttons {
  margin-top: 50px;
  display: flex; flex-direction: row;
  gap: 100px;
}

/* Mobile/Tablet support */

@media screen and (max-width: 700px) {
  .join-input {
    width: 90vw;
  }
  
  .join-buttons {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
