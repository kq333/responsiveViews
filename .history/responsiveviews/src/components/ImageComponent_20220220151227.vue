<template>
  <div>
    <article>
      <figure>
        <img :src="getData.image" :alt="getData.name" class="image" />
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

<style scoped lang="scss" >

.image{
  width: width;
}



</style>
