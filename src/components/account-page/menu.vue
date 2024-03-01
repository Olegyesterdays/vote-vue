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
      {{ $t("accountPage.profile") }}
    </button>

    <button
        v-if="role === 'admin'"
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
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();

const router = useRouter();
const role = localStorage.getItem('role');

function createVote() {
  router.push("account/createVote");
}

function settings() {
  router.push("account/userProfilePage");
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
    background: var(--main-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
    border-radius: 12px;
    margin-bottom: 12px;
    padding: 12px;
    width: auto;

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }
}

@media screen and (max-width: 900px) {
  .menu {
    width: 100%;
  }
}
</style>
