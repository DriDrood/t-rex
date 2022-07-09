<template>
  <div class="join-main">
    <h2>Join</h2>
    <div class="join-input">
      <span class="primary-errMsg">{{ errMsg }}</span>
      <p>Lobby id:</p>
      <input type="text" pattern="[0-9a-f]*" placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6" />
      <p>Nickname:</p>
      <input type="text" placeholder="nickname" pattern="\w{3,15}" />
    </div>
    <div class="join-btn">
      <button class="primary-button" @click="this.$router.push('/')">Back</button>
      <button class="primary-button" @click="this.$router.push('')">Join</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'join',
  data() {
    return {
      user: {
        nickname: '',
      },
      errMsg: "Name is not valid"
    }
  },
  computed: {

  }
};
</script>

<style lang="scss">
.join-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;

  h2 {
    font-size: 60px;
    margin: 50px;
  }
}

.join-input {
  display: grid;

  input {
    margin: 5px 0;
    width: 700px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 0;
    border: solid black 4px;
  }

  span {
    width: 100%;
    text-align: center;
  }
}

.join-btn {
  display: flex;
  gap: 100px;
  margin-top: 50px;
}
</style>
