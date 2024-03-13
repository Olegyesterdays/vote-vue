<template>
  <div class="container">
    <div class="header">
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

<!--        <button-->
<!--            v-if="isMenuButton"-->
<!--            class="menu"-->
<!--            :class="isMenu ? 'menu__open' : ''"-->
<!--            @click.stop="openingAndClosingMenu"-->
<!--        >-->
<!--          <span />-->
<!--        </button>-->

        <ButtonMenu v-if="isMenuButton" />
      </div>
    </div>

    <div
        class="header-menu"
        :class="isMenu ? 'header-menu__open' : 'header-menu__close'"
        v-click-outside="closingMenu"
    >
      <HeaderMenu
          class="header-menu"
          @update:close="closingMenu"
      />
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
  z-index: 100;
  background: var(--main-color);
  border: 4px solid var(--neutral-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  box-sizing: border-box;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;

    .logo {
      height: 100%;
    }

    .buttons {
      display: flex;
      align-items: center;

      .locales {
        width: auto !important;
        padding: 0 12px;
      }

      //.menu {
      //  position: relative;
      //  display: flex;
      //  flex-direction: column;
      //  align-items: center;
      //  justify-content: center;
      //  background: var(--neutral-color);
      //  border-radius: 12px;
      //  width: 40px;
      //  height: 40px;
      //  margin-right: 12px;
      //  border: 0;
      //
      //  span {
      //    transition-duration: 0s;
      //    transition-delay: 0.15s;
      //
      //    &:before, &:after {
      //      transition-property: margin, transform;
      //      transition-duration: 0.15s;
      //      transition-delay: 0.15s, 0s;
      //      position: absolute;
      //      content: '';
      //    }
      //
      //    &, &:before, &:after {
      //      width: 20px;
      //      height: 4px;
      //      background-color: #000;
      //      display: block;
      //    }
      //
      //    &:before {
      //      margin-top: -8px;
      //    }
      //
      //    &:after {
      //      margin-top: 8px;
      //    }
      //  }
      //
      //  &__open span {
      //    background-color: rgba(0, 0, 0, 0.0);
      //
      //    &:before {
      //      margin-top: 0;
      //      transform: rotate(45deg);
      //      transition-delay: 0s, 0.15s;
      //    }
      //
      //    &:after {
      //      margin-top: 0;
      //      transform: rotate(-45deg);
      //      transition-delay: 0s, 0.15s;
      //    }
      //  }
      //}

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
    &__open {
      height: 158px;
      animation: menuOpen 0.3s forwards;
    }

    &__close {
      height: 0;
      animation: menuClose 0.3s forwards;
    }
  }

  @keyframes menuOpen {
    0% {
      height: 0;
    }
    100% {
      height: 158px;
    }
  }

  @keyframes menuClose {
    0% {
      height: 158px;
    }

    100% {
      height: 0;
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
