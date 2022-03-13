<template>
  <div
    class="container"
    :class="[changeColor ? `container--${pageName}` : 'container']"
  >
    <nav class="menu">
      <ul class="menu__routes">
        <li class="menu__routes__product"  >
          <router-link :class="[changeLinkColor ? 'menu__routes__product--blackColor' : '']" to="/">Product name</router-link>
        </li>
        <li class="menu__routes__about">
          <router-link to="/about">About</router-link>
        </li>
        <li class="menu__routes__collection">
          <router-link to="/collection">Collection</router-link>
        </li>
      </ul>
      <ul>
        <li class="menu__logIn"><LogInComponent /></li>
      </ul>
      <router-view />
    </nav>
  </div>
</template>

<script>
import LogInComponent from "./logInComponent.vue";
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  name: "TopBarDesktop",

  components: {
    LogInComponent,
  },

  setup() {
    const store = useStore();

    const pageName = computed(() => store.state.pageName);


   // console.log(pageName.value)

    function changeColor() {
      if (pageName.value === "About") {
        return pageName.value;
      }
      if (pageName.value === "Collection") {
        return pageName.value;
      }
    }

    watch(pageName, ()=>{
       /*  console.log(pageName.value) */
       changeLinkColor()
    })

    function changeLinkColor(){

         if (pageName.value === "About") {
            return true
      }else{
        false
      }


    }



    return { store, pageName, changeColor, changeLinkColor };
  },
};
</script>

<style scoped lang="scss">
a {
  font-weight: bold;
  color: #9d9d9d;
  text-decoration: none;

  &.router-link-exact-active {
    color: #000000;
  }
}

.container {
  width: 1440px;
  height: 80px;
  background: #ffffff;

  &--About {
    background: #e1eae4;
  }
  &--Collection {
    background: #6d888e;
  }

  .menu {
    max-width: 1417px;
    height: 80px;
    display: grid;
    grid-template-columns: 420px auto;
    list-style-type: none;

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



          &--blackColor{
          background: #000000;
        }

        a{
         /*   color: #000000; */

          &--blackColor{
          color: #000000;
        }
         &--whiteColor{
          color: #FFFFFF;
        }

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
}
</style>
