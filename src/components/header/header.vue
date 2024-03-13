<template>
  <div class="container">
    <div class="header" :class="isMenu ? 'header__open' : ''">
      <img
          class="logo"
          :src="LOGO"
          alt="logo"
          @click="account"
      >

      <div class="buttons">
        <button
            class="button locales"
            @click="toggleLanguage"
        >
          {{ $t("header.toggleLanguage") }}
        </button>

        <button
            class="button theme"
            @click="switchingTheTheme"
        >
          <span
              class="brightness mdi"
              :class="theme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          />
        </button>

        <ButtonMenu v-if="isMenuButton" />
      </div>
    </div>

    <div
        class="header-menu"
        :class="isMenu ? 'header-menu__open' : 'header-menu__close'"
        v-click-outside="closingMenu"
    >
      <HeaderMenu />
    </div>
  </div>
</template>

<script setup>
import LOGO from "@/assets/OCRV-Logo.svg";
import HeaderMenu from "@/components/header/header-menu.vue";
import ButtonMenu from "@/components/header/button-menu.vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {useI18n} from "vue-i18n";
import {ref, computed} from "vue";

const router = useRouter()
const store = useStore()
const { locale } = useI18n();
const theme = computed(() => store.getters["userModule/getCurrentTheme"])
const isMenu = computed(() => store.getters["appModule/getIsMenu"])
const isMenuButton = ref(true)

router.beforeEach((to, from, next) => {
  isMenuButton.value = !(to.path === '/account/vote' || to.path === '/');
  next();
});

function account() {
  router.push({ path: "/account" });
}

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}

function switchingTheTheme() {
  store.commit("userModule/switchTheme")
}

function closingMenu() {
  store.commit("appModule/switchIsMenu", { condition: false })
}

</script>

<style scoped lang="scss">
.container {
  width: 900px;
  position: fixed;
  top: 0;
  left: 50%;
  border-radius: 12px;
  transform: translate(-50%, 0);
  z-index: 99;
  box-sizing: border-box;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--main-color);
    border: 4px solid var(--neutral-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    border-radius: 12px;
    position: relative;
    z-index: 1000;
    height: auto;

    &__open {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom: 0;
      box-shadow: 0 0 0 var(--shadow-color);
    }

    .logo {
      height: 64px;
    }

    .buttons {
      display: flex;
      align-items: center;

      .locales {
        width: auto !important;
        padding: 0 12px;
      }

      .button {
        border: 0;
        border-radius: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        background: var(--neutral-color);

        .mdi {
          font-size: 28px;
        }

        &:hover {
          transform: scale(1.02);
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }

  .header-menu {
    background: var(--main-color);
    border: 4px solid var(--neutral-color);
    border-top: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    transition: transform 0.3s ease;

    &__close {
      transform: translateY(-100%);
    }

    &__open {
      transform: translateY(0);
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
