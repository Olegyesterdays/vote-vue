<template>
  <div class="container">
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
  background: var(--main-color);
  border: 4px solid var(--neutral-color);

  .input {
    margin: 6px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-color);

    &:disabled {
      background: var(--secondary-color);
    }
  }

  .button {
    margin: 6px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }

    &:disabled {
      background: var(--secondary-color);
      color: var(--black-color);
    }
  }
}
</style>
