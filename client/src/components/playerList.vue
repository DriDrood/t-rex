<template>

<div class="player-list">
  <div v-for="player in players" @click="kick(player)" :class="{ kickable: isMaster && !player.isMaster }" class="btn player-item">
    <img v-if="player.isMaster" src="/assets/images/crown.svg" alt="Master"/>
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
    ...mapGetters(['isMaster'])
  },
  methods: {
    kick(player) {
      if (!player.isMaster) {
        console.log(`Kicked: ${player.nickname}`)
      }
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