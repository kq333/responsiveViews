<template>
  <div>
    <article>
      <figure>
        <img :src="getData.image" :alt="getData.name" class="image" style="width:`${width }+px`" />
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    getData: {
      type: String,
    },

    width:{
      type: Number ,
      require:true,
    }
  },
};
</script>

<style module lang="scss" >





</style>
