<template>
  <div class="create-question-panel">
    <div class="question" v-for="({ options }, indexQuestion ) in questions" :key="indexQuestion">
      <div class="title-question">
        <div class="title">
          <span>
            Вопрос
          </span>
          <button
              v-if="questions.length > 1"
              class="delete"
              @click="deleteQuestion( indexQuestion )"
          >
            <svg-icon class="mdi" type="mdi" :path="mdiDelete" />
          </button>
        </div>
        <input
            type="text"
            v-model="questions[indexQuestion].titleQuestion"
            @input="recordTitleQuestion( $event.target.value, indexQuestion )"
        />
      </div>

      <div class="type-answers">
        <TypeAnswer
            @update:oneAnswer="typeQuestion('one answer', indexQuestion)"
            @update:severalAnswers="typeQuestion('several answers', indexQuestion)"
        />
      </div>

      <div class="content-question">
        <div class="answers">
          <div class="answer" v-for="( _, indexAnswer ) in options" :key="indexAnswer">
            <span>
              Ответ
            </span>
            <div class="input">
              <input
                  type="text"
                  v-model="options[indexAnswer].text"
                  @input="recordTheAnswer( $event.target.value, indexQuestion, indexAnswer )"
              />
              <button v-if="options.length > 1" class="delete"
                      @click="deleteAnswer( indexQuestion, indexAnswer )"
              >
                <svg-icon class="mdi" type="mdi" :path="mdiDelete" />
              </button>
            </div>
          </div>

          <button class="button add-answer" @click="newAnswer( indexQuestion )">
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
import { mdiDelete } from '@mdi/js'
import TypeAnswer from "@/components/type-answer.vue"
import SvgIcon from '@jamescoyle/vue-icon'

const store = useStore()

const questions = computed(() => store.getters["createVoteModule/getQuestions"])

function typeQuestion(type, indexQuestion) {
  store.commit('createVoteModule/typeQuestion', { type, indexQuestion })
}

function recordTitleQuestion( titleQuestion, indexQuestion ) {
  store.commit('createVoteModule/recordTitleQuestion', {
    titleQuestion: titleQuestion,
    indexQuestion: indexQuestion
  })
}

function newAnswer( indexQuestion ) {
  store.commit('createVoteModule/newAnswer', { indexQuestion })
}

function recordTheAnswer( answer, indexQuestion, indexAnswer ) {
  store.commit('createVoteModule/recordTheAnswer', {
    answer: answer,
    indexQuestion: indexQuestion,
    indexAnswer: indexAnswer
  })
}

function deleteAnswer( indexQuestion, indexAnswer ) {
  store.commit('createVoteModule/deleteAnswer', {
    indexQuestion: indexQuestion,
    indexAnswer: indexAnswer
  })
}

function deleteQuestion( indexQuestion ) {
  store.commit('createVoteModule/deleteQuestion', {
    indexQuestion: indexQuestion
  })
}
</script>

<style scoped lang="scss">
.create-question-panel {

  .question {
    padding: 12px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
      }

      input {
        margin-top: 8px;
      }
    }

    .content-question {
      .answers {
        display: flex;
        flex-direction: column;

        .button {
          margin-top: 8px;
          padding: 12px;
          border-radius: 12px;
          background: var(--white-light-theme);
        }

        .answer {
          margin-top: 8px;
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
              align-items: center;
              justify-content: center;
              padding: 0;
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
