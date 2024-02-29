<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
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
        class="button add-participants"
        @click="addParticipants"
    >
      Добавить участников
    </button>
  </div>
</template>

<script setup>
import ava from "@/assets/ava.jpg";
import { useStore } from "vuex";
import {computed} from "vue";

const store = useStore()

const theme = computed(() => store.getters["getCurrentTheme"])
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
    }
  }

  .add-participants {
    margin: 4px 12px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
  }
}

.dark-theme {
  background: var(--main-color-dark-theme);
  border: 4px solid var(--additional-color-dark-theme);

  .button {
    background: var(--additional-color-dark-theme);

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--main-color-dark-theme);
    }
  }

  .input {
    background: var(--additional-color-dark-theme);
  }
}

.light-theme {
  background: var(--main-color-light-theme);
  border: 4px solid var(--additional-color-light-theme);

  .button {
    background: var(--additional-color-light-theme);

    &:hover {
      background: var(--accent-light-theme);
      color: var(--main-color-light-theme);
    }
  }

  .input {
    background: var(--additional-color-light-theme);
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
