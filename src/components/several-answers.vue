<template>
  <div class="severalAnswers">
    <div class="title">{{ title }}</div>
    <label class="answer" v-for="(item, index) in answers" :key="index">
      <span>{{ item }}</span>
      <input type="checkbox" :value="item" v-model="selectedItems" @change="handleSelection(title)">
    </label>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, toRaw} from 'vue'

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
