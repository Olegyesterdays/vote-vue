<template>
  <div class="voting-list">
    <div class="voting-list-type">
      <button
        v-if="role === 'admin'"
        @click="votingTypeSelection('getMyVote')"
        class="button my-vote"
        :class="typeVote === 'getMyVote' ? 'button__active' : ''"
      >
        {{ $t('accountPage.votingList.myVote') }}
      </button>

      <button
        @click="votingTypeSelection('getNew')"
        class="button new"
        :class="typeVote === 'getNew' ? 'button__active' : ''"
      >
        {{ $t('accountPage.votingList.new') }}
      </button>

      <button
        @click="votingTypeSelection('getPassed')"
        class="button passed"
        :class="typeVote === 'getPassed' ? 'button__active' : ''"
      >
        {{ $t('accountPage.votingList.passed') }}
      </button>
    </div>
    <input
      class="input"
      type="text"
      :placeholder="$t('accountPage.voteSearchPlaceholder')"
      v-model="searchText"
    />
    <div class="voting">
      <div class="vote"
           v-for="({ titleVote, date , voteID}, index) in filteredVoting"
           :key="index"
      >
        <span class="titleVote" @click="goToVote(voteID)">{{ titleVote }}</span>
        <span class="date" v-if="typeVote !== 'getMyVote'">{{ date }}</span>
        <svg-icon
          class="button-info"
          v-if="typeVote === 'getMyVote'"
          @click="statistics(voteID)"
          type="mdi"
          :path="mdiDotsVertical"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import OCRVLogo from '@/assets/OCRV-Logo.svg'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsVertical } from '@mdi/js'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const role = ref(localStorage.getItem('role'))
const typeVote = ref('getMyVote')
const voting = computed(() => store.getters[`accountModule/${typeVote.value}`])
const searchText = ref('')

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase()
  return voting.value.filter(vote => vote.titleVote.toLowerCase().includes(search))
})

function votingTypeSelection(type) {
  typeVote.value = type
}

function statistics(voteID) {
  store.commit('statisticsModule/voteID', { voteID: voteID })
  router.push('/account/statisticsVotePage')
}

function goToVote(voteID) {
  router.push('/vote')
}
</script>

<style scoped lang="scss">
.voting-list {
  margin: 12px 12px 12px 0;
  display: flex;
  flex-direction: column;
  width: 75%;

  &-type {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    .button {
      width: 100%;
      background: var(--neutral-light-theme);
      border-bottom: 4px solid var(--neutral-light-theme);
      border-radius: 0;

      &:hover {
        background: var(--neutral-light-theme) !important;
        color: var(--accent-light-theme);
      }

      &__active {
        border-bottom: 4px solid var(--accent-light-theme) !important;
      }
    }
  }

  .input {
    box-shadow: 0 4px 6px var(--shadow-color);
  }

  .voting {
    height: 312px;
    margin-top: 8px;
    overflow: hidden;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
      border: 0;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: var(--accent-light-theme);
    }

    .vote {
      box-shadow: 0 4px 6px var(--shadow-color);
      width: auto;
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 8px;
      background: var(--white-light-theme);
      height: 32px;
      align-items: center;

      &:last-child {
        margin: 0;
      }

      .titleVote {

      }

      .date {

      }

      .button-info {
        padding: 4px;
        border-radius: 50%;

        &:hover {
          background: var(--neutral-light-theme);
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .voting-list-type {
    display: flex;
    flex-direction: column;
  }
}
</style>
