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
      class="input vote-search"
      type="text"
      :placeholder="$t('accountPage.voteSearchPlaceholder')"
      v-model="searchText"
    />
    <!--        <img v-if="filteredVoting.length === 0" class="logo" :src="OCRVLogo" alt="Логотип компании ОЦРВ">-->
    <div class="voting">
      <div class="vote"
           v-for="({ titleVote, date , voteID}, index) in filteredVoting"
           :key="index"
      >
        <span @click="goToVote(voteID)">{{ titleVote }}</span>
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
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsVertical } from '@mdi/js'

import { useRouter } from 'vue-router'

const router = useRouter()
import OCRVLogo from '@/assets/OCRV-Logo.svg'

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
  width: 1000px;
  padding: 8px;
  border-radius: 12px;

  &-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .my-vote {

    }

    .new {

    }

    .passed {

    }

    .button {
      padding: 12px;
      border: 0;
      background: var(--neutral-light-theme) !important;
      color: var(--black-light-theme);
      margin-bottom: 8px;
      width: 100%;

      &:hover {
        color: var(--accent-light-theme);
      }
    }

    .button__active {
      border-bottom: 4px solid var(--accent-light-theme);
    }
  }

  .voting {
    height: 304px;
    margin-top: 8px;
    padding-right: 8px;
    overflow: hidden;
    overflow-y: auto;

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
      align-items: center;
      border-radius: 8px;
      background: var(--white-light-theme);
      margin-top: 8px;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 4px 6px var(--shadow-color);
      border-bottom: 4px solid var(--white-light-theme);
      border-top: 4px solid var(--white-light-theme);
      height: 32px;

      &:first-child {
        margin: 0;
      }

      &:hover {
        border-bottom: 4px solid var(--white-light-theme);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 4px solid var(--accent-light-theme);
      }

      .date {
        //height: 32px;
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

  .logo {
    top: 30%;
    margin-top: 40%;
    opacity: 0.3;
    pointer-events: none;
  }

  .input {
    box-shadow: 0 4px 6px var(--shadow-color);
    background: var(--white-light-theme);
    border: 0;
    width: 968px;
  }
}

</style>
