<template>
  <div class="background">
    <create-vote />
    <create-questions />
    <div class="buttons">
      <button class="button create">
        {{ $t("createVotePage.buttons.buttonCreate")}}
      </button>
      <button class="button create-and-publish">
        {{ $t("createVotePage.buttons.buttonCreateAndPublish")}}
      </button>
      <button class="button cancellation" @click="$router.push('/account')">
        {{ $t("createVotePage.createQuestions.back") }}
      </button>
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 1032px;

    .button {
      padding: 12px;
      border: 0;
      border-radius: 12px;
      background: var(--neutral-light-theme);
    }

    .create {

    }

    .create-and-publish {
      margin: 8px 0;
    }

    .cancellation {

    }
  }
}
</style>
