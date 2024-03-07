<template>
  <div class="vote-panel">
    <div class="vote-type">
      <button
          v-if="role === 'admin' || 'super-admin'"
          class="button my-vote"
          :class="voteType === 'MyVote' ? 'button__active' : ''"
          @click="myVote"
      >
        <span class="text">{{ $t("accountPage.myVotes") }} </span>
        <span class="mdi mdi-pencil-outline" />
      </button>

      <button
          class="button new-vote"
          :class="voteType === 'NewVote' ? 'button__active' : ''"
          @click="newVote"
      >
        <span class="text">{{ $t("accountPage.new") }}</span>
        <span class="mdi mdi-account-alert-outline" />
      </button>

      <button
          class="button passed"
          :class="voteType === 'Passed' ? 'button__active' : ''"
          @click="passed"
      >
        <span class="text">{{ $t("accountPage.passed") }}</span>
        <span class="mdi mdi-account-outline" />
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

const role = computed(() => store.getters["userModule/getUserRole"]);
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
      background: var(--neutral-color);
      margin-bottom: 4px;

      .mdi {
        display: none;
      }

      &__active {
        margin-bottom: 0;
        border-bottom: 4px solid var(--accent-color);
      }
    }
  }

  .input {
    width: auto;
    margin: 0 12px;
    border: 0;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 6px var(--shadow-color);
    background: var(--main-color);
  }

  .vote-list {
    padding-right: 8px;
    width: auto;
    display: flex;
    flex-direction: column;
    margin: 8px 12px 12px;
    height: 50vh;
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

@media screen and (max-width: 900px) {
  .vote-panel {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .vote-panel {
    .vote-type {

      .button {
        .text {
          display: none;
        }

        .mdi {
          display: block;
          font-size: 32px;
        }
      }
    }
  }
}
</style>
