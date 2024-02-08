<template>
  <div class="background">
    <div class="statistics-panel">
      <div class="menu">
        <button class="item button back" @click="$router.push('/adminPage')">Назад</button>
        <div class="item itemNumberOfQuestions">
          <span>Количество вопросов</span>
          <span>{{ numberOfQuestions }}</span>
        </div>
        <div class="item itemCreationDate">
          <span>Дата создания</span>
          <span>{{ creationDate }}</span>
        </div>
        <div class="item itemUpdateDate">
          <span>Дата обновления</span>
          <span>{{ updateDate }}</span>
        </div>
        <div class="item itemNumberOfParticipants">
          <span>Количество участников</span>
          <span>{{ numberOfParticipants }}</span>
        </div>
        <button class="item button">Завершить голосование</button>
        <button class="item button">Редактировать голосование</button>
        <button class="item button">Удалить голосование</button>
      </div>
      <div class="statistics">
        <div class="item votingTitle">
          <img class="votingTitle-img" src="" alt="Картинка голосования"/>
          <div class="votingTitle-title">{{ votingTitle }}</div>
          <div class="votingTitle-description">{{ description }}</div>
        </div>
        <div class="vote">
          <div class="item" v-for="({ title, answersToQuestions }, index) in questions" :key="index">
            <div class="question">{{ title }}</div>
            <div class="answer">
              <div class="schedule" v-for="({ title, voteCount }, index) in answersToQuestions" :key="index">
                <div>{{ title }}</div>
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
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();

const numberOfQuestions = computed(() => store.getters["statisticsModule/getNumberOfQuestions"]);
const creationDate = computed(() => store.getters["statisticsModule/getCreationDate"]);
const updateDate = computed(() => store.getters["statisticsModule/getUpdateDate"]);
const numberOfParticipants = computed(() => store.getters["statisticsModule/getNumberOfParticipants"]);

const questions = computed(() => store.getters["statisticsModule/getQuestions"]);
const votingTitle = computed(() => store.getters["statisticsModule/getVotingTitle"]);
const description = computed(() => store.getters["statisticsModule/getDescription"]);
</script>

<style scoped lang="scss">
.background {
  display: flex;

  .statistics-panel {
    margin: 40px auto;
    display: flex;
    height: 800px;

    .menu {
      margin-right: 12px;
      width: 300px;
      display: flex;
      flex-direction: column;
      padding: 12px;
      border-radius: 12px;
      background: var(--secondary-light-theme);
      height: 335px;

      .back {
        margin-top: 0 !important;
      }

      .itemNumberOfQuestions, .itemCreationDate, .itemUpdateDate, .itemNumberOfParticipants {
        display: flex;
        justify-content: space-between;
        border-bottom: 4px solid var(--white-light-theme);
      }

      .itemNumberOfParticipants {
        border: 0;
      }

      .item {
        margin-top: 8px;
        padding: 8px;
      }

      .button {
        background: var(--white-light-theme);
        border: 0;
        border-radius: 8px;

        &:hover {
          background: var(--accent-light-theme);
          color: var(--white-light-theme);
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }

    .statistics {
      padding: 12px;
      border-radius: 12px;
      background: var(--secondary-light-theme);

      .vote {
        margin-top: 8px;
        height: 670px;
        width: 700px;
        overflow: hidden;
        overflow-y: auto;
        padding: 4px;

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
      }

      .votingTitle {
        margin: 0 !important;
        display: flex;
        flex-direction: column;
        //margin-bottom: 8px;

        &-img {

        }

        &-title {
          margin: 8px auto;
        }
      }

      .item {
        background: var(--white-light-theme);
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 20px;

        &:last-child {
          margin: 0;
        }

        .question {
          background: var(--secondary-light-theme);
          padding: 8px;
          border-radius: 8px;
        }

        .answer {
          background: var(--secondary-light-theme);
          border-radius: 8px;

          .schedule {
            margin-top: 8px;
            padding: 8px;

            .progress {
              width: 100%;
              -webkit-appearance: none;
              appearance: none;
              border: none;
              border-radius: 10px;
              height: 10px;

              &::-webkit-progress-bar {
                background-color: var(--white-light-theme);
              }

              &::-webkit-progress-bar,
              &::-webkit-progress-value {
                border-radius: 10px;
              }

              &::-moz-progress-bar {
                border-radius: 10px;
              }

              &::-webkit-progress-value {
                background: var(--additional-light-theme);
              }
            }
          }
        }
      }
    }
  }
}
</style>
