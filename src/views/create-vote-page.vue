<template>
  <div class="container">
    <CreatingATitleAndDescription />
    <CreateQuestion />
    <div class="buttons">
      <button class="button add-question"
              @click="store.commit('createVoteModule/newQuestion')"
      >
        Добавить вопрос
      </button>
      <button class="button create" @click="create">
        Создать
<!--        {{ $t("createVotePage.buttons.buttonCreate")}}-->
      </button>
      <button class="button create-and-publish" @click="createAndPublish">
        Создатьи опубликовать
<!--        {{ $t("createVotePage.buttons.buttonCreateAndPublish")}}-->
      </button>
    </div>
  </div>
</template>

<script setup>
import CreatingATitleAndDescription from "@/components/create-vote-page/creating-a-title-and-description.vue";
import CreateQuestion from "@/components/create-vote-page/create-question.vue";

import { useStore } from "vuex"
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
function create() {
  store.dispatch("createVoteModule/createVote")
  router.push('/account')
}

function createAndPublish() {
  store.dispatch("createVoteModule/createAndPublishVote")
  router.push('/account')
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
      background: var(--neutral-light-theme);
      margin-bottom: 8px;
      box-shadow: 0 4px 6px var(--shadow-color);
      padding: 12px;
      border: 0;
      border-radius: 12px;

      &:hover {
        background: var(--accent-light-theme);
        color: var(--white-light-theme);
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
