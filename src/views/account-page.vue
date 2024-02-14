<template>
  <div class="background">
    <div class="account-panel">
      <div class="profile">
        <img class="ava" :src="ava" alt="аватарка">
        <button
            v-if="role === 'admin'"
            class="button create-vote"
            @click="$router.push('/account/createVote')"
        >
          {{ $t("accountPage.profile.createVoting")}}
        </button>
        <button class="button">
          {{ $t("accountPage.profile.settings")}}
        </button>
        <button class="button exit" @click="exit">
          {{ $t("accountPage.profile.exit")}}
        </button>
      </div>

      <div class="voting-list">
        <div class="voting-list-type">
          <button
              v-if="role === 'admin'"
              @click="votingTypeSelection('getMyVote')"
              class="button my-vote"
              :class="typeVote === 'getMyVote' ? 'button__active' : ''"
          >
            {{ $t("accountPage.votingList.myVote")}}
          </button>

          <button
              @click="votingTypeSelection('getNew')"
              class="button new"
              :class="typeVote === 'getNew' ? 'button__active' : ''"
          >
            {{ $t("accountPage.votingList.new")}}
          </button>

          <button
              @click="votingTypeSelection('getPassed')"
              class="button passed"
              :class="typeVote === 'getPassed' ? 'button__active' : ''"
          >
            {{ $t("accountPage.votingList.passed")}}
          </button>
        </div>

        <input class="input vote-search" type="text" :placeholder="$t('accountPage.voteSearchPlaceholder')" v-model="searchText"/>
        <!--        <img v-if="filteredVoting.length === 0" class="logo" :src="OCRVLogo" alt="Логотип компании ОЦРВ">-->
        <div class="voting">
          <div class="vote" v-for="({ titleVote, date , voteID}, index) in filteredVoting" :key="index">
            <span>{{ titleVote }}</span>
            <span class="date" v-if="typeVote !== 'getMyVote'">{{ date }}</span>
            <button v-if="typeVote === 'getMyVote'" @click="statistics(voteID)">info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import ava from "@/assets/ava.jpg";
import OCRVLogo from "@/assets/OCRV-Logo.svg";

const store = useStore();
const router = useRouter();

const role = ref(localStorage && localStorage.getItem('role'))
const typeVote = ref("getMyVote")
const voting = computed(() => store.getters[`accountModule/${typeVote.value}`]);
const searchText = ref("");

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase();
  return voting.value.filter(vote => vote.titleVote.toLowerCase().includes(search));
});

function votingTypeSelection(type) {
  typeVote.value = type;
}

function statistics(voteID) {
  store.commit("statisticsModule/voteID", { voteID: voteID})
  router.push("/account/statisticsVotePage");
}

async function exit() {
  await localStorage.removeItem('authToken');
  await localStorage.removeItem('role');
  router.push("/");
}
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .account-panel {
    margin: 40px auto;
    display: flex;
    padding: 8px;
    border-radius: 20px;
    background: var(--neutral-light-theme);

    .profile {
      padding: 8px;
      display: flex;
      flex-direction: column;

      .ava {
        border-radius: 50%;
        height: 200px;
        width: 200px;
        border: 4px solid var(--secondary-light-theme);
        pointer-events: none;
      }

      .button {
        margin-top: 12px;
        padding: 20px;
        width: 100%;
        border-radius: 8px;
        background: var(--secondary-light-theme);
        border: 0;
      }
    }

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
            color: var(--black-light-theme);
          }
        }

        .button__active {
          border-bottom: 4px solid var(--secondary-light-theme);
        }
      }

      .voting {
        height: 304px;
        margin-top: 8px;
        padding-right: 4px;
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
          background: var(--secondary-light-theme);
        }

        .vote {
          align-items: center;
          border-radius: 8px;
          background: var(--secondary-light-theme);
          margin-top: 8px;
          padding: 12px;
          display: flex;
          justify-content: space-between;

          &:first-child {
            margin: 0;
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
        background: var(--white-light-theme);
        border: 0;
        width: 968px;
      }
    }
  }
}
</style>
