<template>
  <div class="oneAnswers">
    <div class="title">{{ title }}</div>
    <label class="answer" v-for="(item, index) in answersToQuestions" :key="index">
      <span>{{ item }}</span>
      <input type="radio" :value="item" v-model="oneItems" @change="handleSelection(title)">
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
  }
}
</style>
