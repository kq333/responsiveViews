<template>
  <div>
     <main>
    <section class="sectionImage">
      <ImageComponent :getData="getData[1]"/>
    </section>

    <section >
      <header class="sectionNav">
        <h1 class="sectionNav__header">Section</h1>
        <nav class="sectionNav__nav">
           <router-link to="/collection"> <buttonComponent /></router-link>
         </nav>
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
  margin-top:70px;
}

.sectionNav{
  margin-left:79px;
  width:1384px;
  /* display:grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: header nav; */
  display:flex;


  &__header{
   // grid-area: header;

  }

   &__nav{
   // grid-area: nav;
   margin-left:400px;

   a{
     /*  display: flex;
   justify-content: flex-end; */
   }


  }



}

</style>