import { createApp } from 'vue';
import App from './App.vue';
import index from '@/router';
import store from '@/store';
import { createI18n } from 'vue-i18n';
import translationRU from "@/locales/ru/translation.js"
import translationEN from "@/locales/en/translation.js"

const i18n = createI18n({
    legacy: false,
    locale: 'ru', // начальная локаль
    messages: {
        en: translationEN,
        ru: translationRU
    }
});

const app = createApp(App);

app.use(index).use(store).use(i18n).mount('#app');
