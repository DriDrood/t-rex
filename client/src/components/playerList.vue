<template>

<div class="player-list">
  <div v-for="player in players" class="player-item">
    <img v-if="player.master" src="/assets/images/crown.svg" alt="Master crown"/>
    <button @click="kick(player)" :class="{ kickable: master }">{{ player.name }}</button>
  </div>
</div>

</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'playerList',
  computed: {
    ...mapState(['master']),
    players() {
      return [{name: "FreeRefill", master: true}, {name: "Acko", master: false}]
    }
  }
}

</script>


<style lang="scss">

.player-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.player-item {
  display: flex;
  flex-direction: row;
}

.kickable {
  &:hover {
    cursor: pointer;
    color: red;
    text-decoration: line-through;
  }
}
</style>