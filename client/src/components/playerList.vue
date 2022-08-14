<template>

  <div class="player-list">
    <div v-for="(player, id) in players" @click="kick(player, id)" :class="{ kickable: kickable(player) }" class="btn player-item">
      <img v-if="player.isMaster" src="/assets/images/crown.svg" alt="Master" />
      <p>{{ player.nickname }}</p>
    </div>
  </div>

</template>


<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'playerList',
  computed: {
    ...mapState(['players', 'user']),
    ...mapGetters(['me']),
    kickable() {
      return player => this.me?.isMaster && !player.isMaster;
    }
  },
  methods: {
    kick(player, id) {
      if (!this.kickable(player)) {
        return;
      }

      console.log(`Kicked: ${player.nickname}`);
      this.$store.dispatch('kickPlayer', id);
    }
  }
}

</script>


<style lang="scss">
.player-list {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.player-item {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 25px;

  img {
    width: 50px;
    margin: 10px;
  }

  p {
    font-size: 20px;
    padding: 5px;
  }
}

.kickable {
  &:hover {
    cursor: pointer;
    color: red;
    text-decoration: line-through;
  }
}
</style>