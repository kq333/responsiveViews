<template>
  <div class="containers">
    <div class="icon" :class="{ 'icon--colorBorder': colorProductName }">
      <div
        class="icon__circle"
        :class="{ 'icon__circle--colorBorder ': colorProductName }"
      ></div>
      <div
        class="icon__ellipse"
        :class="{ 'icon__ellipse--colorBorder ': colorProductName }"
      ></div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
export default {
  name: "LogInComponent",

  setup() {
    const store = useStore();
    const pageName = computed(() => store.state.pageName);

    const colorProductName = ref(false);

    watch(pageName, () => {
      changeColorLink();
    });

    /* function changeColorLink() {
      if (pageName.value === "Collection") {
        return (colorProductName.value = true);
      } else {
        return (colorProductName.value = false);
      }
    } */

    return { changeColorLink, pageName, colorProductName, store };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_colors.scss";

.containers {
  width: 43px;
  height: 43px;

  .icon {
    display: grid;
    width: 43px;
    height: 43px;
    border: solid 1px $subNavColor;
    border-radius: 50%;

    &--colorBorder {
      border: solid 1px $secandColor;
    }

    &__circle {
      width: 12.67px;
      height: 12.67px;
      border: solid 1px $subNavColor;
      border-radius: 50%;
      margin-left: 14px;
      margin-top: 9px;

      &--colorBorder {
        border: solid 1px $secandColor;
      }
    }

    &__ellipse {
      width: 19px;
      height: 13.02px;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
      border: solid 1px $subNavColor;
      border-bottom: 0;
      margin-left: 11px;
      margin-top: -6px;

      &--colorBorder {
        border: solid 1px $secandColor;
        width: 19px;
        height: 13.02px;
        border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        border-bottom: 0;
        margin-left: 11px;
        margin-top: -6px;
      }
    }
  }
}
</style>
