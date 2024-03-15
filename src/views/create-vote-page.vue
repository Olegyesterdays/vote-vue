<template>
  <div class="container">
    <button
        class="button creatingOrParticipants"
        @click="switchCreatingOrParticipants"
    >
      {{ creatingOrParticipants === "participants" ? "Создание голосования" : "Участники голосования"}}
    </button>

    <VotingParticipants v-if="creatingOrParticipants === 'participants'" />

    <CreatingATitleAndDescription v-if="creatingOrParticipants === 'creating'" />
    <CreateQuestion v-if="creatingOrParticipants === 'creating'" />

    <div class="buttons" v-if="creatingOrParticipants === 'creating'">
      <button
          class="button add-question"
          @click="newQuestion"
      >
        Добавить вопрос
      </button>

      <button
          class="button create"
          @click="create"
      >
        Создать
      </button>

      <button
          class="button create-and-publish"
          @click="createAndPublish"
      >
        Создать и опубликовать
      </button>
    </div>
  </div>
</template>

<script setup>
import CreatingATitleAndDescription from "@/components/create-vote-page/creating-a-title-and-description.vue";
import VotingParticipants from "@/components/create-vote-page/voting-participants.vue";
import CreateQuestion from "@/components/create-vote-page/create-question.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const creatingOrParticipants = computed(() => store.getters["createVoteModule/getCreatingOrParticipants"])

function switchCreatingOrParticipants() {
  store.commit("createVoteModule/creatingOrParticipants")
}
function newQuestion() {
  store.commit("createVoteModule/newQuestion")
}

function create() {
  store.dispatch("createVoteModule/createVote");
}

function createAndPublish() {
  store.dispatch("createVoteModule/createAndPublishVote");
}
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  margin: auto;

  .creatingOrParticipants {
    margin-top: 8px;
  }

    .button {
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: var(--neutral-color);
      box-shadow: 0 4px 6px var(--shadow-color);
      margin-bottom: 8px;

      &:hover {
        background: var(--accent-color);
        color: var(--main-color);
      }
    }

  .buttons {
    display: flex;
    flex-direction: column;

    .button {
      margin-bottom: 8px;
      padding: 12px;
      border: 0;
      border-radius: 12px;
      box-shadow: 0 4px 6px var(--shadow-color);
      background: var(--neutral-color);

      &:hover {
        background: var(--accent-color);
        color: var(--main-color);
      }

      &:last-child {
        margin-bottom: 400px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    .buttons {
      .button:last-child {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
