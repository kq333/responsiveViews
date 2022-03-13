<template>
  <div class="about">
    <header class="header">
       <ImageComponent :getData="getData[1]" />
    </header>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ImageComponent from "../components/ImageComponent.vue";
export default {
  name:"About",

  components:{
      ImageComponent
  },


  setup() {

    const store = useStore();
    const getData = computed(() => store.state.Data);




    return { store, getData };


  },
}
</script>

<style scoped lang="scss">

.about{
   width:1440px;
   height: auto;

  .header{
  width:1440px;
  height: 240px;
   margin-top: 18px;

   figure{
      img{
       width:440px;
      height: 240px !important;
  }
   }


}
}

</style>
