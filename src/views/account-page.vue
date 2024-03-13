<template>
  <div class="container">
<!--    <Menu class="menu" />-->
    <VoteList class="vote-list" />
  </div>
</template>

<script setup>
import Menu from "@/components/account-page/menu.vue";
import VoteList from "@/components/account-page/vote-list.vue";
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 900px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: var(--neutral-color);

  .menu {
    width: auto;
  }

  .vote-list {
    width: auto;
  }

}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
