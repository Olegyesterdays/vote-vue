<template>
  <div class="create-question-panel">

    <div class="question" v-for="({ question, answers }, indexQuestion) in voteList" :key="indexQuestion">
      <div class="title-question">
        <div class="title">
          <span>Вопрос</span>
          <button v-if="voteList.length > 1" class="delete" @click="deleteQuestion(indexQuestion)">
            <svg-icon class="mdi" type="mdi" :path="mdiDelete" />
          </button>
        </div>
<!--        TODO: починить -->
        <input type="text" v-model="question[indexQuestion]" />
      </div>

      <div class="content-question">
        <div class="answers">
          <div class="answer" v-for="(_, indexAnswer) in answers" :key="indexAnswer">
            <span>Ответ</span>
            <div class="input">
<!--              TODO: починить-->
              <input type="text" v-model="answers[indexAnswer]" />
              <button v-if="answers.length > 1" class="delete" @click="deleteAnswer(indexQuestion, indexAnswer)">
                <svg-icon class="mdi" type="mdi" :path="mdiDelete" />
              </button>
            </div>
          </div>
          <button class="button add-answer" @click="addAnswer(indexQuestion)">Добавить ответ</button>
          <button class="button add-question" @click="addQuestion">Добавить вопрос</button>
        </div>

        <div class="type-answers">
          <div class="type-answer">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import logo from '@/assets/OCRV-Logo.svg'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDelete } from '@mdi/js'

const voteList = ref([
  {
    question: "",
    answers: [""]
  }
])

const types = [
  { label: 'oneAnswer', value: 'one answer' },
  { label: 'severalAnswers', value: 'several answers' },
  { label: 'userAnswer', value: 'user response' }
]

function addQuestion() {
  voteList.value.push(
    {
      question: "",
      answers: [""]
    }
  )
}

function addAnswer(indexQuestion) {
  voteList.value[indexQuestion].answers.push("")
}

function deleteAnswer(indexQuestion, indexAnswer) {
  voteList.value[indexQuestion].answers.splice(indexAnswer, 1)
}

function deleteQuestion(indexQuestion) {
  voteList.value.splice(indexQuestion, 1)
}
</script>

<style scoped lang="scss">
.create-question-panel {

  .question {
    padding: 16px;
    border-radius: 20px;
    margin: 8px 0;
    box-shadow: 0 4px 6px var(--shadow-color);
    background: var(--neutral-light-theme);

    .title-question {
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .delete {
          margin-left: 8px;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--white-light-theme);
        }
      }

      input {
        margin-top: 8px;
      }
    }

    .content-question {
      .answers {
        margin-top: 8px;
        display: flex;
        flex-direction: column;

        .button {
          margin-top: 8px;
          padding: 12px;
          border-radius: 12px;
          background: var(--white-light-theme);
        }

        .answer {
          display: flex;
          flex-direction: column;

          .input {
            display: flex;
            align-items: center;
            margin-top: 8px;

            input {
              width: 100%;
            }

            .delete {
              margin-left: 8px;
              width: 36px;
              height: 36px;
              border-radius: 8px;
              background: var(--white-light-theme);
            }
          }
        }
      }

      .type-answers {
        .type-answer {

        }
      }
    }
  }
}
</style>
