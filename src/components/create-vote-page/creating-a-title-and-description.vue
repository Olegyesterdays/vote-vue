<template>
  <div class="container">
    <img
        class="img"
        :src="ava"
        alt="Картинка голосования"
    />

    <button
        class="button"
        @click="addPicture"
    >
      {{ ava === "" ? "Добавить картинку" : "Удалить картинку"}}
    </button>

    <label class="title-vote">
      <input
          class="input"
          type="text"
          placeholder="Название голосования"
          @input="writeDownTitleVote($event.target.value)"
      >
    </label>

    <label class="description-vote">
      <input
          class="input"
          type="text"
          placeholder="Описание"
          @input="writeDownDescriptionVote($event.target.value)"
      >
    </label>

    <button
        class="add-participants"
        @click="addParticipants"
    >
      Добавить участников
    </button>
  </div>
</template>

<script setup>
import ava from "@/assets/ava.jpg"
import { useStore } from "vuex"

const store = useStore()

function addPicture() {

}

function writeDownTitleVote(title) {
  store.commit("createVoteModule/addTitle", { title: title })
}

function writeDownDescriptionVote(description) {
  store.commit("createVoteModule/addDescription", { description: description })
}

function addParticipants() {

}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background: var(--white-light-theme);
  border: 4px solid var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;

  .img {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
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
      background: var(--neutral-light-theme);
    }
  }

  .add-participants {
    margin: 4px 12px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-light-theme);

    &:hover {
      background: var(--accent-light-theme);
      color: var(--white-light-theme);
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
