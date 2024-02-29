<template>
  <div
      class="vote-panel"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <div class="vote-type">
      <button
          class="button my-vote"
          :class="voteType === 'MyVote' ? 'button__active' : ''"
          @click="myVote"
      >
        {{ $t("accountPage.myVotes") }}
      </button>

      <button
          class="button new-vote"
          :class="[
              theme === 'dark' ? 'dark-theme' : 'light-theme',
              voteType === 'NewVote' ? 'button__active' : ''
          ]"
          @click="newVote"
      >
        {{ $t("accountPage.new") }}
      </button>

      <button
          class="button passed"
          :class="[
              theme === 'dark' ? 'dark-theme' : 'light-theme',
              voteType === 'Passed' ? 'button__active' : ''
          ]"
          @click="passed"
      >
        {{ $t("accountPage.passed") }}
      </button>
    </div>

    <input
        class="input"
        type="text"
        :placeholder="$t('accountPage.nameVote')"
        v-model="searchText"
    />

    <div class="vote-list">
      <VoteItem
          class="item"
          v-for="(vote, index) in filteredVoting"
          :key="index"
          :title="vote.title"
          :date="vote.date"
          :userID="vote.voteID"
          :typeVote="voteType"
      />
    </div>
  </div>
</template>

<script setup>
import VoteItem from "@/components/account-page/vote-item.vue";
import {computed, ref} from "vue"
import {useStore} from "vuex"

const store = useStore()
const theme = computed(() => store.getters["getCurrentTheme"])
const voteType = computed(() => store.getters["accountModule/getVoteType"]);
const voting = computed(() => store.getters[`accountModule/get${voteType.value}`] || []);
const searchText = ref('')

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase()
  return voting.value.filter(vote => vote.title.toLowerCase().includes(search))
})

function myVote() {
  store.commit("accountModule/voteTypeMyVote")
}

function newVote() {
  store.commit("accountModule/voteTypeNewVote")
}

function passed() {
  store.commit("accountModule/voteTypePassed")
}
</script>

<style scoped lang="scss">
.vote-panel {
  width: 900px;
  display: flex;
  flex-direction: column;

  .vote-type {
    width: auto;
    display: flex;
    margin: 0 12px 8px;

    .button {
      border: 0;
      padding: 12px;
      width: 100%;
    }
  }

  .input {
    width: auto;
    margin: 0 12px;
    border: 0;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 6px var(--shadow-color);
  }

  .vote-list {
    padding-right: 8px;
    width: auto;
    display: flex;
    flex-direction: column;
    margin: 8px 12px 12px;
    height: 60vh;
    overflow: hidden;
    overflow-y: auto;

    .item {
      width: auto;

      &:first-child{
        margin: 0;
      }
    }
  }
}

.dark-theme {
  .vote-type {
    .button {
      background: var(--additional-color-dark-theme);
      margin-bottom: 4px;

      &__active {
        margin-bottom: 0;
        border-bottom: 4px solid var(--accent-dark-theme);
      }
    }
  }

  .input {
    background: var(--main-color-dark-theme);
  }
}

.light-theme {
  .vote-type {
    .button {
      background: var(--additional-color-light-theme);
      margin-bottom: 4px;

      &__active {
        margin-bottom: 0;
        border-bottom: 4px solid var(--accent-light-theme);
      }
    }
  }

  .input {
    background: var(--main-color-light-theme);
  }
}

@media screen and (max-width: 900px) {
  .vote-panel {
    width: 100%;
  }
}

@media screen and (max-width: 375px) {
  .vote-panel {
    .vote-type {
      display: flex;
      flex-direction: column;

    }
  }
}
</style>
