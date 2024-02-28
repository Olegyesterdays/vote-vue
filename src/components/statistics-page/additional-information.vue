<template>
  <div class="container">
    <div class="content">
      <div class="additional-information">
        <div class="item number-of-questions">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.numberOfQuestions") }}
          </div>
          <div class="number">
            {{ numberOfQuestions }}
          </div>
        </div>

        <div class="item date-of-creation">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.dateOfCreation") }}
          </div>
          <div class="date">
            {{ dateOfCreation }}
          </div>
        </div>

        <div class="item number-of-participants">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.numberOfParticipants") }}
          </div>
          <div class="number">
            {{ numberOfParticipants }}
          </div>
        </div>
      </div>

      <button class="button end-voting" @click="endVoting">
        {{ $t("statisticsPage.additionalInformation.endVoting") }}
      </button>

      <button class="button delete-vote" @click="deleteVoting">
        {{ $t("statisticsPage.additionalInformation.deleteVoting") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const numberOfQuestions = computed(() => store.getters['statisticsModule/getNumberOfQuestions'])
const dateOfCreation = computed(() => store.getters['statisticsModule/getDateOfCreation'])
const numberOfParticipants = computed(() => store.getters['statisticsModule/getNumberOfParticipants'])

function endVoting() {
  store.dispatch("statisticsModule/endVoting")
}

async function deleteVoting() {
  await store.dispatch("statisticsModule/deleteVoting")
  await router.push('/account')
}
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  border-radius: 12px;
  background: var(--white-light-theme);
  border: 4px solid var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);

  .content {
    display: flex;
    flex-direction: column;

    .additional-information {
      margin: 12px 12px 4px;
      border-radius: 12px;

      .item {
        margin: 12px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .button {
      margin: 8px 12px;
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: var(--neutral-light-theme);

      &:hover {
        background: var(--accent-light-theme);
        color: var(--white-light-theme);
      }
    }

    .delete-vote {
      margin-bottom: 12px;
    }
  }
}
</style>
