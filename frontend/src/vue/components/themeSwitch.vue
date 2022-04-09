<template>
  <div class="switchTheme" @click="switchTheme()">
    <img :src="`/assets/images/${image}.png`" :alt="image">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "themeSwitch",
  computed: {
    ...mapState(['theme']),
    image() {
      return this.theme == "light"
        ? "moon"
        : "sun";
    }
  }, 
  methods: {
    switchTheme() {
      const newTheme = this.theme == "light"
        ? "dark"
        : "light";
      this.$store.commit("switchTheme", newTheme);
    }
  }
}

</script>
<style>
.switchTheme {
  width: 50px;
  margin: 10px;
}
</style>