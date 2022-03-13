<template>
  <div>
     <main>
    <section class="sectionImage">
      <ImageComponent :getData="getData[1]"/>
    </section>

  </main>


  </div>
</template>

<script>
import ImageComponent from '../components/ImageComponent.vue'
import {useStore} from "vuex"
import {computed} from 'vue'
export default {
    name:'ProductName',

     components:{

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

<style scoped lang="scss">

.sectionImage{
  margin-top:17px ;
}

</style>