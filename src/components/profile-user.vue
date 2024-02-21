<template>
  <div class="profile">
    <img class="ava" :src="ava" alt="аватарка">
    <button
      v-if="role === 'admin'"
      class="button create-vote"
      @click="createVote"
    >
      {{ $t('accountPage.profile.createVoting') }}
    </button>

    <button
        class="button"
        @click="settings"
    >
      {{ $t('accountPage.profile.settings') }}
    </button>

    <button
        class="button exit"
        @click="exit"
    >
      {{ $t('accountPage.profile.exit') }}
    </button>
  </div>
</template>

<script setup>
import ava from '@/assets/ava.jpg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const role = ref(localStorage.getItem('role'))

function createVote() {
  router.push('/account/createVote')
}

function settings() {
  router.push('/account/settings')
}

function exit() {
  localStorage.removeItem('authToken')
  localStorage.removeItem('theme')
  localStorage.removeItem('role')
  router.push('/')
}
</script>

<style scoped lang="scss">
.profile {
  width: 25%;
  margin: 12px;
  display: flex;
  flex-direction: column;

  .ava {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    border: 4px solid var(--accent-light-theme);
    pointer-events: none;
    margin: 0 auto 12px;
  }

  .button {
    margin-bottom: 12px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    background: var(--white-dark-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
  }

  .exit {
    margin: 0;
  }
}
</style>
