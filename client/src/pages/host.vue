<template>
  <div class="host-main">
    <h2 class="title2-primary">Host</h2>
    <div class="host-inputs">
      <p>Nickname:</p>
      <input v-model="nickname" class="primary-input" type="text" placeholder="nickname" pattern="\w{3,15}" />
    </div>
    <div class="host-btn primary-input-gap ">
      <button @click="this.$router.push('/')" class="primary-button btn">Back</button>
      <button @click="createLobby()" class="primary-button btn">Host</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'host',
  data: () => ({
    nickname: '',
  }),
  computed: {
    ...mapState(['lobbyId']),
  },
  methods: {
    createLobby() {
      const validNickname = /\w{3,15}$/.test(this.nickname);
      if (!validNickname) {
        this.$store.commit('displayInfo', {type: 'error', text: 'Invalid nickname'});
      } else if (validNickname) {
        this.$store.dispatch('createLobby', this.nickname);
        this.$router.push(`/lobby/${this.lobbyId}`);
      }
    }
  }
}
</script>

<style lang="scss">
.host-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;

}

.host-inputs {
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }

}
</style>