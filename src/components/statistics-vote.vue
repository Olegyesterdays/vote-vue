<template>
  <div class="statistics">
    <div class="item voting-title">
      <img class="voting-title-img" :src="ava" alt="Картинка голосования"/>
      <div class="voting-header">
        <div class="voting-header-title">{{ votingTitle }}</div>
        <div class="voting-header-description">{{ description }}</div>
      </div>
    </div>

    <div class="questions">
      <div class="item" v-for="({ title, answersToQuestions }, index) in questions" :key="index">
        <span class="item-title">{{ title }}</span>
        <div class="answers">
          <div class="answer" v-for="({ title, voteCount }, index) in answersToQuestions" :key="index">
            <div class="answer-title">
              <span>{{ title }}</span>
              <span>{{ voteCount }} %</span>
            </div>
            <progress class="progress" max="100" :value="voteCount"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import ava from "@/assets/ava.jpg"

const store = useStore();

const questions = computed(() => store.getters["statisticsModule/getQuestions"]);
const votingTitle = computed(() => store.getters["statisticsModule/getVotingTitle"]);
const description = computed(() => store.getters["statisticsModule/getDescription"]);
</script>

<style scoped lang="scss">
.statistics {
  width: 800px;
  padding: 8px;
  border-radius: 8px;
  background: var(--white-light-theme);

  .voting-title {
    padding: 8px;
    border-radius: 8px;
    background: var(--neutral-light-theme);
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px var(--shadow-color);

    .voting-title-img {
      width: 500px;
      margin: auto;
      padding: 12px;
      background: var(--white-light-theme);
      border-radius: 12px;
      box-shadow: 0 4px 6px var(--shadow-color);
    }

    .voting-header {
      margin-top: 8px;
      padding: 12px;
      border-radius: 12px;
      background: var(--white-light-theme);
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 6px var(--shadow-color);

      &-title {
        margin: auto;
      }

      &-description {
        margin: auto;
      }
    }
  }

  .questions {
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 8px solid var(--neutral-light-theme);
    margin-top: 8px;
    padding-right: 8px;
    border-radius: 8px;
    background: var(--neutral-light-theme);
    height: 600px ;
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
      background: var(--accent-light-theme);
    }

    .item {
      box-shadow: 0 4px 6px var(--shadow-color);
      margin-bottom: 16px;
      padding: 12px;
      border-radius: 8px;
      background: var(--white-light-theme);
      display: flex;
      flex-direction: column;

      &-title {
        margin: 0 auto;
      }

      &:last-child {
        margin: 0;
      }

      .answers {
        margin-top: 8px;

        .answer {
          display: flex;
          flex-direction: column;
          padding-bottom: 8px;

          &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          &:last-child {
            padding: 0;
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
