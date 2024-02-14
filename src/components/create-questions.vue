<template>
  <div class="create-question-panel">
    <div class="create-question">
      <button class="button" @click="$router.push('/account')">
        {{ $t("createVotePage.createQuestions.back") }}
      </button>

      <div class="voting-template">
        <div class="input">
          <span>
            {{ $t("createVotePage.createQuestions.votingTemplate.question") }}
          </span>
          <input type="text" v-model="question"/>
        </div>

        <div class="type-answers">
          <div v-for="({ label, value }, index) in types" :key="index">
            <input type="radio" :value="value" v-model="typeQuestion">
            <span>
              {{ $t(`createVotePage.createQuestions.votingTemplate.typeAnswers.${ label }`) }}
            </span>
          </div>
        </div>

        <div class="input" v-for="(_, index) in answers" :key="index">
          <span>
            {{ $t("createVotePage.createQuestions.votingTemplate.answer") }}
          </span>
          <div class="input-answer">
            <input type="text" v-model="answers[index]"/>
            <button v-if="answers.length > 1" class="button" @click="deleteAnswer(index)"> - </button>
          </div>
        </div>

        <button class="button" @click="addAnswer">
          {{ $t("createVotePage.createQuestions.votingTemplate.addAnswer") }}
        </button>
      </div>

      <button class="button create-button" @click="createQuestion">
        {{ $t("createVotePage.createQuestions.createQuestion") }}
      </button>
    </div>

    <div class="list-questions">
      <img v-if="!questions.length" :src="logo" alt="Logo">
      <div v-else class="question" v-for="({ question, answers}, index) in questions" :key="index">
        <div class="questionTitle">
          <span>{{ question }}</span>
          <button @click="deleteQuestion(index)"> -</button>
        </div>
        <div class="answers">
            <span class="answer" v-for="(answer, index) in answers" :key="index">
              {{ answer }}
            </span>
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
  { label: "oneAnswer", value: "one answer" },
  { label: "severalAnswers", value: "several answers" },
  { label: "userAnswer", value: "user response" }
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
}

.create-question-panel {
  width: 1000px;
  display: flex;
  margin: 8px auto;
  padding: 16px;
  border-radius: 12px;
  background: var(--neutral-light-theme);
  // TODO: надо пофиксить
  height: 388px;

  .create-question {
    margin-right: 8px;
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
      }
    }
  }

  .list-questions {
    padding-right: 4px;
    width: 100%;
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
      padding: 8px;
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
        padding: 4px;
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

</style>
