<template>
 <div class="container">
   <div class="nav">
     <div class="nav__product">
        <router-link to="/productName">Product name</router-link>
     </div>
     <div class="nav__about">
       <router-link to="/about">About</router-link>
     </div>
     <div class="nav__collection">
        <router-link to="/collection">Collection</router-link>
     </div>
     <div class="nav__logIn">
     </div>
      <router-view/>
   </div>



     |


 </div>
</template>

<script>
export default {
  name: 'TopBarDesktop',

}
</script>


<style scoped lang="scss">

</style>
