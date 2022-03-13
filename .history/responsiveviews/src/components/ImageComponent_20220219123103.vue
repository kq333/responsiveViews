<template>
  <div>
    <article>

        <figure>
        <img :src="getData[1].image" :alt="getData.name" class="image" />
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

<style style lang="scss"></style>
