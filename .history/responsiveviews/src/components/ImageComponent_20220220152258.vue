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


  },
};
</script>

<style module lang="scss" >





</style>
