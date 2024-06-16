<template>
  <button
      class="button user"
      @click="takeAUser"
  >
    <span class="mdi mdi-account"/>
    <span class="title">
      {{ name }}
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
  name: {
    type: String
  },

  date: {
    type: String
  },

  userID: {
    type: String
  },

  ava: {
    type: String
  }
})

function takeAUser() {
  router.push({ path: `/account/userProfilePage/${ props.userID }` });
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

  .mdi-account {
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
