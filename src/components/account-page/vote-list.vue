<template>
  <div class="container">
    <div class="tabs">
      <input type="radio" id="radio-1" name="tabs" @change="newVote" checked/>
      <label class="tab" for="radio-1">
        <span class="text">
          {{ $t("accountPage.new") }}
        </span>

        <span class="mdi mdi-checkbox-blank-outline" />
        <span class="quantity">
          {{ votingNewVote.length }}
        </span>
      </label>

      <input type="radio" id="radio-2" name="tabs" @change="passed"/>
      <label class="tab" for="radio-2">
        <span class="text">
          {{ $t("accountPage.passed") }}
        </span>

        <span class="mdi mdi-checkbox-marked-outline" />
      </label>
      <span class="glider"></span>
    </div>

    <input
        class="input"
        type="text"
        :placeholder="$t('accountPage.nameVote')"
        v-model="searchText"
    />

    <div class="vote-list">
      <button
          class="button vote"
          v-for="({ title, date, voteID }, index) in voteType === 'NewVote' ? votingNewVote : votingPassed"
          :key="index"
          @click="takeAVote"
      >
        <img v-if="ava !== ''" :src="ava" alt="">
        <span v-else class="mdi mdi-vote"/>
        <span class="title">
          {{ title }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
// import ava from "@/assets/ava.jpg";
const ava = ref("")

const store = useStore();
const router = useRouter();
const voteType = computed(() => store.getters["accountModule/getVoteType"]);
const votingNewVote = computed(() => store.getters["accountModule/getNewVote"]);
const votingPassed = computed(() => store.getters["accountModule/getPassed"]);
const searchText = ref('');

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase()
  return voting.value.filter(vote => vote.title.toLowerCase().includes(search))
})

function newVote() {
  store.commit("accountModule/voteTypeNewVote")
}

function passed() {
  store.commit("accountModule/voteTypePassed")
}

function takeAVote() {
  router.push({path: '/account/vote'})
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .tabs {
    width: 1000px;
    margin: 12px auto;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    position: relative;

    * {
      z-index: 2;
    }

    input[type="radio"] {
      display: none;
    }

    .tab {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      border-radius: 99px;
      cursor: pointer;
      transition: color 0.15s ease-in;

      .mdi {
        display: none;
      }

      .quantity {
        margin-left: 12px;
        border-radius: 50%;
        font-size: 16px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-color);
        color: var(--main-color);
      }
    }

    input[type="radio"] {
      &:checked {
        & + label {
          .text, .mdi {
            color: var(--main-color);
          }

          .quantity {
            background: var(--main-color);
            color: var(--accent-color);
          }
        }
      }
    }

    input[id="radio-1"] {
      &:checked {
        & ~ .glider {
          transform: translateX(0);
        }
      }
    }

    input[id="radio-2"] {
      &:checked {
        & ~ .glider {
          transform: translateX(100%);
        }
      }
    }

    input[id="radio-3"] {
      &:checked {
        & ~ .glider {
          transform: translateX(200%);
        }
      }
    }

    .glider {
      position: absolute;
      display: flex;
      height: 44px;
      width: 50%;
      background-color: var(--accent-color);
      z-index: 1;
      border-radius: 99px;
      transition: 0.25s ease-out;
    }
  }

  .input {
    width: 1000px;
    margin: 0 auto 12px;
    border-radius: 40px;
    padding: 16px;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 4px solid var(--additional-color__30);
    box-sizing: border-box;
  }

  .vote-list {
    width: 1000px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    .button {
      height: 250px;
      //width: 180px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      border: 4px solid var(--additional-color__30);
      background: var(--main-color);
      transition: width 0.3s ease-in-out; /* Добавлено для анимации изменения ширины */

      .mdi-vote {
        font-size: 88px;
        position: absolute;
        width: 100%;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
        color: var(--additional-color__30);
      }

      img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .title {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .container {
    padding: 0 12px;

    .tabs, .vote-list, .input {
      width: 100%;
    }

    .vote-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .tabs {
      .tab {
        .text {
          display: none;
        }

        .mdi {
          font-size: 32px;
          display: block;
        }
      }
    }

    .vote-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
