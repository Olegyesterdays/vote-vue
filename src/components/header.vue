<template>
  <div class="background">
    <button class="button" @click="toggleLanguage">
      {{ $t("toggleLanguage") }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { locale } = useI18n();
const theme = ref(localStorage.getItem('theme') || 'light-theme');

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}
</script>

<style scoped lang="scss">
.background {
  background: var(--white-light-theme);
  position: fixed;
  display: flex;
  right: 8px;
  padding: 8px;
  border-radius: 12px;
  z-index: 1;

  .button {
    padding: 12px;
    border-radius: 12px;
    background: var(--neutral-light-theme);
  }
}
</style>
