<template>
  <div>
    <section>
      <figure>
        <img
          :src="getData.image"
          :alt="getData.name"
          class="image"
          v-bind="$attrs"
        />
      </figure>
    </section>
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


