<template>
  <div class="join">
    <div class="join-container">
      <h2>
        <div class="join-input">
          <span></span>
          <p>Lobby id:</p>
          <input type="text" pattern="[0-9a-f]*" placeholder="ad5aa1bf-7b5c-4ef2-bea7-ffbe2aad50f6" />
          <span></span>
          <p>Nickname:</p>
          <input type="text" placeholder="nickname" pattern="\w{3,15}" />
        </div>
        <div class="join-btn">
          <button @click="this.$router.push('/')">Back</button>
          <button @click="this.$router.push('')">Join</button>
        </div>
      </h2>
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
    };
  },
};
</script>

<style lang="scss">
.join {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}
</style>
