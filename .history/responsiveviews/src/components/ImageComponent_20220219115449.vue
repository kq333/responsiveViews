<template>
  <div>
    <article>
    <!--   <slot name="image"> -->
        <figure>
         <img :src="getData[0].src" :alt="getData.name" class="image" />
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
