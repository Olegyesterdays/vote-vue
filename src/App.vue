<template>
  <div :class="{ container: true, 'menu-open': isMenu }">
    <Header />
    <router-view class="content" />
    <TheQuickMoveButton />
  </div>
</template>

<script setup>
import Header from '@/components/header/header.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import TheQuickMoveButton from '@/components/the-quick-move-button.vue'

const store = useStore()
const isMenu = computed(() => store.getters['appModule/getIsMenu'])
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  position: relative;

  .content {
    margin-top: 68px;
  }

  &.menu-open::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    pointer-events: none;
  }
}
</style>
