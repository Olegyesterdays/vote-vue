<template>
  <div>
    <button @click="toggleLanguage">
      {{ $t("toggleLanguage") }}
    </button>

    <button @click="changeTheSubject">
      {{ $t("changeTheSubject") }}
    </button>

    <router-view />
  </div>
</template>

<script setup>
import "@/styles/index.css";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}

function changeTheSubject() {

}
</script>

<style lang="scss" scoped>
</style>
