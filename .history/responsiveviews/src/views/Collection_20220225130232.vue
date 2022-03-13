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
            <div>
              <ImageComponent :getData="getData[0]" :class="$style.imageSize" />
            </div>
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

@media (width: 768px) {
  .imageStyle {
    max-width: 100vw;
    height: 162px;
    object-fit: cover;
    filter: opacity(0.6) drop-shadow(0 0 0 rgb(225, 234, 228));
  }
}

 @media (max-width: 576px) {
  .imageSize {
    width: 161px !important;
    height: 172px !important;
    object-fit: cover;
  }
}

@media (width: 320px) {
  .imageSize {
    width: 131px !important;
    height: 142px !important;
    object-fit: cover;
  }
}

.imageSize {
  width: 295px;
  height: 315px;
  object-fit: cover;
}
</style>

<style lang="scss" scoped>
@import  '../assets/scss/_colors.scss';

.Collection {
  max-width: 1440px;
  height: 1409px;



  .header {
    max-width: 1440px;
    height: 240px;
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
        left: 28%;
        font-size: 36px;
        font-weight: 700;
        width: 170px;
        height: 138px;
      }
       @media (width: 768px) {
        position: absolute;
        top: 58px;
        left: 28%;
        font-size: 36px;
        font-weight: 700;
        width: 170px;
        height: 138px;
      }
    }
  }

  .itemCollection {
    max-width: 1282px;
    margin-left: 79px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(4, auto);
    grid-row-gap: 122px !important;
    gap: 34px;
    margin-top: 142px;

    @media (max-width: 576px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 161px;
      height: 172px;
      margin-left: 16px;
      grid-row-gap: 0px !important;
      gap: 21px;
      margin-top: 0px;
    }

    @media (min-width: 400px) and (max-width: 576px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 161px;
      height: 172px;
      margin-left: 16px;
      grid-row-gap: 0px !important;
      gap: 70px;
      margin-top: 0px;
    }

     @media (min-width: 390px) and (max-width:399px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 161px;
      height: 172px;
      margin-left: 16px;
      grid-row-gap: 0px !important;
      gap: 50px;
      margin-top: 0px;
    }

    @media (width: 375px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 161px;
      height: 172px;
      margin-left: 16px;
      grid-row-gap: 0px !important;
      gap: 31px;
      margin-top: 0px;
    }

     @media (width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 161px;
      height: 172px;
      margin-left: 16px;
      grid-row-gap: 70px !important;
      gap: 140px;
      margin-top: 30px;
    }

    &__item {
      max-width: 295px;
      height: 315px;

      @media (max-width: 576px) {
        max-width: 150px;
        height: 264px;
      }
    }

    p {
      max-width: 211px;
      height: 85px;
      font-size: 18px;
      font-weight: 400;
      margin-top: 20px;
      color: $subNavColor;
      text-decoration: none;

      a {
        color: $subNavColor;
        text-decoration: none;

        @media (max-width: 576px) {
          color: $primaryColor;
          font-size: 16px;
          font-weight: 400;
          line-height: 18.75px;
        }
      }
    }
  }
}
</style>
