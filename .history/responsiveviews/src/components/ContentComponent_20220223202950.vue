<template>
  <div>
    <header class="heading">
      {{ title }}
    </header>
    <article class="content">
      {{ content }}
    </article>

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
 max-width: 323px;
  height: 138px;

  @media(max-width:576px){
         max-width: 323px;
        height: 138px;
        font-size: 24px;

  }
}

.content {
  max-width: 623px;
  height: 592px;
  font-size: 18px;
  font-weight: 400;
 // margin-top: -40px;
  line-height: 24px;

   @media(max-width:576px){
         max-width:343px;
          height: 592px;
          font-size: 16px;
          font-weight: 400;
         margin-top: -85px;
          line-height: 21.15px;


  }
}
</style>
