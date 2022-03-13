<template>
  <div>
    <section>
    <header class="heading">
      {{ title }}
    </header>
    <article class="content">
      {{ content }}
    </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContentComponent",

  props: {
    title: {
      type: String,
      require: true,
    },

    content: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.heading {
  font-size: 48px;
  font-weight: 700;
  width: 323px;
  height: 138px;
}

.content {
  width: 623px;
  height: 592px;
  font-size: 18px;
  font-weight: 400;
  margin-top: -40px;
  line-height: 24px;
}
</style>
