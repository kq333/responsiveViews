<template>
  <div>
     <main>
    <section class="sectionImage">
      <ImageComponent :getData="getData[1]"/>
    </section>

    <section>
      <header>
        <h1>Section</h1>
        <nav><buttonComponent/></nav>
      </header>


    </section>

  </main>


  </div>
</template>

<script>
import ImageComponent from '../components/ImageComponent.vue'
import buttonComponent from '../components/buttonComponent.vue'
import {useStore} from "vuex"
import {computed} from 'vue'
export default {
    name:'ProductName',

     components:{

    ImageComponent,
    buttonComponent
  },

   setup() {

    const store = useStore()
    const getData = computed(()=>store.state.Data)





    return {store, getData}

  },


}
</script>

<style scoped lang="scss">

.sectionImage{
  margin-top:18px ;
}

h1{
  font-size:48px;
  font-weight: 700;
}

</style>