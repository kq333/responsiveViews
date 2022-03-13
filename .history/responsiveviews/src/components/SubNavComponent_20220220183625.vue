<template>
  <div class="menu">
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
  </div>
</template>

<script>
export default {
    name:"SunNavComponent",



}
</script>

<style scoped lang="scss">


</style>