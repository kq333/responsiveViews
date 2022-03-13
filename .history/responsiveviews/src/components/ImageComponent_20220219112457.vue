<template>
  <div>
    <article>
      <slot name="image">
        <figure>
          <img :src="image.src" :alt="image.name" />
        </figure>
      </slot>
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
