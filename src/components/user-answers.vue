<template>
  <div class="userAnswers">
    <div class="title">{{ title }}</div>
    <div class="answer" :class="`answer-${ index }`" v-for="(_, index) in answers" :key="index">
      <div class="label">{{ answers[index] }}</div>
      <input type="text">
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRaw } from 'vue'

defineProps({
  title: {
    type: String,
    default: "title"
  },
  answers: {
    type: Array,
    default: []
  }
})

const emit = defineEmits();

const selectedItems = ref([]);

const handleSelection = (title) => {
  emit('update:selectedItems', {
    title: title,
    answer: toRaw(selectedItems.value)
  });
};
</script>

<style scoped lang="scss">
.userAnswers {
  display: flex;
  flex-direction: column;

  .title {
    margin: 0 auto;
  }

  .answer {
    display: flex;
    flex-direction: column;

    .label {
      margin-top: 8px;
    }

    input {
      margin-top: 8px;
      border-radius: 12px;
      padding: 16px;
      background: var(--neutral-light-theme);
      border: 0;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
