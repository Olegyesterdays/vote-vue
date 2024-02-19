<template>
  <div class="background">
    <div class="account-panel">
      <profile-user />
      <account-voting-list />
    </div>
  </div>
</template>

<script setup>
import ProfileUser from '@/components/profile-user.vue'
import AccountVotingList from '@/components/account-voting-list.vue'
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .account-panel {
    margin: 40px auto;
    display: flex;
    padding: 8px;
    border-radius: 20px;
    background: var(--neutral-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    width: 100%;
  }
  @media screen and (min-width: 1032px) {
    /* Если экран имеет ширину 1024px или больше, применяем следующие стили */
    .account-panel {
      width: 1024px; /* Ширина контента будет 1024px на десктопах и больших экранах */
    }
  }

  @media screen and (max-width: 700px) {
    /* Если экран имеет ширину 1024px или больше, применяем следующие стили */
    .account-panel {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
