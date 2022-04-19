<template>
<div class="row">
  <div class="mainMenuContainer">
    <h1>Lobby</h1>
    <p>Join link: <a :href="joinLink" target="_blank">Here</a></p>
    <p>Nickname:</p>
    <input v-model="nickname" type="text" maxlength="10" placeholder="MrHat" />
    <button @click="setNickname">Change nickname</button>
    <p>
      Players:
      <div v-for="player in players" :key="player.id">{{ player.nickname }}</div>
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
    ...mapState(['players']),
    joinLink() {
      return `${window.location.origin}/?gameId=${this.$store.state.gameId}`;
    },
  },
  methods: {
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
