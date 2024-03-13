<template>
  <div class="background">
    <Header class="header" />

    <router-view class="content" :class="isMenu ? 'header-menu__open' : ''"/>
  </div>
</template>

<script setup>
import Header from "@/components/header/header.vue";
import { useStore } from 'vuex';
import {computed} from "vue";

const store = useStore();
const isMenu = computed(() => store.getters["appModule/getIsMenu"])
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--main-color);

  .content {
    margin-top: 80px;
  }

  .header-menu__open:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Затемнение с помощью прозрачного черного цвета */
    //backdrop-filter: blur(8px); /* Размытие */
    z-index: 98; /* Ниже чем меню, но выше чем все остальное */
  }
}
</style>
