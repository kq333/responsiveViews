<template>
  <div>
    <nav class="menu">
      <ul class="menu__subMenu">
        <li class="menu__subMenu__product">
          <router-link to="/">Home</router-link>
        </li>
        <li class="menu__subMenu__sign">/</li>
        <li class="menu__subMenu__page">
          <router-link to="/pageName"> {{pageName}}</router-link>
        </li>
       <!--  <li class="menu__subMenu__sign">/</li>
        <li class="menu__subMenu__collection">
          <router-link to="/collection">Collection</router-link>
        </li> -->
      </ul>
      <router-view />
    </nav>
    <div class="menu__line"></div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed} from 'vue'
export default {
  name: "SunNavComponent",

  setup(){

     const store = useStore();
    const pageName = computed(() => store.state.pageName);


    return{store, pageName}
  }
};
</script>

<style scoped lang="scss">
.menu {
  width: 1440px;
  height: 82px;

  &__subMenu {
    display: flex;
    gap: 10px;
    width: 216px !important;
    height: 72px;
    font-size: 18px;
    font-weight: 400;

    a {
      text-decoration: none;
      color: #9d9d9d;
      text-decoration: underline;

      &.router-link-exact-active {
        text-decoration: none;
      }
    }
    &__product {
      margin-top: 28px;
      margin-left: 80px;
      list-style-type: none;
    }

    &__page {
      margin-top: 28px;
      list-style-type: none;
    }
   /*  &__collection {
      margin-top: 28px;
      list-style-type: none;
    } */
    &__sign {
      margin-top: 28px;
      color: #9d9d9d;
      list-style-type: none;
    }
  }

  &__line {
    width: 1440px;
    border: solid 1px #9d9d9d;
  }
}
</style>
