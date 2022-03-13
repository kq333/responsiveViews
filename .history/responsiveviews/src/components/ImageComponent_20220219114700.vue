<template>
  <div>
    <article>
    <!--   <slot name="image"> -->
        <figure>
         <img :src="require(`@/assets/${fileName}`)" alt="Slide" class="image" />
        </figure>
     <!--  </slot> -->
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

<style style lang="scss"></style>
