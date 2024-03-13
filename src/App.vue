<template>
  <div class="background">
    <Header class="header" />

    <router-view class="content" />
  </div>
</template>

<script setup>
import Header from "@/components/header/header.vue";
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
}
</style>
