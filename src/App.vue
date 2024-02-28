<template>
  <div class="background">
    <Header class="header" />

    <router-view class="content" />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
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
</style>
