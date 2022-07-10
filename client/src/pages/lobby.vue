<template>

<div class="lobby-main">

  <h2 class="title2-primary">Lobby</h2>
  <button @click="invite" class="primary-button">Invite players</button>

  <playerList/>
</div>

</template>


<script>
import playerList from '@/components/playerList.vue'

export default {
  name: 'lobby',
  components: {
    playerList
  },
  computed: {
    lobbyId() {
      return this.$route.params.lobbyId;
    }
  },
  methods: {
    invite() {
      navigator.clipboard.writeText("Hello World");
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