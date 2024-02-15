<template>
  <div class="profile">
    <img class="ava" :src="ava" alt="аватарка">
    <button
      v-if="role === 'admin'"
      class="button create-vote"
      @click="$router.push('/account/createVote')"
    >
      {{ $t('accountPage.profile.createVoting') }}
    </button>
    <button class="button">
      {{ $t('accountPage.profile.settings') }}
    </button>
    <button class="button exit" @click="exit">
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

async function exit() {
  await localStorage.removeItem('authToken')
  await localStorage.removeItem('role')
  router.push('/')
}
</script>

<style scoped lang="scss">
.profile {
  padding: 8px;
  display: flex;
  flex-direction: column;

  .ava {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    border: 4px solid var(--accent-light-theme);
    pointer-events: none;
  }

  .button {
    margin-top: 12px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    background: var(--white-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
  }
}
</style>
