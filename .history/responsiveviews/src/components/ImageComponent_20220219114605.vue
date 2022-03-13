<template>
  <div>
    <article>
    <!--   <slot name="image"> -->
        <figure>
          <img :src="require(getData)" :alt="getData[0].name" />
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
