<template>
  <div class="background">
    <div class="vote">
      <div class="question" v-for="({ title, typeQuestion, answers }, index) in question" :key="index">
        <one-answer v-if="typeQuestion === 'one answer'"
          :title="title"
          :answers="answers"
          @update:oneItems="handleOneItems"
        />
        <several-answers v-if="typeQuestion === 'several answers'"
          :title="title"
          :answers="answers"
          @update:selectedItems="handleSelectedItems"
        />
        <user-answers v-if="typeQuestion === 'user response'"
          :title="title"
          :answers="answers"
        />
      </div>
      <div class="test">
        <button class="button-push" @click="sendAnswers">Отправить</button>
      </div>
    </div>
    <button class="button-auth">Войти</button>
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from "vue";
import { useStore } from "vuex";

import oneAnswer from "@/components/one-answer.vue"
import severalAnswers from "@/components/several-answers.vue"
import userAnswers from "@/components/user-answers.vue"

const store = useStore();
const question = computed(() => store.getters.getVote);

const oneItems = ref([]);
const selectedItems = ref([]);

function handleSelectedItems(items) {
  selectedItems.value = items;
  store.commit("addAnswer", toRaw(selectedItems.value));
  console.log(toRaw(selectedItems.value));
}

function handleOneItems(items) {
  oneItems.value = items;
  store.commit("addAnswer", toRaw(oneItems.value));
  console.log(toRaw(oneItems.value));
}

function sendAnswers() {
  store.dispatch("sendAnswer")
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
    background: var(--secondary-light-theme);

    .question {
      display: flex;
      flex-direction: column;
      background: var(--white-light-theme);
      margin: 12px;
      padding: 12px;
      border-radius: 16px;
    }

    .test {
      margin: 0 12px 12px 12px;

      .button-push {
        padding: 20px;
        width: 100%;
        border-radius: 16px;
        background: var(--white-light-theme);
        border: 0;

        &:hover {
          background: var(--accent-light-theme);
          color: var(--white-light-theme);
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }
  }

  .button-auth {
    position: absolute;
    border-radius: 16px;
    background: var(--white-light-theme);
    border: 4px solid var(--secondary-light-theme);
    padding: 16px;
    top: 49px;
    right: 20px;

    &:hover {
      background: var(--accent-light-theme);
      color: var(--white-light-theme);
      border: 4px solid var(--accent-light-theme);
    }

    &:active {
      transform: scale(0.99);
    }
  }
}
</style>
