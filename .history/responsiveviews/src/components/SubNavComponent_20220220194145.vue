<template>
  <div>
    <nav class="menu">
      <ul class="menu__subMenu">
        <li class="menu__subMenu__product">
          <router-link to="/">Home</router-link>
        </li>
         <li  class="menu__subMenu__sign">/</li>
        <li class="menu__subMenu__about">
          <router-link to="/about"> About</router-link>
        </li>
        <li  class="menu__subMenu__sign">/</li>
        <li class="menu__subMenu__collection">
          <router-link to="/collection">Collection</router-link>
        </li>
      </ul>
      <router-view />
    </nav>
    <div class="menu__line"></div>
  </div>
</template>

<script>
export default {
  name: "SunNavComponent",
};
</script>

<style scoped lang="scss">
.menu {
  width: 1440px;
  height: 82px;

  &__subMenu{
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
       margin-left: 80px !important;

      &.router-link-exact-active {
        text-decoration: none;
      }
    }
    &__product {
      margin-top: 28px;
    }

    &__about {
      margin-top: 28px;
    }
    &__collection {
      margin-top: 28px;
    }
    &__sign {
      margin-top: 28px;
      color: #9d9d9d;
    }
  }

  &__line {
    width: 1440px;
    border: solid 1px #9d9d9d;
  }
}
</style>
