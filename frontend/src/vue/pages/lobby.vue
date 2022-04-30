<template>
<div class="row">
  <div class="">
    <h1>Lobby</h1>
    <button @click="copyLink">{{ lobbyID }}</button>
    <p>
      Players:
      <div v-for="player in players" :key="player.id"><img v-if="player.master" src="/images/crown.svg">{{ player.nickname }}</div>
    </p>
    <button @click="leave">Leave</button>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'mainMenu',
  data: () => ({
    nickname: "",
  }),
  computed: {
    ...mapState(['players'], 'lobbyID'),
    joinLink() {
      return `${window.location.origin}/?gameId=${this.$store.state.gameId}`;
    },
  },
  methods: {
    copyLink() {
      clipboard.writeText(this.joinLink);
    },
    leave() {
      this.$store.dispatch('leave');
    },
    setNickname() {
      this.$store.dispatch('setNickname', { nickname: this.nickname });
    },
  },
  mounted() {
    const state = this.$store.state;
    this.nickname = state.players[state.playerId].nickname;
  }
}
</script>

<style>
</style>
