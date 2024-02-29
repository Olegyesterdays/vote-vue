<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <VoteContent />

    <div class="questions">
      <div
          class="question"
          v-for="({ titleQuestion, typeQuestion, options }, index) in questions"
          :key="index"
      >
        <OneAnswer
            v-if="typeQuestion === 'one answer'"
            :titleQuestion="titleQuestion"
            :options="options"
            @update:oneAnswer="handleOneItems($event)"
        />

        <SeveralAnswers
            v-if="typeQuestion === 'several answers'"
            :titleQuestion="titleQuestion"
            :options="options"
            @update:severalAnswers="handleSeveralItems($event)"
        />
      </div>
    </div>

    <button
        @click="sendAnswers"
        class="sendAnswers"
    >
      Отправить
    </button>
  </div>
</template>

<script setup>
import VoteContent from "@/components/vote-page/vote-content.vue";
import OneAnswer from "@/components/vote-page/one-answer.vue";
import SeveralAnswers from "@/components/vote-page/several-answers.vue";
import { computed, ref, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])
const questions = computed(() => store.getters["voteModule/getQuestions"]);
const oneAnswer = ref([]);
const severalAnswers = ref([]);

function handleOneItems(items) {
  oneAnswer.value = items;
  // console.log(toRaw(oneAnswer.value));
  store.commit("voteModule/writeDownAnswer", {
    payload: toRaw(oneAnswer.value)
  });
}

function handleSeveralItems(items) {
  severalAnswers.value = items;
  // console.log(toRaw(severalAnswers.value));
  store.commit("voteModule/writeDownAnswer", {
    payload: toRaw(severalAnswers.value)
  });
}

function sendAnswers() {
  store.dispatch("voteModule/sendAnswers")
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  .questions {
    .question {
      margin-bottom: 8px;
    }
  }

  .sendAnswers {
    width: 900px;
    padding: 12px;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
    border-radius: 12px;
    margin: 0 auto 40px;
  }
}

.dark-theme {
  .sendAnswers {
    background: var(--additional-color-dark-theme);

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--main-color-dark-theme);
    }
  }
}

.light-theme {
  .sendAnswers {
    background: var(--additional-color-light-theme);

    &:hover {
      background: var(--accent-light-theme);
      color: var(--main-color-light-theme);
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    .sendAnswers {
      width: 100%;
    }
  }
}
</style>
