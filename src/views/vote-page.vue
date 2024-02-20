<template>
  <div class="background">
    <div class="vote">
      <div class="question" v-for="({ title, typeQuestion, answersToQuestions }, index) in question" :key="index">
        <one-answer v-if="typeQuestion === 'one answer'"
          :title="title"
          :answersToQuestions="answersToQuestions"
          @update:oneItems="handleOneItems($event, index)"
        />
        <several-answers v-if="typeQuestion === 'several answers'"
          :title="title"
          :answersToQuestions="answersToQuestions"
          @update:severalItems="handleSeveralItems($event, index)"
        />
        <user-answers v-if="typeQuestion === 'user response'"
          :title="title"
          :answersToQuestions="answersToQuestions"
          @update:userItems="handleUserItems($event, index)"
        />
      </div>
      <div class="button-push">
        <button class="button" @click="sendAnswers">
          {{ $t("votePage.sendAnswers")}}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from "vue"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

import oneAnswer from "@/components/one-answer.vue"
import severalAnswers from "@/components/several-answers.vue"
import userAnswers from "@/components/user-answers.vue"

const router = useRouter()
const store = useStore()
const question = computed(() => store.getters["voteModule/getVote"]);

const oneItems = ref([]);
const severalItems = ref([]);
const userItems = ref([]);

function handleSeveralItems(items) {
  severalItems.value = items
  store.commit("voteModule/addAnswer", toRaw(severalItems.value))
}

function handleOneItems(items) {
  oneItems.value = items;
  store.commit("voteModule/addAnswer", items)
}

function handleUserItems(items) {
  userItems.value = items;
  store.commit("voteModule/addAnswer", toRaw(userItems.value))
}

function sendAnswers() {
  store.dispatch("voteModule/sendAnswer")
  router.push('/account')
}
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .vote {
    margin: 40px auto;
    width: 1000px;
    box-shadow: 0 4px 6px var(--box-shadow-color);
    border-radius: 20px;
    background: var(--neutral-light-theme);

    .question {
      display: flex;
      flex-direction: column;
      background: var(--white-light-theme);
      margin: 12px;
      padding: 12px;
      border-radius: 16px;
    }

    .button-push {
      margin: 0 12px 12px 12px;

      .button {
        padding: 20px;
        width: 100%;
        border-radius: 16px;
        background: var(--white-light-theme);
        border: 0;
      }
    }
  }
}
</style>
