<template>
  <div class="background">
    <div class="statistics-panel">
      <statistics-menu />
      <statistics-vote />
    </div>
  </div>
</template>

<script setup>
import StatisticsMenu from "@/components/statistics-menu.vue";
import StatisticsVote from "@/components/statistics-vote.vue";
</script>

<style lang="scss" scoped>
.background {
  display: flex;

  .statistics-panel {
    margin: 40px auto;
    display: flex;
  }


  @media screen and (max-width: 840px) {
    .statistics-panel {
      display: flex;flex-direction: column;
    }
  }
}
</style>
