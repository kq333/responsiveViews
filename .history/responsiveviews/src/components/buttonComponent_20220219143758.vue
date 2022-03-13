<template>

  <div class="container">
      <button
      type="button"
      >
      {{text}}
      </button>
  </div>
</template>

<script>
export default {
    name:"buttonComponent",

    props:{
        text:{
            default:'see all',
            require:true
        }
    }

}
</script>

<style scoped lang="scss">

.container{

     width:108px;
    height: 44px;
     background:#6D888E;

    button{
         width:49.19px;
    height: 13.68px;
    background:#6D888E;
    color:#FFFFFF;
    border:solid 1px #6D888E;
    display:flex;
    justify-content: center;
    align-items: center;

}


}



</style>