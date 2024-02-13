<template>
  <div class="background">
    <create-vote />
    <create-questions />
    <div class="buttons">
      <button class="button create">Создать</button>
      <button class="button create-and-publish">Создать и опубликовать</button>
    </div>
  </div>
</template>

<script setup>
import CreateVote from "@/components/create-vote.vue";
import CreateQuestions from "@/components/create-questions.vue";
</script>

<style scoped lang="scss">
.background {
  display: flex;
  flex-direction: column;

  .buttons {
    margin-top: 8px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    .button {
      padding: 12px;
      margin: auto;
      width: 1026px;
      border: 0;
      border-radius: 12px;
      background: var(--neutral-light-theme);

      &:hover {
        background: var(--accent-light-theme) !important;
        color: var(--white-light-theme);
      }

      &:active {
        transform: scale(0.99);
      }
    }

    .create {

    }

    .create-and-publish {
      margin-top: 8px;
    }
  }
}
</style>
