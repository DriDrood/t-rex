<template>
  <div class="host-main">
    <h2 class="title2-primary">Host</h2>
    <div class="host-inputs">
      <span v-if="errMsg !== ''" class="primary-errMsg">{{ errMsg }}</span>
      <p>Nickname:</p>
      <input class="primary-input" type="text" placeholder="nickname" v-model="nickname" pattern="\w{3,15}" />
    </div>
    <div class="host-btn primary-input-gap ">
      <button class="primary-button btn" @click="this.$router.push('/')">Back</button>
      <button class="primary-button btn" @click="createLobby()">Host</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'host',
  data: () => ({
    nickname: '',
    errMsg: ''
  }),
  methods: {
    createLobby() {
      const validNickname = /\w{3,15}$/.test(this.nickname);
      if (!validNickname) {
        this.errMsg = "Name is not valid";
      } else if (validNickname) {
        this.errMsg = "";
        this.$store.dispatch('createLobby', this.nickname);
        this.$router.push('/game');
      }
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

.host-inputs {
  display: grid;

  span {
    width: 100%;
    text-align: center;
  }

}
</style>