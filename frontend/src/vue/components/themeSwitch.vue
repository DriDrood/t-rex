<template>
<div>
  <a class="switch-button" v-if="theme=='light'" @click="switchTheme()"><img src="../../assets/images/moon.png" alt="moon"></a>
  <a v-else @click="switchTheme()"><img src="../../assets/images/sun.png" alt="sun"></a>
</div>
</template>

<script>

let htmlElement = document.documentElement;

export default {
  name: "themeSwitch",
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  }, 
  methods: {
    switchTheme() {
      if(this.$store.state.theme == "light") {
        this.$store.commit("switchTheme", "dark");
        htmlElement.setAttribute('theme', 'dark');
      } else {
        this.$store.commit("switchTheme", "light");
        htmlElement.setAttribute('theme', 'light');
      }
    }
  }
}

</script>