<template>
  <div
      class="background"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <Header class="header" />

    <router-view class="content" />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 72px;
  }
}

.dark-theme {
  background: var(--main-color-dark-theme);
}

.light-theme {
  background: var(--main-color-light-theme);
}
</style>
