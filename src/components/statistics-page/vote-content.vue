<template>
  <div class="container">
    <div class="content">
      <h1 class="title">
        {{ title }}
      </h1>
      <h3 class="description">
        {{ description }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const title = computed(() => store.getters['statisticsModule/getTitleVote'])
const description = computed(
  () => store.getters['statisticsModule/getDescriptionVote']
)
</script>

<style scoped lang="scss">
.container {
  border: 4px solid var(--neutral-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  border-radius: 12px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .voting-img {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .content {
    display: flex;
    flex-direction: column;

    .title {
      margin: 12px auto 0;
      font-size: 32px;
    }

    .description {
      margin: 12px auto;
      font-size: 20px;
    }
  }
}
</style>
