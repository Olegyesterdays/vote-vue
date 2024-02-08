<template>
  <div class="background">
    <div class="admin-panel">
      <div class="profile">
        <img class="ava" :src="ava" alt="аватарка">
        <button class="button create-vote" @click="$router.push('/createVote')">Создать голосование</button>
        <button class="button exit" @click="$router.push('/')">Выход</button>
      </div>
      <div class="voting-list">
        <input class="input vote-search" type="text" placeholder="Название голосования"/>
        <img v-if="voting.length === 0" class="logo" :src="OCRVLogo" alt="Логотип компании ОЦРВ">
        <div class="vote" v-for="({ titleVote }, index) in voting" :key="index">
          <span>{{ titleVote }}</span>
          <button @click="$router.push('/adminPage/statisticsVotePage')">inf0</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import ava from "@/assets/ava.jpg"
import OCRVLogo from "@/assets/OCRV-Logo.svg"

const store = useStore();
const voting = computed(() => store.getters["adminModule/getVote"]);
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .admin-panel {
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
      background: var(--neutral-light-theme);
      padding: 12px;
      border-radius: 12px;

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

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
