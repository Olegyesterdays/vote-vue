<template>
  <div class="background">
    <button
        class="button back"
        @click="back"
    >
      <svg-icon type="mdi" :path="mdiArrowLeft"/>
    </button>

    <button
        class="button language"
        @click="toggleLanguage"
    >
      {{ $t("toggleLanguage") }}
    </button>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiArrowLeft} from '@mdi/js';
import {useRouter} from 'vue-router'

const router = useRouter()
const {locale} = useI18n();
const theme = ref(localStorage.getItem('theme') || 'light-theme');

function back() {
  router.push('/account')
}

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}
</script>

<style scoped lang="scss">
.background {
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  background: var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);

  .button {
    padding: 12px;
    border-radius: 12px;
    background: var(--white-light-theme);
    margin: 12px;
    box-shadow: 0 4px 6px var(--shadow-color);
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back {
    padding: 0;
    width: 36px;
  }

  .language {
    margin: 12px;
  }

  .language-and-theme {
    display: flex;
    align-items: center;
  }
}

@media screen and (min-width: 900px) {
  .background {
    border-radius: 12px;
    width: 900px;
  }
}
</style>
