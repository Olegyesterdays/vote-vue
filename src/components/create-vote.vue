<template>
  <div class="create-vote-panel">
    <button
        class="button"
        @click="addImg"
    >
      {{ $t("createVotePage.createVote.addImg")}}
    </button>

    <div class="input input-title">
      <span>
        {{ $t("createVotePage.createVote.title")}}
      </span>
      <input type="text" @input="addTitle($event.target.value)" />
    </div>

    <div class="input input-description">
      <span>
        {{ $t("createVotePage.createVote.description")}}
      </span>
      <input type="text" @input="addDescription($event.target.value)" />
    </div>

    <button
        class="button button-search"
        @click="addSearch"
    >
      {{ $t("createVotePage.createVote.search")}}
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

function addImg() {

}

function addTitle( title ) {
  store.commit('createVoteModule/addTitle', { title: title })
}

function addDescription( description ) {
  store.commit('createVoteModule/addDescription', { description: description })
}

function addSearch() {

}
</script>

<style scoped lang="scss">
.create-vote-panel {
  padding: 12px;
  border-radius: 20px;
  background: var(--neutral-light-theme);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px var(--shadow-color);

  .button {
    background: var(--white-light-theme);

    &-search {
      margin-top: 8px;
    }
  }

  .input {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 8px;
    }

    &-title, &-description {
      margin-top: 8px;
    }
  }
}
</style>
