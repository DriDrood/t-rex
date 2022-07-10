<template>
  <div class="join-main">
    <h2 class="title2-primary">Join</h2>
    <div class="join-input">
      <p>Lobby id:</p>
      <input v-model="lobbyId" class="primary-input" type="text" pattern="[0-9a-f]*"
        placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6" />
      <p>Nickname:</p>
      <input v-model="nickname" class="primary-input" type="text" placeholder="nickname" pattern="\w{3,15}" />
    </div>
    <div class="join-btn primary-input-gap ">
      <button @click="this.$router.push('/')" class="btn primary-button">Back</button>
      <button @click="joinLobby()" class="btn primary-button">Join</button>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'join',
  data() {
    return {
      nickname: '',
      lobbyId: '',
    }
  },
  computed: {
    ...mapState(['lobbyId']),
  },
  methods: {
    joinLobby() {
      const validNickname = /\w{3,15}$/.test(this.nickname);
      if (!validNickname) {
        this.$store.commit('displayInfo', {type: 'error', text: 'Invalid nickname'});
      } else if (validNickname) {
        // console.log('Nickname is valid');
        this.$store.dispatch('joinLobby', { nickname: this.nickname, lobbyId: this.lobbyId });
        this.$router.push(`/lobby/${this.lobbyId}`);
      }
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

.join-input {
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }
}
</style>
