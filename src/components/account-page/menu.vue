<template>
  <div class="menu">
    <button
        v-if="role === 'admin' || 'super-admin'"
        class="button create-vote"
        @click="createVote"
    >
      {{ $t("accountPage.createVote") }}
    </button>

    <button
        class="button user-profile"
        @click="userProfile"
    >
      {{ $t("accountPage.profile") }}
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
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();

const router = useRouter();
const role = computed(() => store.getters["userModule/getUserRole"]);

function createVote() {
  router.push({ path: "account/createVote"});
}

function userProfile() {
  router.push({ path: "account/userProfilePage"});
}

function listOfUsers() {
  router.push({ path: "account/listUsersPage"});
}

function exit() {
  store.commit("userModule/clearDataUser")
  router.push({ path: "/" });
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
