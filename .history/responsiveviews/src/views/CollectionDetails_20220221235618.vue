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
            <ImageComponent :getData="getData[propsIndex]" :class="$style.imageLeft" />
          </div>
        </section>
      </div>
      <div class="sideRight">
        <section>
          <header class="title">Section title</header>
          <div class="content">
            <p>{{ getData[propsIndex].text }}</p>
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

  props: {
    id: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();

    const getData = computed(() => store.state.Data);
    const currentPathObject = router.currentRoute.value;
    const propsIndex = computed(()=>getData.value.findIndex(item=>item.id == props.id ))

    store.commit("pageNameCollectionDetails", currentPathObject.name);

    return { store, router, getData, propsIndex, currentPathObject };
  },
};
</script>

<style module>
.imageLeft {
  width: 623px;
  height: 644px;
}
</style>

<style scoped lang="scss">
.header {
  margin-top: 17px;
}

.contentContainer {
  width: 1280px;
  height: 100vh;
  margin-left: 80px;
  display: flex;
  gap: 35px;

  .sideLeft {
    width: 623px;
    height: 801px;

    .title {
      width: 595px;
      height: 138px;
      font-size: 60px;
      font-weight: 700;
      margin-top: 48px;
    }

    .image {
      margin-top: 19px;
    }
  }

  .sideRight {
    margin-top: 205px;
    height: 592px;

    .title {
      font-size: 48px;
      font-weight: 700;
    }

    .content {
      margin-top: 55px;
      line-height: 23.79px;
      font-size: 18px;
    }
  }
}
</style>
