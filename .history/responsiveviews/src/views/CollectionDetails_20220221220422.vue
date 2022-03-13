<template>
  <div class="CollectionDetails">
    <header class="header">
      <SubNavComponent />
    </header>
    <main class="contentContainer">

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
          <div class="content">
          <p>{{getData[0].text}}</p>
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

.contentContainer{
    width:1280px;
    margin-left:80px;
    display:flex;
    gap:35px;

    .sideLeft{
        width:623px;
        height: 801px;

        .title{
        width:595px;
        height:138px;
        font-size:60px;
        font-weight: 700;
        margin-top:48px;
        }
    }
}
</style>
