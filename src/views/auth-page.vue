<template>
  <div class="background">
    <div class="login-window">
      <div class="login-or-registration">
        <button
            class="button"
            :class="loginOrRegistration === 'login' ? 'button__active' : ''"
            @click="clickLogin"
        >
          <span>{{ $t("authPage.login") }}</span>
        </button>
        <button
            class="button"
            :class="loginOrRegistration === 'registration' ? 'button__active' : ''"
            @click="clickRegistration"
        >
          <span>{{ $t("authPage.registration") }}</span>
        </button>
      </div>

      <div class="form">
<!--        login-->
        <div v-if="loginOrRegistration === 'login'" class="form-login">
          <div class="input">
            <span>{{ $t("authPage.form.login.email") }}</span>
            <input type="email" @input="store.commit('authModule/loginEmail', {email: $event.target.value})">
          </div>
          <div class="input">
            <span>{{ $t("authPage.form.login.password") }}</span>
            <input type="password" @input="store.commit('authModule/loginPassword', {password: $event.target.value})">
          </div>
        </div>

<!--        registration-->
        <div v-if="loginOrRegistration === 'registration'" class="form-registration">
<!--          <div class="input">-->
<!--            <span>{{ $t("authPage.form.registration.name") }}</span>-->
<!--            <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">-->
<!--          </div>-->
<!--          -->
<!--          <div class="input">-->
<!--            <span>{{ $t("authPage.form.registration.surname") }}</span>-->
<!--            <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">-->
<!--          </div>-->

          <div class="input">
            <span>{{ $t("authPage.form.registration.email") }}</span>
            <input type="email" @input="store.commit('authModule/registrationEmail', {email: $event.target.value})">
          </div>

          <div class="input">
            <span>{{ $t("authPage.form.registration.password") }}</span>
            <input type="password" @input="store.commit('authModule/registrationPassword', {password: $event.target.value})">
          </div>
        </div>
      </div>
    </div>
    <button class="button-auth" @click="push">
      <span>{{ $t(`authPage.button.${loginOrRegistration === 'login' ? 'login' : 'registration'}`) }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"; // Импортируем роутер из Vue Router

const store = useStore();
const router = useRouter(); // Инициализируем роутер

const loginOrRegistration = ref("login");

function clickLogin() {
  loginOrRegistration.value = "login";
  store.commit("authModule/formLoginClear");
}

function clickRegistration() {
  loginOrRegistration.value = "registration";
  store.commit("authModule/formRegistrationClear");
}

async function push() {
  const action = loginOrRegistration.value === "login" ? "authModule/authLogin" : "authModule/authRegistration";

  await store.dispatch(action)
  router.push("/account");
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

        &:hover {
          background: var(--secondary-light-theme) !important;
        }
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
  }
}
</style>
