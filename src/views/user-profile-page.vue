<template>
  <div class="container">
    <input
        class="input name"
        type="text"
        placeholder="Имя"
        @input="editName($event.target.value)"
        :value="userInformation.name"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <input
        class="input surname"
        type="text"
        placeholder="Фамилия"
        @input="editSurname($event.target.value)"
        :value="userInformation.surname"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <input
        class="input patronymic"
        type="text"
        placeholder="Отчечтво"
        @input="editPatronymic($event.target.value)"
        :value="userInformation.patronymic"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <input
        class="input placeOfWork"
        type="text"
        placeholder="Место работы"
        @input="editPlaceOfWork($event.target.value)"
        :value="userInformation.placeOfWork"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <input
        class="input role"
        type="text"
        placeholder="Права"
        @input="editRole($event.target.value)"
        :value="userInformation.role"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <input
        class="input post"
        type="text"
        placeholder="Должность"
        @input="editPost($event.target.value)"
        :value="userInformation.post"
        :disabled="userInformation.role !== 'super-admin'"
    >

    <button
        class="button"
        @click="saveChanges"
        :disabled="userInformation.role !== 'super-admin'"
    >
      сохранить
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const userInformation = computed(() => store.getters["userProfileModule/getUserInformation"])

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

function saveChanges() {
  store.dispatch("userProfileModule/saveChanges")
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
