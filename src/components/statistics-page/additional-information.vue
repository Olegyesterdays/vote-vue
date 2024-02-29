<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
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

const theme = computed(() => store.getters["getCurrentTheme"])
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
    }

    .delete-vote {
      margin-bottom: 12px;
    }
  }
}

.dark-theme {
  background: var(--main-color-dark-theme);
  border: 4px solid var(--additional-color-dark-theme);

  .content {
    .button {
      background: var(--additional-color-dark-theme);

      &:hover {
        background: var(--accent-dark-theme);
        color: var(--main-color-dark-theme);
      }
    }
  }
}

.light-theme {
  background: var(--main-color-light-theme);
  border: 4px solid var(--additional-color-light-theme);

  .content {
    .button {
      background: var(--additional-color-light-theme);

      &:hover {
        background: var(--accent-light-theme);
        color: var(--main-color-light-theme);
      }
    }
  }
}
</style>
