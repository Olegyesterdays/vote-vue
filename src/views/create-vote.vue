<template>
  <div class="background">
    <div class="create-vote-panel">
      <div class="create-question">
        <button class="button" @click="$router.push('/adminPage')">Назад</button>

        <div class="voting-template">
          <div class="input">
            <span>Вопрос</span>
            <input type="text" v-model="question"/>
          </div>

          <div class="type-answers">
            <div v-for="({ label, value }, index) in types" :key="index">
              <input type="radio" :value="value" v-model="typeQuestion">
              <span>{{ label }}</span>
            </div>
          </div>

          <div class="input" v-for="(_, index) in answers" :key="index">
            <span>Ответ</span>
            <div class="input-answer">
              <input type="text" v-model="answers[index]"/>
              <button v-if="answers.length > 1" class="button" @click="deleteAnswer(index)"> - </button>
            </div>
          </div>

          <button class="button" @click="addAnswer">Добавить ответ</button>
        </div>

        <button class="button create-button" @click="createQuestion">Создать вопрос</button>
      </div>

      <div class="list-questions">
        <img v-if="!questions.length" :src="logo" alt="Logo">
        <div v-else class="question" v-for="({ question, answers}, index) in questions" :key="index">
          <div class="questionTitle">
            <span>{{ question }}</span>
            <button @click="deleteQuestion(index)"> - </button>
          </div>
          <div class="answers">
            <span class="answer" v-for="(answer, index) in answers" :key="index">
              {{ answer }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import logo from "@/assets/OCRV-Logo.svg"

const store = useStore();

const questions = computed(() => store.getters["createVoteModule/getQuestions"]);
const answers = ref([""])
const question = ref("")
const typeQuestion = ref("")

const types = [
  { label: "Один ответ", value: "one answer" },
  { label: "Несколько ответов", value: "several answers" },
  { label: "Ответ пользователя", value: "user response" }
];

function addAnswer() {
  answers.value.push("");
}

function deleteAnswer(index) {
  answers.value.splice(index, 1);
}

function deleteQuestion(index) {
  store.commit("createVoteModule/deleteQuestion", { index });
}

function createQuestion() {
  store.commit("createVoteModule/addQuestion", { answers: [...answers.value], question: question.value });
  answers.value = [""];
  question.value = "";
  typeQuestion.value = ""
}
</script>

<style scoped lang="scss">
.button {
  background: var(--neutral-light-theme);
  border: 0;
  border-radius: 8px;
  padding: 8px;
  justify-content: center !important;

  &:hover {
    background: var(--accent-light-theme) !important;
    color: var(--white-light-theme);
  }

  &:active {
    transform: scale(0.99);
  }
}

.background {
  display: flex;

  .create-vote-panel {
    display: flex;
    margin: 40px auto;
    padding: 12px;
    border-radius: 12px;
    background: var(--neutral-light-theme);

    .create-question {
      margin-right: 8px;
      padding: 12px;
      border-radius: 12px;
      background: var(--neutral-light-theme);
      display: flex;
      flex-direction: column;

      .button {
        background: var(--secondary-light-theme);
      }

      .create-button {
        margin-top: 8px;
      }

      .voting-template {
        margin-top: 8px;
        padding: 12px;
        border-radius: 12px;
        background: var(--secondary-light-theme);
        display: flex;
        flex-direction: column;

        .type-answers {
          margin-bottom: 8px;
        }

        .input {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
        }

        input {
          margin-top: 8px;
          border-radius: 12px;
          padding: 16px;
          background: var(--neutral-light-theme);
          border: 0;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .list-questions {
      border: 8px solid var(--neutral-light-theme);
      width: 700px;
      height: 512px;
      padding: 8px;
      border-radius: 12px;
      background: var(--neutral-light-theme);
      overflow: hidden;
      overflow-y: auto;
      position: relative;

      img {
        margin-top: 10%;
        position: absolute;
        opacity: 0.3;
        pointer-events: none;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: transparent;
        border: 0;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--secondary-light-theme);
      }

      .question {
        padding: 12px;
        border-radius: 12px;
        margin-bottom: 8px;
        background: var(--secondary-light-theme);

        &:last-child {
          margin: 0;
        }

        .questionTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .answers {
          padding: 12px;
          border-radius: 12px;
          background: var(--neutral-light-theme);
          display: flex;
          flex-direction: column;
          margin-top: 8px;

          .answer {
            padding: 8px;
          }
        }
      }
    }
  }
}
</style>
