<template>
  <div class="statistics">
    <div class="voting-information">
      <img class="voting-img" :src="ava" alt="Картинка голосования" />
      <div class="voting">
        <div class="voting-title">
          {{ votingTitle }}
        </div>
        <div class="voting-description">
          {{ description }}
        </div>
      </div>
    </div>

    <div class="voting-statistics">
      <div class="question" v-for="({ title, answersToQuestions }, index) in questions" :key="index">
        <div class="question-title">{{ title }}</div>
        <div class="answers">
          <div class="answer" v-for="({ title, voteCount }, index) in answersToQuestions" :key="index">
            <div class="answer-title">
              <span class="answer-text">{{ title }}</span>
              <span class="percent">{{ voteCount }} %</span>
            </div>
            <progress class="progress" max="100" :value="voteCount"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

import ava from "@/assets/ava.jpg"

const store = useStore();

const questions = computed(() => store.getters["statisticsModule/getQuestions"]);
const votingTitle = computed(() => store.getters["statisticsModule/getVotingTitle"]);
const description = computed(() => store.getters["statisticsModule/getDescription"]);
</script>

<style scoped lang="scss">
.statistics {
  width: 100%;
  margin-top: 8px;
  background: var(--white-light-theme);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  .voting-information {
    padding: 12px;
    background: var(--neutral-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border-radius: 16px;
    display: flex;
    flex-direction: column;

    .voting-img {
      margin: auto;
      width: 100%;
      max-width: 500px;
      border-radius: 12px;
      background: var(--white-light-theme);
    }

    .voting {
      margin-top: 8px;
      padding: 12px;
      border-radius: 12px;
      background: var(--white-light-theme);
      box-shadow: 0 4px 6px var(--shadow-color);
      display: flex;
      flex-direction: column;

      &-title {
        margin: auto;
      }

      &-description {
        margin: 8px auto 0;
      }
    }
  }

  .voting-statistics {
    margin-top: 12px;
    padding: 12px;
    background: var(--neutral-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border-radius: 16px;
    display: flex;
    flex-direction: column;

    .question {
      padding: 12px;
      border-radius: 12px;
      background: var(--white-light-theme);
      box-shadow: 0 4px 6px var(--shadow-color);
      margin-top: 8px;
      display: flex;
      flex-direction: column;

      &:first-child {
        margin: 0;
      }

      &-title {
        margin: auto;
      }

      .answers {

        .answer {
          margin: 8px;

          &-title {
            display: flex;
            justify-content: space-between;

            //.answer-text {
            //  width: 95%;
            //}
            //
            //.percent {
            //  text-align: center;
            //  width: 5%;
            //}
          }

          .progress {
            margin-top: 8px;
            width: 100%;
            -webkit-appearance: none;
            appearance: none;
            border: none;
            border-radius: 10px;
            height: 10px;

            &::-webkit-progress-bar {
              background: var(--neutral-light-theme);
            }

            &::-webkit-progress-bar,
            &::-webkit-progress-value {
              border-radius: 10px;
            }

            &::-moz-progress-bar {
              border-radius: 10px;
            }

            &::-webkit-progress-value {
              background-color: var(--accent-light-theme);
            }
          }
        }
      }
    }
  }
}
</style>
