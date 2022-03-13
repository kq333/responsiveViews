<template>
  <div class="CollectionDetails">
    <header class="header">
      <SubNavComponent />
    </header>
    <main>
      <div class="sideLeft">
        <section>
          <header class="title">
            {{ getData[0].title }}
          </header>
          <div class="image">
          <ImageComponent :getData="getData[0]" />
          </div>
        </section>
      </div>


      <div class="sideRight">
        <section>
          <header class="title">
            {{ getData[0].title }}
          </header>
          <div class="image">
          <ImageComponent :getData="getData[0]" />
          </div>
        </section>
      </div>

    </main>
  </div>
</template>

<script>
import SubNavComponent from "../components/SubNavComponent.vue";
import ImageComponent from "../components/ImageComponent.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "CollectionDetails",

  components: {
    SubNavComponent,
    ImageComponent,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const getData = computed(() => store.state.Data);
    const currentPathObject = router.currentRoute.value;

    console.log(currentPathObject.name);

    // store.commit("pageName", currentPathObject.name);

    return { store, router, getData };
  },
};
</script>

<style scoped lang="scss">
.header {
  margin-top: 17px;
}
</style>
