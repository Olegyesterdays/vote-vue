<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
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
import {computed, defineProps} from "vue";
import {useStore} from "vuex";

const store = useStore()
const theme = computed(() => store.getters["getCurrentTheme"])

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
  box-shadow: 0 4px 6px var(--shadow-color);
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: auto;

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

.dark-theme {
  border: 4px solid var(--additional-color-dark-theme);
  background: var(--main-color-dark-theme);

  .progress {
    &::-webkit-progress-bar {
      background: var(--additional-color-dark-theme);
    }

    &::-webkit-progress-value {
      background-color: var(--accent-dark-theme);
    }
  }
}

.light-theme {
  border: 4px solid var(--additional-color-light-theme);
  background: var(--main-color-light-theme);

  .progress {
    &::-webkit-progress-bar {
      background: var(--additional-color-light-theme);
    }

    &::-webkit-progress-value {
      background-color: var(--accent-light-theme);
    }
  }
}
</style>
