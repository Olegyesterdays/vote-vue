<template>
  <div class="type-answer">
    <div class="one-answer">
      <label class="answer">
        Один ответ
        <input
            class="radio-button"
            type="radio"
            value="one answer"
            v-model="oneItems"
            @change="oneAnswer"
        >
        <span class="radio-style"/>
      </label>
    </div>

    <div class="several-answers">
      <label class="answer">
        Несколько ответов
        <input
            class="radio-button"
            type="radio"
            value="several answers"
            v-model="oneItems"
            @change="severalAnswers"
        >
        <span class="radio-style"/>
      </label>
    </div>
  </div>
</template>

<script setup>
import {defineEmits, ref} from 'vue'

const emit = defineEmits();
const oneItems = ref([]);

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
    .answer {
      background: var(--neutral-light-theme);
      margin-top: 8px;
      border-radius: 12px;
      padding: 8px 0 8px 8px;
      display: flex;
      justify-content: space-between;
      position: relative;

      .radio-button {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);

        &:checked + .radio-style::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--additional-light-theme);
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
        border: 2px solid var(--secondary-light-theme);
        right: 16px;
      }
    }
  }
}
</style>
