<template>
  <div class="userAnswers">
    <div class="title">{{ title }}</div>
    <div class="answer" v-for="(answer, index) in answersToQuestions" :key="index">
      <span>{{ answer }}</span>
      <input type="text" @input="updateInputValue($event.target.value, index)"  placeholder="Введите текст">
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, toRaw } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: "title"
  },
  answersToQuestions: {
    type: Array,
    default: []
  }
})

const inputValues = ref([]);
const submitted = ref(false);
const submittedAnswers = ref([]);
const emit = defineEmits();

function updateInputValue(value, index) {
  inputValues.value[index] = value;
  submitted.value = true;
  submittedAnswers.value = inputValues.value.slice();
  handleSelection();
}

function handleSelection() {
  emit('update:userItems', {
    title: props.title,
    answer: toRaw(submittedAnswers.value)
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
