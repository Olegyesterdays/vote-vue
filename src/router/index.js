import {
    createRouter,
    createWebHistory
} from "vue-router";

import AuthPage from "@/views/auth-page.vue";
import AccountPage from "@/views/account-page.vue";
import VotePage from "@/views/vote-page.vue";
import StatisticsPage from "@/views/statistics-page.vue";
import CreateVotePage from "@/views/create-vote-page.vue";
import UserProfilePage from "@/views/user-profile-page.vue";
import ListUsersPage from "@/views/list-users-page.vue";

const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/account/vote',
        component: VotePage
    },
    {
        path: '/account',
        component: AccountPage,
        meta: { requiresAccount: true }
    },
    {
        path: '/account/statistics',
        component: StatisticsPage,
        meta: { requiresAccount: true }
    },
    {
        path: "/account/createVote",
        component: CreateVotePage,
        meta: { requiresAccount: true }
    },
    {
        path: "/account/userProfilePage",
        component: UserProfilePage,
        meta: { requiresAccount: true }
    },
    {
        path: "/account/listUsersPage",
        component: ListUsersPage,
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
