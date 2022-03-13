<template>
  <div>
      <header class="heading" >
        <h2>{{title}}</h2>
      </header>
      <article class="content" >
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

.heading{
     font-size: 48px;
  font-weight: 700;
  width:323px;
  height: 138px;
}

.content{
        width:623px;
  height: 592px;
}

</style>