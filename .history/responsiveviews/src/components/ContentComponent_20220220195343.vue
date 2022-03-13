<template>
  <div>

       <secion>
      <header class="heading">
        <h2>Heading</h2>
      </header>
      <article class="content">
        {{getData[0].text}}

      </article>
    </secion>

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