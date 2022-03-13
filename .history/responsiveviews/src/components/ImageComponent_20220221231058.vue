<template>
  <div>
    <article v-for="item in getData " :key="item.id">
      <figure>
        <img
          :src="item.image"
          :alt="item.name"
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
      type: String,
    },
  },
};
</script>


