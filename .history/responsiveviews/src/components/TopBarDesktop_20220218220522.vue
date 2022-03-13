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
     <div class="nav__logIn"> LOGO
     </div>
      <router-view/>
   </div>
 </div>
</template>

<script>
export default {
  name: 'TopBarDesktop',

}
</script>


<style scoped lang="scss">

 a {
    font-weight: bold;
    color: #9D9D9D;
    text-decoration: none;

    &.router-link-exact-active {
      color: #000000;
    }
  }

  .container{
   width: 1440px;
    height: 80px;
    background: #FFFFFF;

    .nav{
      max-width: 1417px;
      height: 30px;



      &__routes{
          display:grid;

           width:420px;
           /*  height: 22px;
            display:grid;
            grid-template-columns: 20% auto;
            margin-left:289px; */

            &__product{
              width:210px;
              font-size:24px;
              font-weight: 400;

            }

            &__about{
               display:flex;
               justify-content: flex-start;
               align-items: center;
          }
          &__collection{
             display:flex;
               align-items: center;

          }

      }









    }
  }

</style>
