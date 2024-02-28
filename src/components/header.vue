<template>
  <div class="header">
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
        <svg-icon type="mdi" :path="mdiBrightness6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiArrowLeft,
  mdiBrightness6
} from '@mdi/js';

const router = useRouter()
const { locale } = useI18n();

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

}
</script>

<style scoped lang="scss">
.header {
  z-index: 100;
  width: 900px;
  border-radius: 12px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);

  .button {
    border: 0;
    width: 40px;
    height: 40px;
    margin: 12px;
    border-radius: 12px;
    background: var(--white-light-theme);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--white-light-theme);
    }
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

@media screen and (max-width: 900px) {
  .header {
    border-radius: 0;
    width: 100%;
  }
}
</style>
