import AdminPage from "@/views/admin-page.vue";
import QuestionPage from "@/views/question-page.vue";
import VotePage from "@/views/vote-page.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/votePage',
        component: VotePage
    },
    {
        path: '/questionPage',
        component: QuestionPage
    },
    {
        path: '/adminPage',
        component: AdminPage
    }
]

const index = createRouter({
    routes,
    history: createWebHistory()
})

export default index
