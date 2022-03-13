<template>
  <div class="Collection">
    <header class="header">
      <ImageComponent :getData="getData[1]" :class="$style.imageStyle" />
      <h1>Collection</h1>
      <SubNavComponent />
    </header>
    <main>
      <article>
        <section class="itemCollection">
          <div class="itemCollection__item" v-for="n in 6" :key="n">
            <ImageComponent :getData="getData[0]" :class="$style.imageSize" />
            <p>
              <router-link
                :to="{
                  name: 'CollectionDetails',
                  params: { id: getData[0].id },
                }"
                >{{ getData[0].title }}</router-link
              >
            </p>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import ImageComponent from "../components/ImageComponent.vue";
import SubNavComponent from "../components/SubNavComponent.vue";

export default {
  name: "Collection",
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

    return { store, router, getData };
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

@media (max-width: 576px) {
  .imageStyle {
    max-width: 100vw;
    height: 162px;
    object-fit: cover;
    filter: opacity(0.6) drop-shadow(0 0 0 rgb(225, 234, 228));
  }
}

.imageSize {
  width: 295px;
  height: 315px;
}
</style>

<style lang="scss" scoped>
.Collection {
  width: 1440px;
  height: 1409px;

  .header {
    width: 1440px;
    height: 240px;
 //   margin-top: 18px;
    position: relative;

    h1 {
      position: absolute;
      top: 33%;
      left: 44%;
      font-size: 60px;
      font-weight: 700;

        @media (max-width: 576px) {
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

  .itemCollection {
    width: 1282px;
    margin-left: 79px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(4, auto);
    grid-row-gap: 122px !important;
    gap: 34px;
    margin-top: 142px;

    &__item {
      width: 295px;
      height: 315px;
    }

    p {
      width: 211px;
      height: 85px;
      font-size: 18px;
      font-weight: 400;
      margin-top: 20px;
      color: #9d9d9d;
      text-decoration: none;

      a {
        color: #9d9d9d;
        text-decoration: none;
      }
    }
  }
}
</style>
