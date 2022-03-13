<template>
  <div class="about">
    <header class="header">
      <ImageComponent :getData="getData[1]" :class="$style.imageStyle" />
      <h1>About</h1>
      <SubNavComponent/>
    </header>

    <main>

      <section class="contentArea">
         <ContentComponent
         :title="'Heading'"
         :content="getData[0].text"
         :class="$style.content"
         />
      </section>


    </main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import ImageComponent from "../components/ImageComponent.vue";
import SubNavComponent from "../components/SubNavComponent.vue";
import ContentComponent from "../components/ContentComponent.vue";
export default {
  name: "About",

  components: {
    ImageComponent,
    SubNavComponent,
    ContentComponent
  },

  setup() {
    const store = useStore();
    const getData = computed(() => store.state.Data);

    const width = ref(100);

    return { store, getData, width };
  },
};
</script>

<style module>
.imageStyle {
  width: 1440px;
  height: 240px;
  object-fit: cover;
  filter: opacity(0.5) drop-shadow(0 0 0 rgb(225, 234, 228));
}
.content{


}
 /* figcaption {
    width: 211px;
    height: 85px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;

} */
</style>

<style scoped lang="scss">
.about {
  width: 1440px;
  height: auto;

  .header {
    width: 1440px;
    height: 240px;
    margin-top: 18px;
    position: relative;

    h1 {
      position: absolute;
      top: 33%;
      left: 44%;
      font-size: 60px;
      font-weight: 700;
    }
  }

  .contentArea{
    margin-top:144px;
    margin-left:80px;
  }
}
</style>
