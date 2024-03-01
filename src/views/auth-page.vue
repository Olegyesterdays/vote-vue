<template>
  <div class="container">
    <div class="auth-panel">
      <LoginOrRegistration />
      <Form />
    </div>

    <button class="button-auth" @click="auth">
      {{ $t(`authPage.buttonAuth.${ loginOrRegistration === 'login' ? 'login' : 'registration' }`) }}
    </button>
  </div>
</template>

<script setup>
import Form from "@/components/auth-page/form.vue";
import LoginOrRegistration from "@/components/auth-page/login-or-registration.vue";

import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const loginOrRegistration = computed(() => store.getters["authModule/getLoginOrRegistration"]);

async function auth() {
  const action = loginOrRegistration.value === "login" ? "authModule/login" : "authModule/registration"
  await store.dispatch(action)
  await router.push("/account");
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  border-radius: 12px;

  .auth-panel {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: var(--neutral-color);
  }

  .button-auth {
    padding: 12px;
    border-radius: 12px;
    margin-top: 8px;
    border: 0;
    width: 100%;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;

    .button-auth {
      width: 100%;
    }
  }
}
</style>
