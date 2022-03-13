<template>
<div>
  <header class="header">
        <TopBarDesktop/>
  </header>
  <main>
    <section>
      <ImageComponent :getData="getData[0]"/>
    </section>

  </main>

 <!--   <section>
      <ImageComponent :getData="getData[1]"/>
    </section> -->



  </div>

</template>

<script>
import TopBarDesktop from './components/TopBarDesktop.vue'
import ImageComponent from './components/ImageComponent.vue'

import {useStore} from "vuex"
import {computed} from 'vue'
export default {
  name:'App',

  components:{
    TopBarDesktop,
    ImageComponent
  },

  setup() {

    const store = useStore()

    const getData = computed(()=>store.state.Data)

    console.log(getData.value)

    return {store, getData}

  },
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
