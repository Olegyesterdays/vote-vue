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
  padding: 20px;
  border-radius: 20px;
  margin: 40px auto 8px ;
  background: var(--neutral-light-theme);
  display: flex;
  flex-direction: column;
  width: 986px;

  .button {
    padding: 12px;
    border: 0;
    border-radius: 12px;
    background: var(--secondary-light-theme);

    &:hover {
      background: var(--accent-light-theme) !important;
      color: var(--white-light-theme);
    }

    &:active {
      transform: scale(0.99);
    }
  }

  input {
    margin-top: 8px;
    border-radius: 12px;
    padding: 16px;
    border: 0;

    &:focus {
      outline: none;
    }
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
