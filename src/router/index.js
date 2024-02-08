import { createRouter, createWebHistory } from "vue-router"

import AuthPage from "@/views/auth-page.vue";
import AdminPage from "@/views/admin-page.vue";
import VotePage from "@/views/vote-page.vue";
import StatisticsVotePage from "@/views/statistics-vote-page.vue";
import CreateVote from "@/views/create-vote.vue";


const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/votePage',
        component: VotePage
    },
    {
        path: '/adminPage',
        component: AdminPage
    },
    {
        path: '/adminPage/statisticsVotePage',
        component: StatisticsVotePage
    },
    {
        path: "/createVote",
        component: CreateVote
    }
]

const index = createRouter({
    routes,
    history: createWebHistory()
})

export default index
