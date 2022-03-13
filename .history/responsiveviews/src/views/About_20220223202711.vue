<template>
  <div class="about">
    <header class="header">
      <ImageComponent :getData="getData[1]" :class="$style.imageStyle" />
      <h1>About</h1>
      <SubNavComponent />
    </header>
    <main>
      <section class="contentArea">
        <ContentComponent :title="'Heading'" :content="getData[0].text" />
      </section>
    </main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ImageComponent from "../components/ImageComponent.vue";
import SubNavComponent from "../components/SubNavComponent.vue";
import ContentComponent from "../components/ContentComponent.vue";

import { useRouter } from "vue-router";

export default {
  name: "About",

  components: {
    ImageComponent,
    SubNavComponent,
    ContentComponent,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const getData = computed(() => store.state.Data);
    const currentPathObject = router.currentRoute.value;

    store.commit("pageName", currentPathObject.name);

    return { store, getData };
  },
};
</script>

<style module>
.imageStyle {
  width: 1440px;
  height: 240px;
  object-fit: cover;
  filter: opacity(0.6) drop-shadow(0 0 0 rgb(225, 234, 228));
}

@media(max-width:576px){

 .imageStyle {
  max-width: 375px;
  height: 162px;
  object-fit: cover;
  filter: opacity(0.6) drop-shadow(0 0 0 rgb(225, 234, 228));
}

}

@media(width:420px){

 .imageStyle {
  max-width: 420px;
  height: 162px;
  object-fit: cover;
  filter: opacity(0.6) drop-shadow(0 0 0 rgb(225, 234, 228));
}

}





</style>

<style scoped lang="scss">
.about {
  max-width: 1440px;
  height: 1024px;

  .header {
    max-width: 1440px;
    height: 240px;
  //  margin-top: 18px;
    position: relative;

     @media(max-width:576px){
        max-width:576px ;
        height: 216px;


     }

    h1 {
      position: absolute;
      top: 33%;
      left: 44%;
      font-size: 60px;
      font-weight: 700;

      @media(max-width:576px){
      position: absolute;
      top: 58px;
      left: 38%;
      font-size: 36px;
      font-weight: 700;
      width: 170px;
      height: 138px;


      }



    }
  }

  .contentArea {
    margin-top: 144px;
    margin-left: 80px;

      @media(max-width:576px){
           margin-top:39px;
            margin-left: 15px;


      }
  }
}
</style>
