<template>

  <div>
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

<style>

</style>