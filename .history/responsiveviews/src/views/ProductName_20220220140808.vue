<template>
  <div>
    <main>
      <section class="sectionImage">
        <ImageComponent :getData="getData[1]" />
      </section>
      <section>
        <header class="sectionNav">
          <h1 class="sectionNav__header">Section</h1>
          <nav class="sectionNav__nav">
            <router-link to="/collection"> <buttonComponent /></router-link>
          </nav>
        </header>
      </section>

      <section>
        <article>
          <div class="itemCollection">
                 <ImageComponent :getData="getData[0]" />
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import ImageComponent from "../components/ImageComponent.vue";
import buttonComponent from "../components/buttonComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "ProductName",

  components: {
    ImageComponent,
    buttonComponent,
  },

  setup() {
    const store = useStore();
    const getData = computed(() => store.state.Data);

    return { store, getData };
  },
};
</script>

<style scoped lang="scss">
.sectionImage {
  margin-top: 18px;
}

h1 {
  font-size: 48px;
  font-weight: 700;

}

.sectionNav {
  margin-left: 79px;
  width: 1305px;
  display: grid;
  grid-template-areas: "header nav";
  margin-top:70px;

  &__header {
    grid-area: header;
    width:323px ;
    height: 138px;


  }

  &__nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;

  }
}
</style>
