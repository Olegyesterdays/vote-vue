<template>
  <div
      class="type-answer"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <div class="one-answer">
      <label>
        <input
            class="radio-button"
            type="radio"
            value="one answer"
            v-model="oneItems"
            @change="oneAnswer"
        >
        <span class="radio-style"/>
        Один ответ
      </label>
    </div>

    <div class="several-answers">
      <label>
        <input
            class="radio-button"
            type="radio"
            value="several answers"
            v-model="oneItems"
            @change="severalAnswers"
        >
        <span class="radio-style"/>
        Несколько ответов
      </label>
    </div>
  </div>
</template>

<script setup>
import {computed, defineEmits, ref} from 'vue'
import {useStore} from "vuex";

const store = useStore()
const emit = defineEmits();
const oneItems = ref([]);
const theme = computed(() => store.getters["getCurrentTheme"])

function oneAnswer() {
  emit('update:oneAnswer', "one answer");
}

function severalAnswers() {
  emit('update:severalAnswers', "several answers");
}
</script>

<style scoped lang="scss">
.type-answer {
  display: flex;
  flex-direction: column;

  .one-answer, .several-answers {
    margin-left: 24px;

    label {
      margin: 6px 0;
      display: block;

      .radio-button {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        padding-left: 24px;

        &:checked + .radio-style::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .radio-style {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-left: -24px;
      }
    }
  }
}

.dark-theme {
  .one-answer, .several-answers {
    label {
      .radio-button {
        &:checked + .radio-style::before {
          background: var(--additional-dark-theme);
        }
      }

      .radio-style {
        border: 2px solid var(--secondary-dark-theme);
      }
    }
  }
}

.light-theme {
  .one-answer, .several-answers {
    label {
      .radio-button {
        &:checked + .radio-style::before {
          background: var(--additional-light-theme);
        }
      }

      .radio-style {
        border: 2px solid var(--secondary-light-theme);
      }
    }
  }
}
</style>
