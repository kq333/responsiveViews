<template>
  <div class="container">
    <button type="button">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "buttonComponent",

  props: {
    text: {
      default: "see all",
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 108px;
  height: 44px;
  background: #6d888e;
  border-radius: 10px;

  @media(max-width:576px){
     width: 92px;
    height: 32px;
  }

  button {
    width: 49.19px;
    height: 13.68px;
    background: #6d888e;
    color: #ffffff;
    border: solid 1px #6d888e;
    margin-left: 30px;
    margin-top: 12px;

     @media(max-width:576px){
    font-size:16px;
    margin-left: 20px;
    margin-top: 8px;
  }

    &:hover {
      cursor: pointer;
    }

  }
}
</style>
