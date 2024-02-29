<template>
  <div
      class="form"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <input
        v-model="email"
        class="input email"
        type="email"
        :placeholder="$t('authPage.authPanel.form.email')"
        @input="emailRecording($event.target.value)"
    >

    <input
        v-model="password"
        class="input password"
        type="password"
        :placeholder="$t('authPage.authPanel.form.password')"
        @input="passwordRecording($event.target.value)"
    >
  </div>
</template>

<script setup>
import {computed} from "vue";

import {useStore} from "vuex";

const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])
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

  .input {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    width: auto;
  }
}

.dark-theme {
  .input {
    input {
      background: var(--main-color-dark-theme);
    }
  }
}

.light-theme {
  .input {
    input {
      background: var(--main-color-light-theme);
    }
  }
}
</style>
