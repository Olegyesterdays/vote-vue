<template>
  <div class="severalAnswers">
    <div class="title">{{ title }}</div>
    <label class="answer" v-for="(item, index) in answersToQuestions" :key="index">
      <span>{{ item }}</span>
      <input type="checkbox" :value="item" v-model="severalItems" @change="handleSelection(title, index)">
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRaw } from 'vue'

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

const severalItems = ref([]);

const handleSelection = (title, index) => {
  emit('update:severalItems', {
    title: title,
    answer: toRaw(severalItems.value)
  });
};
</script>

<style scoped lang="scss">
.severalAnswers {
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
