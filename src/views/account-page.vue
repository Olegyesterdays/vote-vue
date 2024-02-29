<template>
  <div class="container" :class="theme === 'dark' ? 'dark-theme' : 'light-theme'">
    <Menu class="menu" />
    <VoteList class="vote-list" />
  </div>
</template>

<script setup>
import Menu from "@/components/account-page/menu.vue";
import VoteList from "@/components/account-page/vote-list.vue";
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();
const theme = computed(() => store.getters["getCurrentTheme"])
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 900px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  .menu {
    width: auto;
  }

  .vote-list {
    width: auto;
  }

}

.dark-theme {
  background: var(--additional-color-dark-theme);
}

.light-theme {
  background: var(--additional-color-light-theme);
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
