<template>
  <div >
      <nav class="menu">
        <ul class="menu__subMenu">
         <li class="menu__subMenu__product">
          <router-link to="/">Product name</router-link>
        </li>
        <li class="menu__subMenu__about">
          <router-link to="/about">About</router-link>
        </li>
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

    name:"SunNavComponent",



}
</script>

<style scoped lang="scss">

.menu{
    width:1440px;
    height: 82px;

    &__subMenu{
        display: flex;
         width:216px !important;
        height: 72px;
        font-size:18px;
        font-weight: 400;


        &__product{
             text-decoration: none;
        }
    }


    &__line{
            width:1440px;
            border:solid 1px #9D9D9D;
    }
}

</style>