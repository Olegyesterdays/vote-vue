<template>
  <div class="menu" :class="isMenu ? 'menu__open' : 'menu__close'">
    <button class="button" @click="listUsers">
      {{ $t("accountPage.listOfUsers") }}
    </button>

    <button class="button" @click="profile">
      {{ $t("accountPage.profile") }}
    </button>

    <button class="button" @click="exit">
      {{ $t("accountPage.exit") }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router";
import {computed, defineEmits} from "vue"

const store = useStore()
const router = useRouter();
const emit = defineEmits();

const isMenu = computed(() => store.getters["appModule/getIsMenu"])

function listUsers() {
  emit('update:close', true)
  router.push({ path: "/account/listUsersPage" });
}

function profile() {
  emit('update:close', true)
  router.push({ path: "/account/userProfilePage" });
}

function exit() {
  emit('update:close', true)
  store.commit("userModule/clearDataUser");
  router.push({ path: "/" });
}
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  border-left: 4px solid var(--neutral-color);
  overflow: hidden;

  &__open {
    animation: open 0.3s forwards;
    height: 1000px;
  }

  &__close {
    animation: close 0.3s forwards;
  }

  @keyframes open {
    0% {
      width: 0;
    }

    100% {
      width: 300px;
    }
  }

  @keyframes close {
    0% {
      width: 300px;
    }

    100% {
      width: 0;
    }
  }

  .button {
    padding: 12px;
    margin: 12px 12px 0;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-color);

    &:last-child {
      margin-bottom: 12px;
    }
  }
}
</style>
