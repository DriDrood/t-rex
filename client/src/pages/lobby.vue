<template>

<div class="lobby-main">

  <h2 class="title2-primary">Lobby</h2>
  <button @click="invite" class="btn primary-button">Invite players</button>

  <playerList/>
  <button v-if="me?.isMaster" class="btn primary-button">Start Game</button>
</div>

</template>


<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex';
import playerList from '@/components/playerList.vue'

export default {
  name: 'lobby',
  components: {
    playerList
  },
  computed: {
    ...mapState(['players', 'user']),
    ...mapGetters(['me']),
    lobbyId() {
      return this.$route.params.lobbyId;
    }
  },
  methods: {
    invite() {
      navigator.clipboard.writeText(`${window.location.origin}/join/${this.lobbyId}`);
      this.$store.commit('displayInfo', {type: 'info', text: 'Invite link copied to clipboard'});
    }
  }
}

</script>


<style lang="scss">

.lobby-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>