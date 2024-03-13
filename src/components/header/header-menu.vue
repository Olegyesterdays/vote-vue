<template>
  <div class="menu">
    <button
        v-if="isBack"
        class="button back"
        @click="back"
    >
      Назад
    </button>

    <button
        v-if="(role === 'super-admin') && isListOfUsers"
        class="button list-of-users"
        @click="listOfUsers"
    >
      {{ $t("accountPage.listOfUsers") }}
    </button>

    <button
        v-if="(role === 'admin' || 'super-admin') && isCreateVote"
        class="button create-vote"
        @click="createVote"
    >
      {{ $t("accountPage.createVote") }}
    </button>

    <button
        v-if="isUserProfile"
        class="button user-profile"
        @click="userProfile"
    >
      {{ $t("accountPage.profile") }}
    </button>

    <button
        class="button exit"
        @click="exit"
    >
      {{ $t("accountPage.exit") }}
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import {computed, defineEmits, ref} from "vue";

const store = useStore();

const router = useRouter();
const role = computed(() => store.getters["userModule/getUserRole"]);
const emit = defineEmits();

const isBack = ref(true)
const isListOfUsers = ref(true)
const isCreateVote = ref(true)
const isUserProfile = ref(true)

router.beforeEach((to, from, next) => {
  isBack.value = !(to.path === '/account');
  isListOfUsers.value = !(to.path === '/account/listUsersPage');
  isCreateVote.value = !(to.path === '/account/createVote');
  isUserProfile.value = !(to.path === '/account/userProfilePage');
  next();
});

function back() {
  emit('update:close', true)
  router.go(-1);
}

function createVote() {
  emit('update:close', true)
  router.push({ path: "/account/createVote" });
}

function userProfile() {
  emit('update:close', true)
  router.push({ path: "/account/userProfilePage"});
}

function listOfUsers() {
  emit('update:close', true)
  router.push({ path: "/account/listUsersPage" });
}

function exit() {
  emit('update:close', true)
  store.commit("userModule/clearDataUser");
  router.push({ path: "/" });
}

</script>

<style scoped lang="scss">
.menu {
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  .list-of-users, .create-vote, .back {
    background: var(--accent-color) !important;
    color: var(--main-color);
  }

  .button {
    background: var(--neutral-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
  }
}
</style>
