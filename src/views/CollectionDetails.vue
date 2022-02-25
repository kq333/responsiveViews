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

@media (max-width: 576px) {
  .imageLeft {
    width: 343px;
    height: 366px;
  }
}

@media (width: 320px) {
  .imageLeft {
    width: 93vw;
    height: 366px;
  }
}

@media (width: 280px) {
  .imageLeft {
    width: 90vw;
    height: 366px;
  }
}
</style>

<style scoped lang="scss">
.CollectionDetails {
  @media (max-width: 576px) {
    margin-top: -17px;
    max-width: 576px;
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

    @media (max-width: 576px) {
      display: block;
      max-width: 576px;
      margin-left: 0px;
    }

     @media (width: 1440px) {
      display: flex !important;
      width: 1440px;
      margin-left: 0px;
    }

    @media (width: 768px) {
      display: block;
      max-width: 576px;
      margin-left: 0px;
    }

    .sideLeft {
      max-width: 623px;
      height: 801px;

      @media (max-width: 576px) {
        height: 435px;
      }

      .title {
        max-width: 595px;
        height: 138px;
        font-size: 60px;
        font-weight: 700;
        margin-top: 48px;

        @media (max-width: 576px) {
          max-width: 323px;
          height: 138;
          font-size: 36px;
          font-weight: 700;
          line-height: 42.19px;
          margin-left: 16px;
          margin-top: 25px;
        }

        @media (width: 768px) {
          max-width: 768px;
          height: 138;
          font-size: 50px;
          font-weight: 700;
          line-height: 42.19px;
          margin-left: 16px;
          margin-top: 25px;
        }
      }

      .image {
        margin-top: 19px;

        @media (max-width: 576px) {
          margin-top: -69px;
          margin-left: 16px;
        }
        @media (width: 768px) {
          max-width: 768px;
          margin-left: 16px;
          margin-top: -69px;
        }
      }
    }

    .sideRight {
      margin-top: 205px;
      height: 592px;

      @media (max-width: 576px) {
        margin-top: 42px;
        margin-left: 16px;
        height: 641px;
        max-width: 343px;
      }

      @media (width: 768px) {
        max-width: 768px;
        margin-left: 16px;
        margin-top: 42px;
      }

      .title {
        font-size: 48px;
        font-weight: 700;

        @media (max-width: 576px) {
          max-width: 323px;
          height: 138px;
          font-size: 24px;
          font-weight: 700;
          line-height: 31.73px;
        }

         @media (width: 1440px) {
          margin-top: 45px;
        }
      }

      .content {
        margin-top: 55px;
        line-height: 23.79px;
        font-size: 18px;

        @media (max-width: 576px) {
          font-size: 16px;
          font-weight: 400;
          line-height: 21.15px;
          margin-top: -88px;
        }

        @media (width: 768px) and (width: 1024px) {
          max-width: 768px;
          margin-top: 42px;
          font-size: 22px;
          font-weight: 400;
        }

        @media (width: 1440px) {
          width: 500px;
          margin-left: 0px;
        }
      }
    }
  }
}
</style>
