<template>
  <div>
      <header class="heading">
        <h2>{{title}}</h2>
      </header>
      <article class="content">
        {{content}}
      </article>
  </div>
</template>

<script>

export default {
    name:'ContentComponent',

    props:{
        title:{
            type:String,
            require:true
        },

        content:{
            type:String,
            require:true
        }
    }


}
</script>

<style scoped lang="scss">

</style>