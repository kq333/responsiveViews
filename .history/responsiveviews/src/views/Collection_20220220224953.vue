<template>
  <div class="Collection">
        <header class="header">
      <ImageComponent :getData="getData[1]" :class="$style.imageStyle" />
      <h1>About</h1>
      <SubNavComponent />
    </header>

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

<style lang="sass" scoped>

</style>
