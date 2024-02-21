<template>
  <div>
    <Header class="header" />

    <router-view class="content" />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
</script>

<style lang="scss" scoped>
.content {
  margin-top: 72px;
}
</style>
