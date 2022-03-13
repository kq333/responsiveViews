<template>
  <div class="ProductName">
    <main>
      <article class="sectionImage">
        <ImageComponent :getData="getData[1]" />
      </article>
      <article>
        <header class="sectionNav">
          <h1 class="sectionNav__header">Section</h1>
          <nav class="sectionNav__nav">
            <router-link to="/collection"><buttonComponent /></router-link>
          </nav>
        </header>
      </article>
      <article>
        <section class="itemCollection">
          <div v-for="n in 4" :key="n">
            <ImageComponent :getData="getData[0]" />
            <p>{{getData[0].title}}</p>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import ImageComponent from "../components/ImageComponent.vue";
import buttonComponent from "../components/buttonComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from 'vue-router'

export default {
  name: "ProductName",

  components: {
    ImageComponent,
 buttonComponent,
  },

  setup() {
    const store = useStore();
     const router = useRouter()

   const getData = computed(() => store.state.Data);
    const currentPathObject = router.currentRoute.value;

    store.commit('pageName', currentPathObject.name)



    return { store,  getData,  router, currentPathObject};
  },
};
</script>

<style scoped lang="scss">

.ProductName{
   width: 1440px;
    height:1419px;

.sectionImage {
  margin-top: 18px;

}

h1 {
  font-size: 48px;
  font-weight: 700;
}

.sectionNav {
  margin-left: 79px;
  width: 1282px;
  display: grid;
  grid-template-areas: "header nav";
  margin-top: 70px;

  &__header {
    grid-area: header;
    width: 323px;
    height: 138px;
  }

  &__nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
  }
}

.itemCollection {
  width: 1282px;
  margin-left: 79px;
  display: flex;
  gap: 34px;
  width: 295px;
  height: 315px;
  margin-top: -28px;

  p{
    width: 211px;
    height: 85px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
  }

}
}
</style>
