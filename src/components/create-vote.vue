<template>
  <div class="create-vote-panel">
    <button class="button">Добавить картинку</button>

    <div class="input input-title">
      <span>Название голосования</span>
      <input type="text" />
    </div>

    <div class="input input-description">
      <span>Описание</span>
      <input type="text" />
    </div>

    <div class="input search">
      <span>Кто проходит</span>
      <input type="text" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.create-vote-panel {
  padding: 16px;
  border-radius: 20px;
  margin: 40px auto 0 ;
  background: var(--neutral-light-theme);
  display: flex;
  flex-direction: column;
  width: 1000px;

  .button {
    padding: 12px;
    border: 0;
    border-radius: 12px;
    background: var(--secondary-light-theme);
  }

  input {
    margin-top: 8px;
    border: 0;
  }

  .input {
    display: flex;
    flex-direction: column;

    &-title {
      margin-top: 8px;
    }

    &-description {
      margin-top: 8px;
    }
  }

  .search {
    margin-top: 8px;
  }
}
</style>
