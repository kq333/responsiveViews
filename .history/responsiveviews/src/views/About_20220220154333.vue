<template>
  <div class="about">
    <header class="header" >
       <ImageComponent :getData="getData[1]" :class="$style.imageStyle"  />
       <h1>About</h1>
    </header>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import ImageComponent from "../components/ImageComponent.vue";
export default {
  name:"About",

  components:{
      ImageComponent
  },


  setup() {

    const store = useStore();
    const getData = computed(() => store.state.Data);

    const width = ref(100)




    return { store, getData, width };


  },
}
</script>

<style module>

  .imageStyle{
    width:1440px;
  height: 240px;
  object-fit: cover;
  filter: opacity(0.5) drop-shadow(0 0 0 rgb(225, 234, 228));

  }


</style>



<style scoped lang="scss">



.about{
   width:1440px;
   height: auto;

  .header{
  width:1440px;
  height: 240px;
  margin-top: 18px;
   position: relative;

   h1{

     position: absolute;

        top: 37%;
  left: 44%;
  font-size: 60px;
  font-weight: 700;
 /*  width:170px;
  height: 138px; */
   }


}
}

</style>
