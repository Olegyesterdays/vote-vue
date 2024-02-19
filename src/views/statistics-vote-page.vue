<template>
  <div class="background">
    <div class="statistics-panel">
      <statistics-menu class="statistics-menu"/>
      <statistics-vote class="statistics-vote"/>
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


  @media (max-width: 768px) {
    .statistics-panel {
      display: flex;
      flex-direction: column;

      .statistics-menu {
        margin: 0 0 8px 0;
      }
    }
  }
}
</style>
