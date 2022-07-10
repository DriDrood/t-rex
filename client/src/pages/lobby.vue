<template>

<div class="lobby-main">

  <h2 class="title2-primary">Lobby</h2>
  <button @click="invite" class="btn primary-button">Invite players</button>

  <playerList/>
  <button v-if="isMaster">Start Game</button>
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
    lobbyId() {
      return this.$route.params.lobbyId;
    }
  },
  getters: {
    ...mapGetters(['isMaster'])
  },
  methods: {
    invite() {
      navigator.clipboard.writeText(this.lobbyId);
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