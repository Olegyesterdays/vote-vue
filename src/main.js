import { createApp } from 'vue';
import App from './App.vue';
import "@/styles/index.css";
import "@/styles/color-palette.css";
import router from '@/router';
import store from '@/store';
import { createI18n } from 'vue-i18n';
import translation_RU from "@/locales/ru/translation.js";
import translation_EN from "@/locales/en/translation.js";

const i18n = createI18n({
    legacy: false,
    locale: 'ru', // начальная локаль
    messages: {
        en: translation_EN,
        ru: translation_RU
    }
});

const app = createApp(App);

app
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
