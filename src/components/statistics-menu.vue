<template>
  <div class="background">
    <div class="menu">
      <button class="menu-item button" @click="$router.push('/account')">
        {{ $t("statisticsVotePage.statisticsMenu.back")}}
      </button>

      <div class="data">
        <div class="menu-item item-number-of-questions">
      <span>
        {{ $t("statisticsVotePage.statisticsMenu.numberOfQuestions")}}
      </span>
          <span>{{ numberOfQuestions }}</span>
        </div>

        <div class="menu-item item-creation-date">
      <span>
        {{ $t("statisticsVotePage.statisticsMenu.creationDate")}}
      </span>
          <span>{{ creationDate }}</span>
        </div>

        <div class="menu-item item-number-of-participants">
      <span>
        {{ $t("statisticsVotePage.statisticsMenu.numberOfParticipants")}}
      </span>
          <span>{{ numberOfParticipants }}</span>
        </div>
      </div>

      <button class="menu-item button">
        {{ $t("statisticsVotePage.statisticsMenu.closeTheVote")}}
      </button>
      <button class="menu-item button end">
        {{ $t("statisticsVotePage.statisticsMenu.deleteVote")}}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const numberOfQuestions = computed(() => store.getters["statisticsModule/getNumberOfQuestions"]);
const creationDate = computed(() => store.getters["statisticsModule/getCreationDate"]);
const numberOfParticipants = computed(() => store.getters["statisticsModule/getNumberOfParticipants"]);
</script>

<style scoped lang="scss">
.background {
  padding: 8px 0 8px 8px;
  border-radius: 8px;

  .menu {
    background: var(--neutral-light-theme);
    padding: 8px;
    border-radius: 8px;
    margin-bottom: auto;
    box-shadow: 0 4px 6px var(--shadow-color);

    .data {
      padding: 8px;
      box-shadow: 0 4px 6px var(--shadow-color);
      background: var(--white-light-theme);
      margin: 8px 0;
      border-radius: 8px;
    }

    .button {
      background: var(--white-light-theme);
      border: 0;
      border-radius: 8px;
      padding: 8px;
      justify-content: center !important;
      box-shadow: 0 4px 6px var(--shadow-color);
    }

    .end {
      margin: 0 !important;
    }

    &-item {
      margin-bottom: 8px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
