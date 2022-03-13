<template>
  <div>
    <article>
    <!--   <slot name="image"> -->
        <figure>
         <img :src="require(`${getData[0].src}`)" alt="Slide" class="image" />
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
