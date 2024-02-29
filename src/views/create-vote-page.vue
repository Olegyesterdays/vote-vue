<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <CreatingATitleAndDescription />
    <CreateQuestion />
    <div class="buttons">
      <button class="button add-question" @click="store.commit('createVoteModule/newQuestion')">
        Добавить вопрос
      </button>
      <button class="button create" @click="create">
        Создать
      </button>
      <button class="button create-and-publish" @click="createAndPublish">
        Создать и опубликовать
      </button>
    </div>
  </div>
</template>

<script setup>
import CreatingATitleAndDescription from "@/components/create-vote-page/creating-a-title-and-description.vue";
import CreateQuestion from "@/components/create-vote-page/create-question.vue";

import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import {computed} from "vue";

const router = useRouter();
const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])

function create() {
  store.dispatch("createVoteModule/createVote");
  router.push('/account');
}

function createAndPublish() {
  store.dispatch("createVoteModule/createAndPublishVote");
  router.push('/account');
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;

  .buttons {
    display: flex;
    flex-direction: column;

    .button {
      margin-bottom: 8px;
      box-shadow: 0 4px 6px var(--shadow-color);
      padding: 12px;
      border: 0;
      border-radius: 12px;
    }
  }
}

.dark-theme {
  .buttons {
    .button {
      background: var(--additional-color-dark-theme);

      &:hover {
        background: var(--accent-dark-theme);
        color: var(--main-color-dark-theme);
      }
    }
  }
}

.light-theme {
  .buttons {
    .button {
      background: var(--additional-color-light-theme);

      &:hover {
        background: var(--accent-light-theme);
        color: var(--main-color-light-theme);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
