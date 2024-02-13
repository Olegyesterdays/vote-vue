import { createRouter, createWebHistory } from "vue-router"

import AuthPage from "@/views/auth-page.vue";
import AccountPage from "@/views/account-page.vue";
import VotePage from "@/views/vote-page.vue";
import StatisticsVotePage from "@/views/statistics-vote-page.vue";
import CreateVote from "@/views/create-vote-page.vue";
import Settings from "@/views/settings-page.vue"

const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/vote',
        component: VotePage
    },
    {
        path: '/account',
        component: AccountPage,
        meta: { requiresAccount: true }
    },
    {
        path: '/account/statisticsVotePage',
        component: StatisticsVotePage,
        meta: { requiresAccount: true }
    },
    {
        path: "/account/createVote",
        component: CreateVote,
        meta: { requiresAccount: true }
    },
    {
        path: "/account/settings",
        component: Settings,
        meta: { requiresAccount: true }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

// Навигационный охранник
router.beforeEach((to, from, next) => {
    const isAdmin = localStorage.getItem('authToken');

    if (to.matched.some(record => record.meta.requiresAccount)) {
        if (!isAdmin) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
