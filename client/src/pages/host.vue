<template>
  <div class="host-main">
    <h2 class="host-title">Host</h2>
    <div class="host-input-box">
      <p>Nickname:</p>
      <input v-model="nickname" class="host-input" type="text" placeholder="nickname" pattern="\w{3,15}" maxlength="" />
    </div>
    <div class="host-buttons">
      <button @click="this.$router.push('/')" class="primary-button btn">Back</button>
      <button @click="createLobby()" class="primary-button btn">Host</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'host',
  data: () => ({
    nickname: '',
  }),
  methods: {
    createLobby() {
      this.$store.dispatch('createLobby', this.nickname);
    }
  }
}
</script>

<style lang="scss">
.host-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;

}

.host-title {
  font-size: 60px;
  margin: 50px;
}

.host-input-box {
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }

}

.host-input {
  margin: 5px 0;
  width: 700px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 0;
  border: solid black 4px;
}

.host-buttons {
  margin-top: 50px;
  display: flex; flex-direction: row;
  gap: 100px;
}

/* Mobile/Tablet support */

@media screen and (max-width: 700px) {
  .host-input {
    width: 90vw;
  }
  
  .host-buttons {
    flex-direction: column;
    gap: 20px;
  }
}
</style>