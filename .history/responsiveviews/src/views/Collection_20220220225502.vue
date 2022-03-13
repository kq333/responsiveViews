<template>
  <div class="Collection">
        <header class="header">
      <ImageComponent :getData="getData[1]" :class="$style.imageStyle" />
      <h1>Collection</h1>
      <SubNavComponent />
    </header>
fdffddf
  </div>
</template>

<script>

import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import ImageComponent from "../components/ImageComponent.vue";
import SubNavComponent from "../components/SubNavComponent.vue";

export default {
  name: 'Collection',
  components: {
    ImageComponent,
    SubNavComponent,

  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const getData = computed(() => store.state.Data);
    const currentPathObject = router.currentRoute.value;

    store.commit("pageName", currentPathObject.name);

    return { store,router, getData };
  },


}
</script>

<style module>
.imageStyle {
  width: 1440px;
  height: 240px;
  object-fit: cover;
  filter: opacity(0.5) drop-shadow(0 0 0 rgb(225, 234, 228));
}
</style>

<style lang="sass" scoped>

  .collection {
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


}

</style>
