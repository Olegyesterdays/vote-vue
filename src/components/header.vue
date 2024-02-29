<template>
  <div class="header" :class="theme === 'dark' ? 'dark-theme' : 'light-theme'">
    <button
        v-if="showBackButton"
        class="button back"
        @click="back"
    >
      <svg-icon type="mdi" :path="mdiArrowLeft" />
    </button>

    <div /> <!-- TODO: Так надо, но лучше переделать -->

    <div class="language-and-theme">
      <button
          class="button language"
          @click="toggleLanguage"
      >
        {{ $t("header.toggleLanguage") }}
      </button>

      <button
          class="button theme"
          @click="switchingTheTheme"
      >
        <svg-icon type="mdi" :path="theme === 'dark' ? mdiBrightness7 : mdiBrightness5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiArrowLeft,
  mdiBrightness5,
  mdiBrightness7
} from '@mdi/js';

const router = useRouter()
const store = useStore()

const { locale } = useI18n();
const theme = computed(() => store.getters["getCurrentTheme"])

function back() {
  router.push('/account')
}

const showBackButton = ref(true);

router.beforeEach((to, from, next) => {
  showBackButton.value = !(to.path === '/' || to.path === '/account');
  next();
});

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}

function switchingTheTheme() {
  store.dispatch('toggleTheme');
}
</script>

<style scoped lang="scss">
.header {
  z-index: 100;
  width: 900px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px var(--shadow-color);

  .button {
    border: 0;
    width: 40px;
    height: 40px;
    margin: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .language-and-theme {
    display: flex;
    align-items: center;

    .language {
      width: auto;
      margin-left: 0;
      padding: 0 12px;
    }

    .theme {
      margin-left: 0;
    }
  }
}

.dark-theme {
  background: var(--additional-color-dark-theme) !important;

  .button {
    background: var(--main-color-dark-theme);

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--main-color-dark-theme);
    }
  }
}

.light-theme {
  background: var(--additional-color-light-theme) !important;

  .button {
    background: var(--main-color-light-theme);

    &:hover {
      background: var(--accent-light-theme);
      color: var(--main-color-light-theme);
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    border-radius: 0;
    width: 100%;
  }
}
</style>
