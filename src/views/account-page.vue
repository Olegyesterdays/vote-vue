<template>
  <div class="background">
    <div class="account-panel">
      <div class="profile">
        <img class="ava" :src="ava" alt="аватарка">
        <button class="button create-vote" @click="$router.push('/account/createVote')">Создать голосование</button>
        <button class="button">Настройки</button>
        <button class="button exit" @click="exit">Выход</button>
      </div>
      <div class="voting-list">
        <div class="voting-list-type">
          <button
              @click="votingTypeSelection('getMyVote')"
              class="button my-vote"
              :class="typeVote === 'getMyVote' ? 'button__active' : ''"
          >
            Мои голосования
          </button>

          <button
              @click="votingTypeSelection('getNew')"
              class="button new"
              :class="typeVote === 'getNew' ? 'button__active' : ''"
          >
            Новые
          </button>

          <button
              @click="votingTypeSelection('getPassed')"
              class="button passed"
              :class="typeVote === 'getPassed' ? 'button__active' : ''"
          >
            Пройденные
          </button>
        </div>
        <input class="input vote-search" type="text" placeholder="Название голосования"/>
        <img v-if="voting.length === 0" class="logo" :src="OCRVLogo" alt="Логотип компании ОЦРВ">
        <div class="vote" v-for="({ titleVote }, index) in voting" :key="index">
          <span>{{ titleVote }}</span>
          <button v-if="typeVote === 'getMyVote'" @click="$router.push('/account/statisticsVotePage')">info</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import ava from "@/assets/ava.jpg"
import OCRVLogo from "@/assets/OCRV-Logo.svg"

const store = useStore();
const router = useRouter();
const typeVote = ref("getMyVote")
const voting = computed(() => store.getters[`accountModule/${typeVote.value}`]);

function votingTypeSelection(type) {
  voting.value = computed(() => store.getters[`accountModule/${type}`]);
  typeVote.value = type
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
    padding: 20px;
    border-radius: 20px;
    background: var(--secondary-light-theme);

    .profile {
      margin-right: 20px;
      background: var(--neutral-light-theme);
      padding: 12px;
      border-radius: 12px;
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
        border-radius: 16px;
        background: var(--secondary-light-theme);
        border: 0;

        &:hover {
          background: var(--accent-light-theme);
          color: var(--white-light-theme);
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }

    .voting-list {
      width: 1000px;
      background: var(--neutral-light-theme);
      padding: 12px;
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
          background: var(--neutral-light-theme);
          margin-bottom: 8px;
          width: 100%;
        }

        .button__active {
          border-bottom: 4px solid var(--secondary-light-theme);
        }
      }

      .vote {
        align-items: center;
        border-radius: 8px;
        background: var(--secondary-light-theme);
        margin-top: 8px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
      }

      .logo {
        top: 30%;
        margin-top: 40%;
        opacity: 0.3;
        pointer-events: none;
      }

      .input {
        border-radius: 12px;
        padding: 16px;
        background: var(--secondary-light-theme);
        border: 0;
        width: 968px;

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
