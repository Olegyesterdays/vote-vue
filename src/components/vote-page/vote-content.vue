<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
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
import ava from "@/assets/ava.jpg";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])
const title = computed(() => store.getters['statisticsModule/getTitle'])
const description = computed(() => store.getters['statisticsModule/getDescription'])
</script>

<style scoped lang="scss">
.container {
  width: 900px;
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

.dark-theme {
  background: var(--main-color-dark-theme);
  border: 4px solid var(--additional-color-dark-theme);
}

.light-theme {
  background: var(--main-color-light-theme);
  border: 4px solid var(--additional-color-light-theme);
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
