<template>
  <div class="container">
    <h3 class="question">
      {{ question }}
    </h3>

    <div class="answers">
      <div
          class="answer"
          v-for="({ title, percent }, index) in answers"
          :key="index"
      >
        <div class="answer-title">
          <span class="answer-title-text">{{ title }}</span>
          <span class="answer-title-percent">{{ percent }} %</span>
        </div>
        <progress class="progress" max="100" :value="percent"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  question: {
    type: String,
    default: "Text"
  },

  answers: {
    type: Array,
    default: []
  }
})
</script>

<style scoped lang="scss">
.container {
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: auto;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 4px solid var(--neutral-color);
  background: var(--main-color);

  .question {
    margin: 12px auto 6px;
  }

  .answers {
    width: 100%;
    margin-bottom: 12px;

    .answer {
      padding: 4px 12px;

      &-title {
        display: flex;
        justify-content: space-between;
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
          background: var(--neutral-color);
        }

        &::-webkit-progress-value {
          background-color: var(--accent-color);
        }

        &::-webkit-progress-bar,
        &::-webkit-progress-value, {
          border-radius: 10px;
        }

        &::-moz-progress-bar {
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
