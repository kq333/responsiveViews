<template>
  <div>
    <article>
    <!--   <slot name="image"> -->
        <figure>
          <img :src=" `../assets/classLesson.png`" :alt="name" />
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
