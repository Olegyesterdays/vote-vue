<template>
  <div class="severalAnswers">
    <div class="title">{{ title }}</div>
    <label class="answer" v-for="(item, index) in answersToQuestions" :key="index">
      {{ item }}
      <input
          class="check-box"
          type="checkbox"
          :value="item"
          v-model="severalItems"
          @change="handleSelection(title, index)"
      >
      <span class="check-style" />
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
    position: relative;

    .check-box {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);

      &:checked + .check-style::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 2px;
        background: var(--additional-light-theme);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .check-style {
      position: absolute;
      border-radius: 4px;
      width: 12px;
      height: 12px;
      border: 2px solid var(--secondary-light-theme);
      right: 16px;
    }
  }
}
</style>
