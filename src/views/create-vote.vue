<template>
  <div class="background">
    <div class="create-vote-panel">
      <div class="create-question">
        <button class="button" @click="$router.push('/adminPage')">Назад</button>
        <div class="voting-template">
          <div class="input">
            <span>Вопос</span>
            <input type="text"/>
          </div>

          <div class="input" v-for="(_, index) in answers" :key="index">
            <span>Ответ</span>
            <div class="input-answer">
              <input type="text" @input="answers[index] = $event.target.value"/>
              <button v-if="answers.length !== 1" class="button" @click="deleteAnswer(index)"> - </button>
            </div>
          </div>

          <button class="button" @click="addAnswer">Добавить ответ</button>
        </div>
      </div>

      <div class="list-questions">
        <div class="question" v-for="({ questionTitle, answers }, index) in questions" :key="index">
          <span class="questionTitle">{{ questionTitle }}</span>
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

const store = useStore();

const questions = computed(() => store.getters["createVoteModule/getQuestions"]);
const answers = ref([""])

function addAnswer() {
  answers.value.push("")
}

function deleteAnswer(index) {
  answers.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .create-vote-panel {
    display: flex;
    margin: 40px auto;
    padding: 12px;
    border-radius: 12px;
    background: var(--secondary-light-theme);

    .create-question {
      margin-right: 8px;
      padding: 12px;
      border-radius: 12px;
      background: var(--neutral-light-theme);
      display: flex;
      flex-direction: column;

      .button {
        background: var(--secondary-light-theme);
        border: 0;
        border-radius: 8px;
        padding: 8px;
        justify-content: center !important;
        margin-bottom: 8px;

        &:hover {
          background: var(--accent-light-theme);
          color: var(--white-light-theme);
        }

        &:active {
          transform: scale(0.99);
        }
      }

      .voting-template {
        padding: 12px;
        border-radius: 12px;
        background: var(--secondary-light-theme);
        display: flex;
        flex-direction: column;

        .input {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;

          &-answer {
            .button {
              margin-left: 8px;
              background: var(--neutral-light-theme);
              border: 0;
              border-radius: 8px;
              padding: 8px;
              justify-content: center !important;

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

        .button {
          background: var(--neutral-light-theme);
          border: 0;
          border-radius: 8px;
          padding: 8px;
          justify-content: center !important;

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

    .list-questions {
      padding: 12px;
      border-radius: 12px;
      background: var(--neutral-light-theme);
      overflow: hidden;
      overflow-y: auto;

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
        background: var(--white-light-theme);
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
