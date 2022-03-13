<template>
  <div>
    <article>
      <figure>
        <img
          :src="getData.image"
          :alt="getData.name"
          class="image"
          v-bind="$attrs"
        />
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    getData: {
      type: Object,
    },
  },
};
</script>


