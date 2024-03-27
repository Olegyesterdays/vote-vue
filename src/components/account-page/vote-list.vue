<template>
  <div class="container">
    <Tabs :theNumberOfNotPassedVotes="votingNotPassed.length" />

    <input
        class="input"
        type="text"
        :placeholder="$t('accountPage.nameVote')"
        v-model="searchText"
    />

    <div class="vote-list">
      <MyVoteItem
          v-for="({
              quiz_id,
              title,
              description,
              img,
              published_on,
              closed_on
          }, index) in voteType === 'NotPassed' ? votingNotPassed : votingPassed"
          :key="index"
          :title="title"
          :voteID="quiz_id"
      />
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import MyVoteItem from "@/components/account-page/my-vote-item.vue";
import Tabs from "@/components/account-page/tabs.vue";

const store = useStore();
const router = useRouter();
const voteType = computed(() => store.getters["accountModule/getVoteType"]);
const votingNotPassed = computed(() => store.getters["accountModule/getNotPassed"]);
const votingPassed = computed(() => store.getters["accountModule/getPassed"]);
const searchText = ref('');


onMounted(() => {
  store.dispatch("accountModule/onlyNotCompleted")
  store.dispatch("accountModule/onlyCompleted")
})

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase()
  return voting.value.filter(vote => vote.title.toLowerCase().includes(search))
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .input {
    width: 1000px;
    margin: 0 auto 12px;
    border-radius: 40px;
    padding: 16px;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 4px solid var(--additional-color__30);
    box-sizing: border-box;
  }

  .vote-list {
    width: 1000px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
}

@media screen and (max-width: 1012px) {
  .container {
    margin: 0 12px;

    .tabs, .vote-list, .input {
      width: 100%;
    }

    .vote-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
