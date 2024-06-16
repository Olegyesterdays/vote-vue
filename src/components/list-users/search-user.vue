<template>
  <div class="input">
    <span class="mdi mdi-magnify"></span>
    <input
      type="text"
      :placeholder="$t('listUser.searchUser')"
      v-model="searchText"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const searchText = ref('')

const filteredUser = computed(() => {
  const search = searchText.value.toLowerCase()
  return user.value.filter(vote => vote.title.toLowerCase().includes(search))
})
</script>

<style scoped lang="scss">
.input {
  width: 1000px;
  margin: 0 auto 12px;
  border-radius: 40px;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 4px solid var(--additional-color__30);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: 12px;

  .mdi {
    margin-left: 12px;
    color: var(--additional-color__30);
    font-size: 32px;
  }

  input {
    width: 90%;
    padding: 16px;
    border: 0;
    background-color: var(--main-color);
  }
}

@media screen and (max-width: 1012px) {
  .input {
      width: 100%;
  }
}
</style>
