<template>
  <div class="CollectionDetails">
    <header class="header">
      <SubNavComponent />
    </header>
    <main class="contentContainer">
      <div class="sideLeft">
        <article>
          <header class="title">
            {{ getData[0].title }}
          </header>
          <div class="image">
            <ImageComponent
              :getData="getData[propsIndex]"
              :class="$style.imageLeft"
            />
          </div>
        </article>
      </div>
      <div class="sideRight">
        <article>
          <header class="title">Section title</header>
          <section>
            <div class="content">
              <p>{{ getData[propsIndex].text }}</p>
            </div>
          </section>
        </article>
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
    const propsIndex = computed(() =>
      getData.value.findIndex((item) => item.id == props.id)
    );

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

@media(max-width:576px){

  .imageLeft {
  width: 343px;
  height: 366px;
}



}
</style>

<style scoped lang="scss">
.CollectionDetails{

    @media(max-width:576px){
      margin-top:-30px;
      max-width:576px;


  }


.header {
  margin-top: 17px;
}

.contentContainer {
  max-width: 1280px;
  height: 100vh;
  margin-left: 80px;
  display: flex;
  gap: 35px;

  @media(max-width:576px){
      display: block;
      max-width:576px;


  }

  .sideLeft {
    max-width: 623px;
    height: 801px;

    .title {
      max-width: 595px;
      height: 138px;
      font-size: 60px;
      font-weight: 700;
      margin-top: 48px;


       @media(max-width:576px){

      max-width:576px;

        font-size: 36px;
      font-weight: 700;
      line-height: 42.19px;
  }
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
}
</style>
