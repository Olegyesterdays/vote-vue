<template>
  <div>
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script setup>
import "@/styles/index.css";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>

<style lang="scss" scoped>
</style>
