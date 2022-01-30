<template>
<div>
  <div class="list-container">
    <h1>Players:</h1>
    <button :class="hostMode && 'hostMode'" v-for="(player, index) in players" :key="index" @click="kick(player)">{{ player }}</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'playerListComponent',
  data() {
    return {
    }
  },
  props: {
    hostMode: Boolean,
    players: Array
  },
  methods: {
    kick(playerNick) {
      if(this.hostMode == true) {
        console.log("Kicked: " + playerNick);
      }
    }
  }
}
</script>

<style scoped>
.list-container {
  width: 50%;
}

h1 {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 200%;
}

button {
  font-family: 'Amiga Forever Pro', sans-serif;
  font-size: 100%;
  margin: 10px;
  background-color: white;
}
.hostMode:hover {
  text-decoration: line-through;
  color: red;
}
</style>