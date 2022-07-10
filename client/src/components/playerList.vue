<template>

<div class="player-list">
  <div v-for="player in players" @click="kick(player)" :class="{ kickable: isMaster && !player.master }" class="btn player-item">
    <img v-if="player.master" src="/assets/images/crown.svg" alt="Master crown"/>
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
  },
  getters: {
    ...mapGetters(['isMaster'])
  },
  methods: {
    kick(player) {
      if (!player.master) {
        console.log(`Kicked: ${player.nickname}`)
      }
    }
  }
}

</script>


<style lang="scss">

.player-list {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.player-item {
  height: 60px;
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