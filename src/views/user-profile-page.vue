<template>
  <div
      class="container"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
  >
    <input
        class="input name"
        type="text"
        placeholder="Имя"
        @input="editName($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <input
        class="input surname"
        type="text"
        placeholder="Фамилия"
        @input="editSurname($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <input
        class="input patronymic"
        type="text"
        placeholder="Отчечтво"
        @input="editPatronymic($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <input
        class="input placeOfWork"
        type="text"
        placeholder="Место работы"
        @input="editPlaceOfWork($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <input
        class="input role"
        type="text"
        placeholder="Права"
        @input="editRole($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <input
        class="input post"
        type="text"
        placeholder="Должность"
        @input="editPost($event.target.value)"
        :disabled="role !== 'super-admin'"
    >

    <button
        class="button"
        :disabled="role !== 'super-admin'"
    >
      сохранить
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import {computed} from "vue";

const store = useStore();

const role = localStorage.getItem('role');
const theme = computed(() => store.getters["getCurrentTheme"])

function editName(name) {
  store.commit("userProfileModule/editName", { name })
}

function editSurname(surname) {
  store.commit("userProfileModule/editSurname", { surname })
}

function editPatronymic(patronymic) {
  store.commit("userProfileModule/editPatronymic", { patronymic })
}

function editPlaceOfWork(placeOfWork) {
  store.commit("userProfileModule/editPlaceOfWork", { placeOfWork })
}

function editRole(role) {
  store.commit("userProfileModule/editRole", { role })
}

function editPost(post) {
  store.commit("userProfileModule/editPost", { post })
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 6px 0;

  .input {
    margin: 6px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
  }

  .button {
    margin: 6px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
  }
}

.dark-theme {
  background: var(--main-color-dark-theme);
  border: 4px solid var(--additional-color-dark-theme);

  .input {
    background: var(--additional-color-dark-theme);

    &:disabled {
      background: var(--secondary-dark-theme);
    }
  }

  .button {
    background: var(--additional-color-dark-theme);

    &:hover {
      background: var(--accent-dark-theme);
      color: var(--main-color-dark-theme);
    }

    &:disabled {
      background: var(--secondary-dark-theme);
      color: var(--black-dark-theme);
    }
  }
}

.light-theme {
  background: var(--main-color-light-theme);
  border: 4px solid var(--additional-color-light-theme);

  .input {
    background: var(--additional-color-light-theme);

    &:disabled {
      background: var(--secondary-light-theme);
    }
  }

  .button {
    background: var(--additional-color-light-theme);

    &:hover {
      background: var(--accent-light-theme);
      color: var(--main-color-light-theme);
    }

    &:disabled {
      background: var(--secondary-light-theme);
      color: var(--black-light-theme);
    }
  }
}
</style>
