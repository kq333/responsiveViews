<template>
  <div
    class="container"
    :class="[changeColor ? `container--${pageName}` : 'container']"
  >
    <nav class="menu">
      <ul class="menu__routes">
        <li class="menu__routes__product">
          <router-link
            :class="{ 'menu__routes__product--whiteColor': colorProductName }"
            to="/"
            >Product name
          </router-link>
        </li>
        <li class="menu__routes__about">
          <router-link to="/about">About</router-link>
        </li>
        <li class="menu__routes__collection">
          <router-link
            :class="{ 'menu__routes__product--whiteColor': colorProductName }"
            to="/collection"
            >Collection</router-link
          >
        </li>
      </ul>
      <div class="menu__logIn"><LogInComponent /></div>
    </nav>

    <nav class="menuMobile">
      <div class="menuNav">
        <div class="menuNav__product">
          <router-link

            :class="{ 'menu__routes__product--whiteColor': colorProductName }"
            to="/"
            >Product name
          </router-link>
        </div>
        <div class="menuNav__hamburger">
          <div class="hamburger-menu" @click="active = !active">
            <div class="bar top"></div>
            <div class="bar middle"></div>
            <div class="bar bottom"></div>
          </div>
        </div>
      </div>
      <ol
        v-if="active"
        class="menuList"
        :class="[changeColor ? `container--${pageName}` : 'container']"
      >
        <ul class="menuList__items">
          <li class="menuList__items__links">
            <router-link to="/about" @click="active = !active">About</router-link>
          </li>
          <li class="menuList__items__links" >
            <router-link @click="active = !active"
              :class="{ 'menu__routes__product--whiteColor': colorProductName }"
              to="/collection"
              >Collection</router-link
            >
          </li>
          <li class="menuList__items__links"><LogInComponent /></li>
        </ul>
      </ol>
    </nav>
  </div>
</template>

<script>
import LogInComponent from "./logInComponent.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

export default {
  name: "TopBarDesktop",

  components: {
    LogInComponent,
  },

  setup() {
    const store = useStore();
    const pageName = computed(() => store.state.pageName);
    const colorProductName = ref(false);
    const active = ref(false);

    function changeColor() {
      if (pageName.value === "About") {
        return pageName.value;
      }
      if (pageName.value === "Collection") {
        return pageName.value;
      }
    }

    watch(pageName, () => {
      changeColorLink();
    });

    function changeColorLink() {
      if (pageName.value === "Collection") {
        return (colorProductName.value = true);
      } else {
        return (colorProductName.value = false);
      }
    }

    return {
      store,
      pageName,
      changeColor,
      changeColorLink,
      colorProductName,
      active,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_colors.scss";
a {
  font-weight: bold;
  color: $subNavColor;
  text-decoration: none;

  &.router-link-exact-active {
    color: $primaryColor;
  }
}

.container {
  max-width: 1440px;
  height: 80px;
  background: $secandColor;

  &--About {
    background: $subNavColorAbout;
  }
  &--Collection {
    background: $navColorCollection;
  }
  &--ProductName {
    background: $secandColor;
  }

  @media (min-width: 768px) {
    width: 1440px;
  }

  .menu {
    max-width: 1417px;
    height: 80px;
    display: grid;
    grid-template-columns: 420px auto;
    list-style-type: none;

    @media (max-width: 576px) {
      display: none;
    }

    @media (min-width: 768px) {
      width: 1417px;
    }

    &__routes {
      display: grid;
      grid-template-columns: 210px 70px 105px;
      width: 420px;
      height: 30px;

      li {
        margin-top: 25px;
        margin-left: 24px;
      }

      &__product {
        width: 210px;
        font-size: 24px;
        font-weight: 400;
        align-items: center;
        list-style-type: none;

        &--whiteColor {
          color: $secandColor !important;
        }

        a {
          color: $primaryColor;
        }
      }

      &__about {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        a {
          margin-top: 5px;
        }
      }
      &__collection {
        display: flex;
        align-items: center;

        a {
          margin-top: 5px;
        }
      }
    }

    &__logIn {
      margin-top: 18px;
      height: 43px;
      display: flex;
      justify-content: flex-end;
    }
  }

  .menuMobile {
    max-width: 576px;
    height: 80px;

    @media (min-width: 577px) {
      display: none;
    }

    .menuNav {
      display: flex;
      max-width: 576px;
      height: 30px;

      &__product {
        width: 60%;
        margin-left: 16px;
        margin-top: 25px;
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13px;

        a {
          color: $primaryColor;
        }
      }

      &__hamburger {
        display: flex;
        justify-content: flex-end;
        width: 40%;
        margin-right: 16px;
        margin-top: 25px;

        .hamburger-menu {
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          height: 1.7rem;
          width: 2rem;
        }

        .hamburger-menu .bar {
          height: 3px;
          background: $primaryColor;
          margin: 3px 0px;
          transform-origin: left;
          transition: all 0.5s;
        }

        /*   .hamburger-menu:hover .top {
          transform: rotate(34deg);
        }

        .hamburger-menu:hover .middle {
          opacity: 0;
        }

        .hamburger-menu:hover .bottom {
          transform: rotate(-35deg);
        } */
      }
    }

    .menuList {
      max-width: 576px;
      height: 100vh;
      margin-top: 47px;
      z-index: 4;
      position: relative;

      &__items {
        line-height: 100px;
        font-size: 25px;
        font-weight: 400;

        &__links {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
