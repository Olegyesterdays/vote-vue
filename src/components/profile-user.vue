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
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const role = ref(localStorage.getItem('role'))

async function exit() {
  await localStorage.removeItem('authToken')
  await localStorage.removeItem('theme')
  await localStorage.removeItem('role')
  router.push('/')
}
// TODO: Сделать по нормальному
// const storedTheme = ref('')
//
// const color = computed(() => {
//   return {
//     mainBackgroundColor:
//         storedTheme.value === "light-theme" ?
//             "--my-main-background-color-light-theme" :
//             "--my-main-background-color-dark-theme",
//
//     dopBackgroundColor:
//         storedTheme.value === "light-theme" ?
//             "--my-dop-background-color-light-theme" :
//             "--my-dop-background-color-dark-theme",
//
//     mainTextColor:
//         storedTheme.value === "light-theme" ?
//             "" :
//             "",
//
//     dopTextColor:
//         storedTheme.value === "light-theme" ?
//             "" :
//             ""
//   }
// })
//
// onBeforeMount(() => {
//   storedTheme.value = localStorage.getItem('theme');
//   console.log(storedTheme)
// });
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
    margin: auto;
  }

  .button {
    margin-top: 12px;
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    //background: v-bind('color.dopBackgroundColor');
    background: var(--white-dark-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
  }
}
</style>
