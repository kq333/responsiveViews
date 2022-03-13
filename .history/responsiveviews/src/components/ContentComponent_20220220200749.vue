<template>
  <div>
      <header class="heading"  v-bind="$attrs.heading">
        <h2>{{title}}</h2>
      </header>
      <article class="content"  v-bind="$attrs">
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