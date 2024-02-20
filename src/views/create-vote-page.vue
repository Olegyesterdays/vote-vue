<template>
  <div class="background">
    <div class="content">
      <div class="buttons">
        <button class="button cancellation" @click="$router.push('/account')">
          {{ $t("createVotePage.createQuestions.back") }}
        </button>
      </div>
      <create-vote />
      <create-questions />
      <div class="buttons">
        <button class="button add-question"
          @click="store.commit('createVoteModule/newQuestion')"
        >
          Добавить вопрос
        </button>
        <button class="button create" @click="create">
          {{ $t("createVotePage.buttons.buttonCreate")}}
        </button>
        <button class="button create-and-publish" @click="createAndPublish">
          {{ $t("createVotePage.buttons.buttonCreateAndPublish")}}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CreateVote from "@/components/create-vote.vue";
import CreateQuestions from "@/components/create-questions.vue";
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
.background {
  display: flex;
  flex-direction: column;

  .content {
    margin: auto;
    width: 100%;

    .buttons {
      display: flex;
      flex-direction: column;

      .button {
        padding: 12px;
        border: 0;
        border-radius: 12px;
        background: var(--neutral-light-theme);
        margin-bottom: 8px;
        box-shadow: 0 4px 6px var(--shadow-color);
      }
    }
  }

  @media screen and (min-width: 1032px) {
    /* Если экран имеет ширину 1024px или больше, применяем следующие стили */
    .content {
      width: 1024px; /* Ширина контента будет 1024px на десктопах и больших экранах */
    }
  }
}
</style>
