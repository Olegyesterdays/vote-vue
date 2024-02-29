<template>
  <div
      class="severalAnswers"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <h3 class="title">
      {{ titleQuestion }}
    </h3>

    <label
        class="answer"
        v-for="({ text }, index) in options"
        :key="index"
    >
      {{ text }}
      <input
          class="check-box"
          type="checkbox"
          :value="text"
          v-model="severalAnswers"
          @change="handleSelection(titleQuestion)"
      >
      <span class="check-style" />
    </label>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, toRaw, computed} from "vue";
import {useStore} from "vuex"

const store = useStore()
const theme = computed(() => store.getters["getCurrentTheme"])

defineProps({
  titleQuestion: {
    type: String
  },

  options: {
    type: Array
  }
})

const emit = defineEmits();

const severalAnswers = ref([]);

const handleSelection = (title) => {
  emit('update:severalAnswers', {
    title: title,
    answer: toRaw(severalAnswers.value)
  });
};
</script>

<style scoped lang="scss">
.severalAnswers {
  box-sizing: border-box;
  box-shadow: 0 4px 6px var(--shadow-color);
  border-radius: 12px;
  padding: 8px;
  margin: auto;
  width: 900px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 0 auto;
  }

  .answer {
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
      right: 16px;
    }
  }
}

.dark-theme {
  border: 4px solid var(--additional-color-dark-theme);

  .answer {
    background: var(--additional-color-dark-theme);

    .check-box {
      &:checked + .check-style::before {
        background: var(--additional-dark-theme);
      }
    }

    .check-style {
      border: 2px solid var(--secondary-dark-theme);
    }
  }
}

.light-theme {
  border: 4px solid var(--additional-color-light-theme);

  .answer {
    background: var(--additional-color-light-theme);

    .check-box {
      &:checked + .check-style::before {
        background: var(--additional-light-theme);
      }
    }

    .check-style {
      border: 2px solid var(--secondary-light-theme);
    }
  }
}

@media screen and (max-width: 900px) {
  .severalAnswers {
    width: 100%;
  }
}
</style>
