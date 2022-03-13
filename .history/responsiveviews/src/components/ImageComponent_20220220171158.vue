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
        <figcaption >{{getData.title }}</figcaption>
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

<style scoped lang="scss">

figcaption {
    width: 211px;
    height: 85px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;

}


</style>
