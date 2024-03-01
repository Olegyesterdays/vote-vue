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
  </div>
</template>

<script setup>
import {computed} from "vue";

import {useStore} from "vuex";

const store = useStore();
const email = computed(() => store.getters["authModule/getEmail"]);
const password = computed(() => store.getters["authModule/getPassword"]);

function emailRecording(email) {
  store.commit("authModule/email", {email: email})
}

function passwordRecording(password) {
  store.commit("authModule/password", {password: password})
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
      background: var(--main-color);
    }
  }
}
</style>
