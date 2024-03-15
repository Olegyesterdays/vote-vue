<template>
  <div class="container">
    <div class="menu-opportunities">
      <h3>
        Создать голосование
      </h3>

      <button
          class="all-my-votes"
          :class="isAllMyVotes ? 'all-my-votes__open' : ''"
          @click="viewAllMyVotes"
      >
        <span class="mdi mdi-chevron-down"/>
      </button>
    </div>

    <div class="my-votes" :class="isAllMyVotes ? '' : 'my-votes__close'">
      <button class="button button-create-vote" @click="createVote">
        <span class="mdi mdi-plus"/>
      </button>

      <button
          class="button item"
          v-for="({ title, date, voteID }, index) in myVotes"
          :key="index"
          @click="statistics"
      >
        <img :src="ava" alt="">
        <span class="title">
          {{ title }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ava from "@/assets/ava.jpg";

const store = useStore();
const router = useRouter();
const isAllMyVotes = ref(false);
const myVotes = computed(() => store.getters["accountModule/getMyVote"]);

function viewAllMyVotes() {
  isAllMyVotes.value = !isAllMyVotes.value
}

function createVote() {
  router.push({ path: "/account/createVote" });
}

function statistics() {
  router.push({ path: "/account/statistics" });
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--neutral-color);

  .menu-opportunities {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    h3 {
      margin: 0;
      height: 40px;
      display: flex;
      align-items: center;
    }

    .all-my-votes {
      width: 40px;
      height: 40px;
      background: var(--neutral-color);
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;

      &:hover {
        background: var(--main-color);
      }

      span {
        font-size: 40px;
        transition: transform 0.3s; /* Добавлено для анимации */
      }

      &__open {
        span {
          transform: rotate(180deg); /* Добавлено для поворота при активации */
        }
      }
    }
  }

  .my-votes {
    width: 1000px;
    margin: 0 auto 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    &__close {
      height: 250px;
    }

    .button {
      height: 250px;
      width: 180px;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: auto;
      position: relative;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
      }

      .title {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
      }

      &-create-vote {
        border: 4px solid var(--accent-color);
        background: var(--neutral-color);
        border-radius: 12px;
        font-size: 88px;

        .mdi {
          color: var(--accent-color);
        }
      }

      &:active {
        transform: scale(0.98);
      }
    }

    .item {
      border: 4px solid var(--accent-color);
      background: var(--neutral-color);
      border-radius: 12px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .container {
    .my-votes, .menu-opportunities {
      width: 100%;
    }
  }
}
</style>
