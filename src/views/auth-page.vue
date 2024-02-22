<template>
  <div class="background">
    <div class="auth-panel">
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
        <!--        <div class="input" v-if="loginOrRegistration === 'registration'">-->
        <!--          <span>{{ $t("authPage.form.registration.name") }}</span>-->
        <!--          <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">-->
        <!--        </div>-->

        <!--        <div class="input" v-if="loginOrRegistration === 'registration'">-->
        <!--          <span>{{ $t("authPage.form.registration.surname") }}</span>-->
        <!--          <input type="text" @input="store.commit('authModule/loginEmail', $event.target.value)">-->
        <!--        </div>-->

        <div class="input">
          <span>{{ $t("authPage.form.registration.email") }}</span>
          <input type="email" @input="store.commit(`authModule/${ loginOrRegistration === 'login' ? 'loginEmail' : 'registrationEmail' }`, { email: $event.target.value })">
        </div>

        <div class="input">
          <span>{{ $t("authPage.form.registration.password") }}</span>
          <input type="password" @input="store.commit(`authModule/${ loginOrRegistration === 'login' ? 'loginPassword' : 'registrationPassword' }`, { password: $event.target.value })">
        </div>
      </div>
    </div>
    <button class="button-auth" @click="push">
      {{ $t(`authPage.button.${loginOrRegistration === 'login' ? 'login' : 'registration'}`) }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

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
  // localStorage.setItem('authToken', "response.data.token");
  // localStorage.setItem('theme', "light-theme");
  // localStorage.setItem('role', "admin");
  router.push("/account");
}

</script>

<style scoped lang="scss">
.background {
  display: flex;
  flex-direction: column;

  .auth-panel {
    width: 900px;
    border-radius: 16px;
    margin: auto;
    background: var(--neutral-light-theme);

    .login-or-registration {
      padding: 0 12px 0;

      .button {
        padding: 12px;
        border: 0;
        border-radius: 0;
        background: var(--neutral-light-theme);
        width: 50%;

        &:hover {
          background: var(--neutral-light-theme) !important;
        }
      }

      .button__active {
        border-bottom: 4px solid var(--accent-light-theme);
      }
    }

    .form {
      padding: 0 12px 12px;

      .input {
        margin-top: 8px;
        display: flex;
        flex-direction: column;

        input {
          margin-top: 8px;
        }
      }
    }
  }

  .button-auth {
    width: 900px;
    border: 0;
    border-radius: 12px;
    background: var(--neutral-light-theme);
    margin: 12px auto;
    padding: 12px;

    &:hover {
      color: var(--white-light-theme) !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .auth-panel, .button-auth {
      width: 100%;
    }
  }
}
</style>
