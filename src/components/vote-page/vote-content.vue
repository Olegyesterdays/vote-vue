<template>
  <div class="container">
    <img
        class="voting-img"
        :src="ava"
        alt="Картинка голосования"
    />

    <div class="content">
      <h1 class="title">
        <!--        {{ title }}-->
        title
      </h1>

      <h3 class="description">
        <!--        {{ description }}-->
        description
      </h3>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

import ava from "@/assets/ava.jpg"

const store = useStore();

const title = computed(() => store.getters['statisticsModule/getTitle'])
const description = computed(() => store.getters['statisticsModule/getDescription'])
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  border: 4px solid var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);
  box-sizing: border-box;
  border-radius: 12px;
  margin: 8px auto;
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
    }

    .description {
      margin: 12px auto;
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
