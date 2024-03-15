<template>
  <div class="container">
    <div class="header" :class="isMenu ? 'header__open' : 'header__close'">
      <img
          class="logo"
          :src="LOGO"
          alt="logo"
          @click="account"
      >

      <div class="buttons">
        <ButtonLocales />

        <ButtonTheme />

        <ButtonMenu v-if="isMenuButton" />
      </div>
    </div>

    <HeaderMenu
        v-if="isMenu"
        v-click-outside="openingAndClosingMenu"
        @update:close="openingAndClosingMenu"
    />
  </div>
</template>

<script setup>
import LOGO from "@/assets/OCRV-Logo.svg";
import HeaderMenu from "@/components/header/header-menu.vue";
import ButtonLocales from "@/components/header/button-locales.vue";
import ButtonTheme from "@/components/header/button-theme.vue";
import ButtonMenu from "@/components/header/button-menu.vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {ref, computed} from "vue";

const router = useRouter()
const store = useStore()
const isMenu = computed(() => store.getters["appModule/getIsMenu"])
const isMenuButton = ref(true)

router.beforeEach((to, from, next) => {
  isMenuButton.value = !(to.path === '/account/vote' || to.path === '/');
  next();
});

function account() {
  router.push({ path: "/account" });
}

function openingAndClosingMenu() {
  store.commit("appModule/switchIsMenu", { condition: false })
  console.log("OK")
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  //height: 100%;
  position: fixed;
  z-index: 99;
  box-sizing: border-box;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--main-color);
    border-bottom: 4px solid var(--neutral-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    position: relative;
    z-index: 100;
    height: auto;

    &__open {
      box-shadow: 0 0 0;
    }

    &__close {
      height: 64px;
    }

    .logo {
      height: 64px;
    }

    .buttons {
      display: flex;
      align-items: center;
    }
  }
}
</style>
