<template>
  <div class="login-or-registration">
    <button
        class="button"
        :class="loginOrRegistration === 'login' ? 'button__active' : ''"
        @click="change"
    >
      {{ $t("authPage.authPanel.loginOrRegistration.login") }}
    </button>

    <button
        class="button"
        :class="loginOrRegistration === 'registration' ? 'button__active' : ''"
        @click="change"
    >
      {{ $t("authPage.authPanel.loginOrRegistration.registration") }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loginOrRegistration = computed(() => store.getters["userModule/getLoginOrRegistration"]);

function change() {
  store.commit("userModule/loginOrRegistration");
}
</script>

<style scoped lang="scss">
.login-or-registration {
  margin: 0 12px;
  width: auto;

  .button {
    width: 50%;
    padding: 12px;
    border: 0;
    background: var(--neutral-color);

    &__active {
      border-bottom: 4px solid var(--accent-color);
    }
  }
}
</style>
