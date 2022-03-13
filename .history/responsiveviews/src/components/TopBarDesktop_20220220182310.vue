<template>
  <div class="container">
    <nav class="menu">
      <ul class="menu__routes">
        <li class="menu__routes__product">
          <router-link to="/">Product name</router-link>
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

      <ul class="menu__subMenu">
        <li></li>
      </ul>
      <router-view />
    </nav>
  </div>
</template>

<script>
import LogInComponent from "./logInComponent.vue";
export default {
  name: "TopBarDesktop",

  components: {
    LogInComponent,
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
