<template>
  <div class="container">
    <div class="question" v-for="(question, indexQuestion) in questions" :key="indexQuestion">
      <div class="title-question">
        <div class="title">
          <input
              class="input-question"
              type="text"
              placeholder="Вопрос"
              :value="question.titleQuestion"
              @input="recordTitleQuestion($event.target.value, indexQuestion)"
          />

          <button
              v-if="questions.length > 1"
              class="delete"
              @click="deleteQuestion(indexQuestion)"
          >
            <span class="mdi mdi-delete" />
          </button>
        </div>
      </div>

      <div class="type-answers">
        <TypeAnswer
            @update:oneAnswer="typeQuestion('one answer', indexQuestion)"
            @update:severalAnswers="typeQuestion('several answers', indexQuestion)"
        />
      </div>

      <div class="content-question">
        <div class="answers">
          <div class="answer" v-for="(option, indexAnswer) in question.options" :key="indexAnswer">
            <div class="input">
              <input
                  type="text"
                  placeholder="Ответ"
                  :value="option.text"
                  @input="recordTheAnswer($event.target.value, indexQuestion, indexAnswer)"
              />

              <button
                  v-if="question.options.length > 1"
                  class="delete"
                  @click="deleteAnswer(indexQuestion, indexAnswer)"
              >
                <span class="mdi mdi-delete" />
              </button>
            </div>
          </div>

          <button class="button add-answer" @click="newAnswer(indexQuestion)">
            Добавить ответ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from "vuex"
import TypeAnswer from "@/components/create-vote-page/type-answer.vue"

const store = useStore()

const questions = computed(() => store.getters["createVoteModule/getQuestions"])

function typeQuestion(type, indexQuestion) {
  store.commit('createVoteModule/typeQuestion', {type, indexQuestion})
}

function recordTitleQuestion(titleQuestion, indexQuestion) {
  store.commit('createVoteModule/recordTitleQuestion', { titleQuestion, indexQuestion })
}

function newAnswer(indexQuestion) {
  store.commit('createVoteModule/newAnswer', { indexQuestion })
}

function recordTheAnswer(answer, indexQuestion, indexAnswer) {
  store.commit('createVoteModule/recordTheAnswer', { answer, indexQuestion, indexAnswer })
}

function deleteAnswer(indexQuestion, indexAnswer) {
  store.commit('createVoteModule/deleteAnswer', { indexQuestion, indexAnswer })
}

function deleteQuestion(indexQuestion) {
  store.commit('createVoteModule/deleteQuestion', { indexQuestion })
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;

  .question {
    padding: 12px;
    border-radius: 20px;
    margin: 8px 0;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 4px solid var(--neutral-color);
    background: var(--main-color);

    .title-question {
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;

        .input-question {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 0;
          background: var(--neutral-color);
        }

        .delete {
          margin-left: 8px;
          border: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: var(--neutral-color);

          .mdi-delete {
            font-size: 24px;
          }

          &:hover {
            background: var(--accent-color);

            .mdi-delete {
              color: var(--main-color);
            }
          }

          .mdi {
            padding: 8px;
          }
        }
      }
    }

    .content-question {
      .answers {
        display: flex;
        flex-direction: column;

        .answer {
          margin-top: 8px;
          display: flex;
          flex-direction: column;

          .input {
            display: flex;
            align-items: center;

            input {
              padding: 12px;
              border-radius: 12px;
              border: 0;
              width: 100%;
              background: var(--neutral-color);
            }

            .delete {
              margin-left: 8px;
              border: 0;
              width: 40px;
              height: 40px;
              border-radius: 8px;
              align-items: center;
              justify-content: center;
              padding: 0;
              background: var(--neutral-color);

              .mdi-delete {
                font-size: 24px;
              }

              &:hover {
                background: var(--accent-color);

                .mdi-delete {
                  color: var(--main-color);
                }
              }

              .mdi {
                padding: 8px;
              }
            }
          }
        }

        .button {
          margin-top: 8px;
          padding: 12px;
          border-radius: 12px;
          border: 0;
          background: var(--neutral-color);

          &:hover {
            background: var(--accent-color);
            color: var(--main-color);
          }
        }
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
