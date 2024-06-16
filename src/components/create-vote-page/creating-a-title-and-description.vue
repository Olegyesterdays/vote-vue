<template>
  <div class="container">
    <label class="title-vote">
      <input
          class="input"
          type="text"
          :placeholder="$t('createVotePage.titleVote')"
          @input="writeDownTitleVote($event.target.value)"
      >
    </label>

    <label class="description-vote">
      <input
          class="input"
          type="text"
          :placeholder="$t('createVotePage.descriptionVote')"
          @input="writeDownDescriptionVote($event.target.value)"
      >
    </label>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore()

function writeDownTitleVote(title) {
  store.commit("createVoteModule/addTitle", { title: title })
}

function writeDownDescriptionVote(description) {
  store.commit("createVoteModule/addDescription", { description: description })
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 4px 6px var(--shadow-color);
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  background: var(--main-color);
  border: 4px solid var(--neutral-color);
  margin-top: 12px !important;

  .button {
    margin: 8px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }

  .title-vote, .description-vote {
    margin: 8px 12px;
    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 4px;
    }

    .input {
      padding: 12px;
      border-radius: 12px;
      border: 0;
      text-align: center;
    }
  }

  .description-vote {
    margin-bottom: 12px;

    .input {
      font-size: 20px;
    }
  }

  .title-vote {
    .input {
      font-size: 32px;
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
