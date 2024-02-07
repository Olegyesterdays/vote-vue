<template>
  <div class="background">
    <div class="login-window">
      <div class="login-or-registration">
        <button
            class="button login"
            :class="loginOrRegistration === 'login' ? 'button__active' : ''"
            @click="clickLogin"
        >
          Авторизация
        </button>
        <button
            class="button registration"
            :class="loginOrRegistration === 'registration' ? 'button__active' : ''"
            @click="clickRegistration"
        >
          Регистрация
        </button>
      </div>

      <div class="form">
        <div
            class="input"
            v-for="({ name, type }, index) in form"
            :key="index"
        >
          <span>{{ name }}</span>
          <input :type="type" @input="addDataFormAnswer($event.target.value, name)">
        </div>
      </div>
    </div>
    <button class="button-auth" @click="push">{{ loginOrRegistration === 'login' ? "Войти" : "Зарегистрироваться" }}</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loginOrRegistration = ref( "login")
const form = computed(() => store.getters["authModule/getForm"]);

function clickLogin() {
  loginOrRegistration.value = "login"
  store.commit("authModule/dataFormAnswerClear")
}

function clickRegistration() {
  loginOrRegistration.value = "registration"
  store.commit("authModule/dataFormAnswerClear")
}

function addDataFormAnswer(value, name) {
  store.commit("authModule/addDataFormAnswer", {
    name: name,
    data: value
  })
}

function push() {
  store.dispatch(loginOrRegistration.value === "login" ? "authModule/authLogin" : "authModule/authRegistration")
}
</script>

<style scoped lang="scss">
.background {
  display: flex;
  flex-direction: column;

  .login-window {
    width: 500px;
    margin: 40px auto 0 auto;
    background: var(--secondary-dark-theme);
    border-radius: 20px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-or-registration {

      .button {
        padding: 12px;
        border: 0;
        background: var(--secondary-dark-theme);
      }

      .button__active {
        border-bottom: 4px solid var(--neutral-light-theme);
      }
    }

    input {
      margin-top: 8px;
      border-radius: 12px;
      padding: 16px;
      background: var(--neutral-light-theme);
      border: 0;

      &:focus {
        outline: none;
      }
    }

    .form {
      width: 100%;
      margin-top: 8px;

      .input {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .button-auth {
    border: 0;
    border-radius: 12px;
    background: var(--secondary-light-theme);
    margin: 12px auto;
    width: 524px;
    padding: 12px;

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--white-light-theme);
    }

    &:active {
      transform: scale(0.99);
    }
  }
}
</style>
