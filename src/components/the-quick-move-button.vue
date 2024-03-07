<template>
  <button class="button the-quick-move-button" @click="scrollToTopOrBottom">
    <span v-if="scrollPosition === 'top'" class="mdi mdi-arrow-up"></span>
    <span v-else class="mdi mdi-arrow-down"></span>
  </button>
</template>

<script setup>
import { ref } from 'vue';

const scrollPosition = ref('top');
let savedScrollPosition = 0;

function scrollToTopOrBottom() {
  if (scrollPosition.value === 'top') {
    savedScrollPosition = window.scrollY;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    scrollPosition.value = 'bottom';
  } else {
    window.scrollTo({
      top: savedScrollPosition,
      behavior: 'smooth'
    });
    scrollPosition.value = 'top';
  }
};
</script>

<style scoped lang="scss">
.the-quick-move-button {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 44px !important;
  height: 44px !important;
  z-index: 100;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  &:hover {
    .mdi {
      color: var(--main-color);
    }
  }
}
</style>
