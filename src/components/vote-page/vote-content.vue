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
const title = computed(() => store.getters['voteModule/getTitle'])
const description = computed(() => store.getters['voteModule/getDescription'])
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--shadow-color);
  background: var(--main-color);
  border: 4px solid var(--neutral-color);

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
    }

    .description {
      margin: 12px auto;
    }
  }
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
