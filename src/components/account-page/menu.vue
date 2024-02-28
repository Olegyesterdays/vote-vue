<template>
  <div class="menu">
    <button
        v-if="role === 'admin' && 'super-admin'"
        class="button create-vote"
        @click="createVote"
    >
      {{ $t("accountPage.createVote") }}
    </button>

    <button
        class="button settings"
        @click="settings"
    >
      {{ $t("accountPage.settings") }}
    </button>

    <button
        v-if="role === 'super-admin'"
        class="button list-of-users"
        @click="listOfUsers"
    >
      {{ $t("accountPage.listOfUsers") }}
    </button>

    <button
        class="button"
        @click="exit"
    >
      {{ $t("accountPage.exit") }}
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const role = localStorage.getItem('role');

function createVote() {
  router.push("account/createVote");
}

function settings() {
  router.push("account/settings");
}

function listOfUsers() {
  router.push("account/listOfUsers");
}

function exit() {
  router.push("/");
}
</script>

<style scoped lang="scss">
.menu {
  width: 900px;
  margin: 12px 12px 0;
  display: flex;
  flex-direction: column;

  .button {
    background: var(--white-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
    border-radius: 12px;
    margin-bottom: 12px;
    padding: 12px;
    width: auto;

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--white-light-theme);
    }
  }
}

@media screen and (max-width: 900px) {
  .menu {
    width: 100%;
  }
}
</style>
