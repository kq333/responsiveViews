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

      <router-view />
    </nav>

      <nav  class="menuMobile">
           <ul class="menuNav">
             <li class="menuNav__product">Product name</li>
             <div class="hamburger-menu">
                <div class="bar top"></div>
                <div class="bar middle"></div>
                <div class="bar bottom"></div>
              </div>
           </ul>
           <ul class="menuList">
             <li class="menuList__about">About</li>
             <li class="menuList__collection">Collection</li>
             <li class="menuList__logIn"></li>
           </ul>
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

    return { store, pageName, changeColor, changeColorLink, colorProductName };
  },
};
</script>

<style scoped lang="scss">

body{

     @media (max-width: 576px){
        background: #1D1F20;
        text-align: center;
        padding: 60px;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 32px;
        }

}
a {
  font-weight: bold;
  color: #9d9d9d;
  text-decoration: none;

  &.router-link-exact-active {
    color: #000000;
  }
}

.container {
  max-width: 1440px;
  height: 80px;
  background: #ffffff;

   @media (max-width: 576px){
         max-width:576px
        }

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

    @media (max-width: 576px){
          display:none;
        }

    &__routes {
      display: grid;
      grid-template-columns: 210px 70px 105px;
      width: 420px;
      height: 30px;

       @media (max-width: 576px){
          display:none;
        }

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
          color: #ffffff !important;
        }

        a {
          color: #000000;
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

        @media (max-width: 576px){
          display:none;
        }



    }
  }

  .menuMobile{

      @media (min-width: 577px){
          display:none;
        }


      max-width:576px;
      height: 80px;

      ul li{
          max-width:576px;
      }

      .menuNav{
        display:flex;
        max-width:576px;
        height: 80px;

          .hamburger-menu {
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            height: 3px;
            width: 32px;
            cursor: pointer;
          }

          .hamburger-menu .bar {
            height: 5px;
            background: Orange;
            border-radius: 5px;
            margin: 3px 0px;
            transform-origin: left;
            transition: all 0.5s;
          }

              .hamburger-menu:hover .top {
                transform: rotate(45deg);
              }

              .hamburger-menu:hover .middle {
                opacity: 0;
              }

              .hamburger-menu:hover .bottom {
                transform: rotate(-45deg);
              }


      }



  }


}
</style>
