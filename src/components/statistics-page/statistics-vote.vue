<template>
  <div class="container">
    <VoteContent />
    <Question
        v-for="({ question, answers }, index) in questions"
        :key="index"
        :question="question"
        :answers="answers"
    />
  </div>
</template>

<script setup>
import VoteContent from "@/components/statistics-page/vote-content.vue"
import Question from "@/components/statistics-page/question.vue"
import { computed } from "vue"
import { useStore } from 'vuex'

const store = useStore()

const questions = computed(() => store.getters["statisticsModule/getQuestions"])
</script>

<style scoped lang="scss">

</style>
