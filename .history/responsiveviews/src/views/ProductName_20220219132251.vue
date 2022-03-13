<template>
  <div>

     <main>
    <section>
      <ImageComponent :getData="getData[1]"/>
    </section>

  </main>


  </div>
</template>

<script>
import ImageComponent from './components/ImageComponent.vue'
import {useStore} from "vuex"
import {computed} from 'vue'
export default {
    name:'ProductName',

     components:{

    ImageComponent
  },


}
</script>

<style scoped lang="scss">

</style>