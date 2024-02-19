<template>
  <div class="background">
    <div class="account-panel">
      <profile-user class="profile-user" />
      <account-voting-list class="account-voting-list" />
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
    .account-panel {
      width: 1024px;
    }
  }

  @media screen and (max-width: 700px) {
    .account-panel {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
