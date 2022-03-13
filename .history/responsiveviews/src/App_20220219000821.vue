<template>
  <div id="nav">
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
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /*  text-align: center;
  color: #2c3e50; */
}

#nav {
  width:1440px;
//  padding: 30px;

 /*  a {
    font-weight: bold;
    color: #9D9D9D;
    text-decoration: none;

    &.router-link-exact-active {
      color: #000000;
    }
  } */
}
</style>
