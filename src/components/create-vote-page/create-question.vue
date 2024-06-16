<template>
  <div class="container">
    <div
      class="question"
      v-for="(
        { titleQuestion, typeQuestion, options }, indexQuestion
      ) in questions"
      :key="indexQuestion"
      @click.stop="() => clickOnTheQuestionCard(indexQuestion)"
      v-click-outside="clickNotOnTheQuestionCard"
    >
      <input class="title" type="text"
      :placeholder="$t('createVotePage.question.titleQuestion')"
      :value="titleQuestion" @input="recordTitleQuestion($event.target.value,
      indexQuestion)" />

      <div class="answers">
        <div
          class="answer"
          v-for="({ text }, indexAnswer) in options"
          :key="indexAnswer"
        >
          <div class="input">
            <input type="text" :value="text"
            :placeholder="$t('createVotePage.question.optionQuestion')" @input="
            recordTheAnswer($event.target.value, indexQuestion, indexAnswer) "
            />

            <span
              :class="
                typeQuestion === 'one answer' ? 'radio-style' : 'check-style'
              "
            />
          </div>

          <button
            v-if="options.length > 1 && editingQuestionIndex === indexQuestion"
            class="delete"
            @click="deleteAnswer(indexQuestion, indexAnswer)"
          >
            <span class="mdi mdi-delete" />
          </button>
        </div>
      </div>

      <MenuSettings
        v-if="editingQuestionIndex === indexQuestion"
        :questionsLength="questions.length"
        :indexQuestion="indexQuestion"
        :typeQuestion="typeQuestion"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import MenuSettings from '@/components/create-vote-page/menu-settings.vue'

const store = useStore()

const editingQuestionIndex = computed(
  () => store.getters['createVoteModule/getEditingQuestionIndex']
)
const questions = computed(() => store.getters['createVoteModule/getQuestions'])

function clickOnTheQuestionCard(index) {
  store.commit('createVoteModule/setEditingQuestionIndex', index)
}

function clickNotOnTheQuestionCard() {
  store.commit('createVoteModule/resetEditingQuestionIndex')
}

function recordTitleQuestion(titleQuestion, indexQuestion) {
  store.commit('createVoteModule/recordTitleQuestion', {
    titleQuestion,
    indexQuestion
  })
}

function recordTheAnswer(answer, indexQuestion, indexAnswer) {
  store.commit('createVoteModule/recordTheAnswer', {
    answer,
    indexQuestion,
    indexAnswer
  })
}

function deleteAnswer(indexQuestion, indexAnswer) {
  store.commit('createVoteModule/deleteAnswer', { indexQuestion, indexAnswer })
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
    position: relative;

    .title {
      margin-bottom: 8px;
      width: 100%;
      padding: 12px 0;
      border-radius: 12px;
      border: 0;
      text-align: center;
    }

    .answers {
      display: flex;
      flex-direction: column;

      .answer {
        display: flex;
        align-items: center;
        margin-top: 6px;

        .input {
          background: var(--neutral-color);
          padding: 12px;
          border-radius: 12px;
          border: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          input {
            width: 100%;
            border: 0;
            background: var(--neutral-color);
          }

          .radio-style {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            right: 16px;
            border: 2px solid var(--secondary-color);
          }

          .check-style {
            border-radius: 4px;
            width: 12px;
            height: 12px;
            right: 16px;
            border: 2px solid var(--secondary-color);
          }
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
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
