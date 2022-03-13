<template>
  <div class="container">
    <div class="nav">
      <div class="nav__routes">
        <div class="nav__routes__product">
          <router-link to="/productName">Product name</router-link>
        </div>
        <div class="nav__routes__about">
          <router-link to="/about">About</router-link>
        </div>
        <div class="nav__routes__collection">
          <router-link to="/collection">Collection</router-link>
        </div>
      </div>

      <div class="nav__logIn"><LogInComponent /></div>

      <router-view />
    </div>
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

  .nav {
    max-width: 1417px;
    height: 80px;
    display: grid;
    grid-template-columns: 420px auto;
    border: solid 1px black;

    &__routes {
      display: grid;
      grid-template-columns: 210px 70px 105px;
      width: 420px;
      height: 30px;
      margin-top: 25px;
      margin-left: 24px;

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
      }
      &__collection {
        display: flex;
        align-items: center;
      }
    }

    &__logIn {
      /* display: flex;
      justify-content: flex-end; */
      margin-left: 930px;
      margin-top: 18px;
      height: 43px;
    }
  }
}
</style>
