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

.header{
  width:1440px;
  height: 240px;
}

</style>
