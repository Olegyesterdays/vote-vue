<template>
  <div class="form">
    <div class="input">
          <span>
            {{ $t("authPage.authPanel.form.email") }}
          </span>
      <input
          v-model="email"
          class="email"
          type="email"
          @input="emailRecording($event.target.value)"
      >
    </div>

    <div class="input">
          <span>
            {{ $t("authPage.authPanel.form.password") }}
          </span>
      <input
          v-model="password"
          class="password"
          type="password"
          @input="passwordRecording($event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useStore } from "vuex";

const store = useStore();
const email = computed(() => store.getters["authModule/getEmail"]);
const password = computed(() => store.getters["authModule/getPassword"]);

function emailRecording(email) {
  store.commit("authModule/email", { email: email })
}

function passwordRecording(password) {
  store.commit("authModule/password", { password: password })
}
</script>

<style scoped lang="scss">
.form {
  margin: 0 12px 12px 12px;

  .input {
    margin-top: 8px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 8px;
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: var(--white-light-theme);
    }
  }
}
</style>
