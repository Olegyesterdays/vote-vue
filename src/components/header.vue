<template>
  <div class="header">
    <button
        v-if="showBackButton"
        class="button back"
        @click="back"
    >
      <span
          class="arrowLeft mdi mdi-arrow-left"
      />
    </button>

    <div/> <!-- TODO: Так надо, но лучше переделать -->

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
        <span
            class="brightness"
            :class="theme === 'dark' ? 'mdi mdi-brightness-7' : 'mdi mdi-brightness-5'"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {useI18n} from "vue-i18n";
import {ref, computed} from "vue";

const router = useRouter()
const store = useStore()

const {locale} = useI18n();
const theme = computed(() => store.getters["userModule/getCurrentTheme"])

function back() {
  // router.go(-1);
  router.push({ path: "/account"});
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
  store.commit("userModule/switchTheme")
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
  background: var(--neutral-color);

  .button {
    border: 0;
    width: 40px;
    height: 40px;
    margin: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-color);
    box-shadow: 0 4px 6px var(--shadow-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }

  .back {
    font-size: 24px;
    &:hover {
      .arrowLeft {
        color: var(--main-color);
      }
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

      &:hover {
        .brightness {
          color: var(--main-color);
        }
      }

      .brightness {
        font-size: 24px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    width: 100%;
  }
}
</style>
