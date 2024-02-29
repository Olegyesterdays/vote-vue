<template>
  <button
      class="button item vote"
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
      @click="clickItem"
  >
    <span class="title">{{ title }}</span>
    <span
        v-if="voteType !== 'MyVote'"
        class="date"
    >
      {{ date }}
    </span>

    <button
        v-if="voteType === 'MyVote'"
        class="button additionalInformation"
        :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
        @click.stop="additionalInformation"
    >
      <svg-icon type="mdi" :path="mdiDotsVertical" />
    </button>
  </button>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsVertical } from '@mdi/js'
import { defineProps, computed } from "vue";
import { useStore } from "vuex"
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const voteType = computed(() => store.getters["accountModule/getVoteType"]);
const theme = computed(() => store.getters["getCurrentTheme"]);

const props = defineProps({
  title: {
    type: String,
    default: "Text"
  },

  date: {
    type: String,
    default: "дд.мм.гггг"
  },

  userID: {
    type: String,
  },

  typeVote: {
    type: String
  }
})

function clickItem() {
  if (props.typeVote !== 'Passed') {
    router.push('/account/vote')
  }
}

function additionalInformation() {
  router.push("/account/statistics");
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 0;
  border-radius: 12px;
  padding: 0;

  .title {
    margin-left: 8px;
  }

  .additionalInformation {
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    border: 0;
  }

  .date {
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
}

.dark-theme {
  background: var(--main-color-dark-theme);

  .additionalInformation {
    background: var(--main-color-dark-theme);

    &:hover {
      background: var(--additional-color-dark-theme);
    }
  }
}

.light-theme {
  background: var(--main-color-light-theme);

  .additionalInformation {
    background: var(--main-color-light-theme);

    &:hover {
      background: var(--additional-color-light-theme);
    }
  }
}
</style>
