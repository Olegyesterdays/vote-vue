<template>
  <button
      class="button vote"
      @click="takeAVote"
  >
    <span class="mdi mdi-vote"/>
    <span class="title">
      {{ title }}
    </span>
  </button>
</template>

<script setup>
import {useRouter} from "vue-router";
import {defineProps} from "vue";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const props = defineProps({
  title: {
    type: String
  },

  date: {
    type: String
  },

  voteID: {
    type: String
  },

  ava: {
    type: String
  },

  voteType: {
    type: Boolean
  }
})
function takeAVote() {
  if (props.voteType) {
    store.commit("voteModule/setVoteID", { voteID: props.voteID})
    router.push({path: '/account/vote'})
  }
}
</script>

<style scoped lang="scss">
.button {
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 4px solid var(--additional-color__30);
  background: var(--main-color);
  opacity: 1;
  animation: anim 0.5s forwards;

  @keyframes anim {
    to {
      opacity: 1;
    }

    from {
      opacity: 0;
    }
  }

  .mdi-vote {
    font-size: 88px;
    position: absolute;
    width: 100%;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    color: var(--additional-color__30);
  }

  .title {
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    background: var(--main-color);
    width: 100%;
    height: 20%;
    z-index: 10;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
