<template>
  <div>
    <header class="header">
      <TopBarDesktop />
    </header>
    <router-view />
  </div>
</template>

<script>
import TopBarDesktop from "./components/TopBarDesktop.vue";

export default {
  name: "App",

  components: {
    TopBarDesktop,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  max-width: 1440px;
  height: 100vh;
  margin: auto;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  max-width: 1440px;
}
</style>
