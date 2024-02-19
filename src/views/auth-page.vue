<template>
  <div class="background">
    <div class="auth-panel">
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
            <div class="input">
              <span>{{ $t("authPage.form.registration.name") }}</span>
              <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">
            </div>

            <div class="input">
              <span>{{ $t("authPage.form.registration.surname") }}</span>
              <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">
            </div>

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
        {{ $t(`authPage.button.${loginOrRegistration === 'login' ? 'login' : 'registration'}`) }}
      </button>
    </div>
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
  // const action = loginOrRegistration.value === "login" ? "authModule/authLogin" : "authModule/authRegistration";
  //
  // await store.dispatch(action)
  localStorage.setItem('authToken', "response.data.token");
  localStorage.setItem('theme', "light-theme");
  localStorage.setItem('role', "admin");
  router.push("/account");
}

</script>


<style scoped lang="scss">
.background {
  display: flex;
  flex-direction: column;

  .auth-panel {
    margin: 40px auto 0 auto;
    padding: 12px 12px 0 12px;
    background: var(--neutral-light-theme);
    border-radius: 20px;

    .login-window {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .login-or-registration {
        .button {
          padding: 12px;
          border: 0;
          background: var(--neutral-light-theme);

          &:hover {
            background: var(--neutral-light-theme) !important;
          }
        }

        .button__active {
          border-bottom: 4px solid var(--accent-light-theme);
        }
      }

      input {
        margin-top: 8px;
        border-radius: 12px;
        padding: 16px;
        background: var(--white-light-theme);
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
      background: var(--neutral-light-theme);
      margin: 12px auto;
      width: 100%;
      padding: 12px;

      &:hover {
        color: var(--white-light-theme) !important;
      }
    }
  }

  @media screen and (min-width: 524px) {
    .auth-panel {
      width: 500px;
    }
  }
}
</style>
