<template>
  <div class="background">
    <div class="statistics-panel">
      <div class="menu">
        <button class="menu-item button" @click="$router.push('/adminPage')">Назад</button>

        <div class="menu-item item-number-of-questions">
          <span>Количество вопросов</span>
          <span>{{ numberOfQuestions }}</span>
        </div>

        <div class="menu-item item-creation-date">
          <span>Дата создания</span>
          <span>{{ creationDate }}</span>
        </div>

        <div class="menu-item item-number-of-participants">
          <span>Количество участников</span>
          <span>{{ numberOfParticipants }}</span>
        </div>

        <button class="menu-item button">Завершить голосование</button>
        <button class="menu-item button">Редактировать голосование</button>
        <button class="menu-item button end">Удалить голосование</button>
      </div>

      <div class="statistics">
        <div class="item votingTitle">
          <img class="votingTitle-img" src="" alt="Картинка голосования"/>
          <div class="votingTitle-title">{{ votingTitle }}</div>
          <div class="votingTitle-description">{{ description }}</div>
        </div>
        <div class="questions">
          <div class="item" v-for="({ title, answersToQuestions }, index) in questions" :key="index">
            <span class="item-title">{{ title }}</span>
            <div class="answers">
              <div class="answer" v-for="({ title, voteCount }, index) in answersToQuestions" :key="index">
                <span>{{ title }}</span>
                <progress class="progress" max="100" :value="voteCount"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const numberOfQuestions = computed(() => store.getters["statisticsModule/getNumberOfQuestions"]);
const creationDate = computed(() => store.getters["statisticsModule/getCreationDate"]);
const numberOfParticipants = computed(() => store.getters["statisticsModule/getNumberOfParticipants"]);

const questions = computed(() => store.getters["statisticsModule/getQuestions"]);
const votingTitle = computed(() => store.getters["statisticsModule/getVotingTitle"]);
const description = computed(() => store.getters["statisticsModule/getDescription"]);
</script>

<style lang="scss" scoped>
.background {
  display: flex;

  .statistics-panel {
    margin: 40px auto;
    display: flex;
    padding: 12px;
    border-radius: 12px;
    background: var(--secondary-light-theme);

    .button {
      background: var(--secondary-light-theme);
      border: 0;
      border-radius: 8px;
      padding: 8px;
      justify-content: center !important;

      &:hover {
        background: var(--accent-light-theme);
        color: var(--white-light-theme);
      }

      &:active {
        transform: scale(0.99);
      }
    }

    .end {
      margin: 0 !important;
    }

    .menu {
      padding: 8px;
      border-radius: 8px;
      margin-right: 12px;
      background: var(--white-light-theme);

      &-item {
        margin-bottom: 8px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    .statistics {
      width: 800px;
      padding: 8px;
      border-radius: 8px;
      background: var(--white-light-theme);

      .votingTitle {
        background: var(--secondary-light-theme);
        padding: 8px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;

        &-img, &-title, &-description {
          margin: 4px auto;
        }
      }

      .questions {
        border: 4px solid var(--secondary-light-theme);
        margin-top: 8px;
        padding-right: 4px;
        border-radius: 8px;
        background: var(--secondary-light-theme);
        height: 600px ;
        overflow: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 8px;
        }

        &::-webkit-scrollbar-track {
          border-radius: 4px;
          background-color: transparent;
          border: 0;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background: var(--white-light-theme);
        }

        .item {
          margin-bottom: 8px;
          padding: 8px;
          border-radius: 8px;
          background: var(--white-light-theme);

          &:last-child {
            margin: 0;
          }

          .answers {
            padding: 8px;
            border-radius: 8px;
            background: var(--secondary-light-theme);
            margin-top: 8px;
            .answer {
              display: flex;
              flex-direction: column;

              .progress {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
