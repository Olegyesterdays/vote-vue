<template>
  <div class="form">
    <label class="input-block">
      <span>{{ $t('authPage.authPanel.form.email') }}</span>
      <input
          v-model="email"
          class="input email"
          type="email"
          @input="emailRecording($event.target.value)"
      >
    </label>

    <label class="input-block">
      <span>{{ $t('authPage.authPanel.form.password') }}</span>
      <input
          v-model="password"
          class="input password"
          type="password"
          @input="passwordRecording($event.target.value)"
      >
    </label>

    <label class="input-block">
      <span>{{ $t('authPage.authPanel.form.fullName') }}</span>
      <input
          v-model="fullName"
          class="input fullName"
          type="text"
          @input="fullNameRecording($event.target.value)"
      >
    </label>
  </div>
</template>

<script setup>
import {computed} from "vue";

import {useStore} from "vuex";

const store = useStore();
const email = computed(() => store.getters["userModule/getEmail"]);
const password = computed(() => store.getters["userModule/getPassword"]);
const fullName = computed(() => store.getters["userModule/getFullName"])

function emailRecording(email) {
  store.commit("userModule/email", { email: email })
}

function passwordRecording(password) {
  store.commit("userModule/password", { password: password })
}

function fullNameRecording(fullName) {
  store.commit("userModule/fullName", { fullName: fullName })
}
</script>

<style scoped lang="scss">
.form {
  margin: 0 12px 12px 12px;
  display: flex;
  flex-direction: column;

  .input-block {
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    .input {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      padding: 12px;
      border-radius: 12px;
      border: 0;
      width: auto;
      background: var(--neutral-color);
    }
  }
}
</style>
