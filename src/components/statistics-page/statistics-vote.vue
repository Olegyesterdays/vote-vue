<template>
  <div class="container">
    <VoteContent />
    <Question
        v-for="({ text, options }, index) in questions"
        :key="index"
        :question="text"
        :answers="options"
    />
  </div>
</template>

<script setup>
import VoteContent from "@/components/statistics-page/vote-content.vue"
import Question from "@/components/statistics-page/question.vue"
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
// const router = useRouter();

const questions = computed(() => store.getters["statisticsModule/getQuestions"])

// onMounted(() => {
//   console.log(this.$route.params.id)
//   store.commit("statisticsModule/voteID", { voteID: router.params.id })
//   store.dispatch("statisticsModule/statisticsOnVote")
//   store.dispatch("statisticsModule/statisticsOnQuestions")
// })
</script>

<style scoped lang="scss">

</style>
