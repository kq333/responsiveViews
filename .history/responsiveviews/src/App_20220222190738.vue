<template>
<div>
  <header class="header">
    <div v-if="isMobil()">
       <TopBarMobile   />
    </div>
        <div v-else>
           <TopBarDesktop   />
        </div>


  </header>
  </div>
</template>

<script>
import TopBarDesktop from './components/TopBarDesktop.vue'
import TopBarMobile from './components/TopBarMobile.vue'

export default {
  name:'App',

  components:{
    TopBarDesktop,
    TopBarMobile

  },

  setup(){


    function isMobil(){
      window.innerWidth <= 760  }


    return{isMobil}
  }


}
</script>

<style lang="scss">

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
  width:1440px;
  height: auto;
  margin:auto;
   font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
 /*  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */


}

.header {
  width:1440px;


}


</style>
