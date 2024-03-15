<template>
  <div class="container">
    <AdditionalInformation class="additional-information" />
    <StatisticsVote class="statistics-vote" />
  </div>
</template>

<script setup>
import AdditionalInformation from "@/components/statistics-page/additional-information.vue";
import StatisticsVote from "@/components/statistics-page/statistics-vote.vue";
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 1000px;
  display: flex;
  flex-direction: column;

  .statistics-vote {
    margin-bottom: 400px;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    .statistics-vote {
      margin-bottom: 0;
    }
  }
}
</style>
