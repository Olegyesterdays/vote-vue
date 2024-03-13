<template>
  <button
      class="button item vote"
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
  background: var(--neutral-color);

  .title {
    margin-left: 16px;
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
    background: var(--neutral-color);

    &:hover {
      background: var(--main-color);
    }
  }

  .date {
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
}
</style>
