<template>
  <button class="button create" @click="create">{{ $t('createVotePage.addQuestion') }}</button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
function create() {
  store.dispatch('createVoteModule/createVote')
}
</script>

<style scoped lang="scss">
.button {
  margin: 8px 0;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  background: var(--accent-color);
  color: var(--main-color);

  &:last-child {
    margin-bottom: 400px;
  }
}
</style>
