<template>
  <div class="oneAnswers">
    <div class="title">{{ title }}</div>
    <label class="answer" v-for="(item, index) in answersToQuestions" :key="index">
      {{ item }}
      <input
          class="radio-button"
          type="radio"
          :value="item"
          v-model="oneItems"
          @change="handleSelection(title)"
      >
      <span class="radio-style" />
    </label>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref} from 'vue'

defineProps({
  title: {
    type: String,
    default: "title"
  },
  answersToQuestions: {
    type: Array,
    default: []
  }
})

const emit = defineEmits();

const oneItems = ref([]);

const handleSelection = (title) => {
  emit('update:oneItems', {
    title: title,
    answer: oneItems.value
  });
};
</script>

<style scoped lang="scss">
.oneAnswers {
  display: flex;
  flex-direction: column;

  .title {
    margin: 0 auto;
  }

  .answer {
    background: var(--neutral-light-theme);
    margin-top: 8px;
    border-radius: 12px;
    padding: 16px;
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
</style>
