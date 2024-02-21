<template>
  <div class="background">
    <button class="button" @click="toggleLanguage">
      {{ $t("toggleLanguage") }}
    </button>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const {locale} = useI18n();
const theme = ref(localStorage.getItem('theme') || 'light-theme');

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
  background: var(--neutral-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);

  .button {
    padding: 12px;
    border-radius: 12px;
    background: var(--white-light-theme);
    margin: 12px;
    box-shadow: 0 4px 6px var(--shadow-color);
  }
}

@media screen and (min-width: 900px) {
  .background {
    border-radius: 12px;
    width: 900px;
  }
}
</style>
