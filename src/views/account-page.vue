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
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: var(--neutral-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);
    width: 100%;
  }

  @media screen and (min-width: 900px) {
    .account-panel {
      width: 900px;
    }
  }
}
</style>
