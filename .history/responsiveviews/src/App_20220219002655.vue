<template>
  <div id="Header">

    <TopBarDesktop/>
  </div>

</template>

<script>
import TopBarDesktop from './components/TopBarDesktop.vue'
export default {
  name:'App',

  components:{
    TopBarDesktop
  },

  setup() {

  },
}
</script>

<style lang="scss">

html{
  width:1440px;
  height: auto;
  margin:auto;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

#Header {
  width:1440px;


}
</style>
