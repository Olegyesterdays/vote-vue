<template>
  <div class="menu">
    <div class="data menu-item">
      <div class="item-number-of-questions">
        <span>
          {{ $t("statisticsVotePage.statisticsMenu.numberOfQuestions") }}
        </span>
        <span>
          {{ numberOfQuestions }}
        </span>
      </div>

      <div class="item-creation-date">
        <span>
          {{ $t("statisticsVotePage.statisticsMenu.creationDate") }}
        </span>
        <span>
          {{ creationDate }}
        </span>
      </div>

      <div class="item-number-of-participants">
        <span>
          {{ $t("statisticsVotePage.statisticsMenu.numberOfParticipants") }}
        </span>
        <span>
          {{ numberOfParticipants }}
        </span>
      </div>
    </div>

    <button class="menu-item button">
      {{ $t("statisticsVotePage.statisticsMenu.closeTheVote") }}
    </button>

    <button class="menu-item button end">
      {{ $t("statisticsVotePage.statisticsMenu.deleteVote") }}
    </button>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();

const numberOfQuestions = computed(() => store.getters["statisticsModule/getNumberOfQuestions"]);
const creationDate = computed(() => store.getters["statisticsModule/getCreationDate"]);
const numberOfParticipants = computed(() => store.getters["statisticsModule/getNumberOfParticipants"]);
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  background: var(--neutral-light-theme);
  border-radius: 12px;

  .menu-item {
    margin: 12px 12px 0;
    padding: 12px;
    background: var(--white-light-theme);
    border-radius: 12px;
  }

  .end {
    margin-bottom: 12px;
  }

  .item-number-of-questions, .item-creation-date, .item-number-of-participants {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
  }
}

</style>
