import { createRouter, createWebHistory } from "vue-router"

import AuthPage from "@/views/auth-page.vue";
import AccountPage from "@/views/account-page.vue";
import VotePage from "@/views/vote-page.vue";
import StatisticsVotePage from "@/views/statistics-vote-page.vue";
import CreateVote from "@/views/create-vote.vue";

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
        meta: { requiresAdmin: true } // указываем, что доступ к этой странице должен быть только для администраторов
    },
    {
        path: '/account/statisticsVotePage',
        component: StatisticsVotePage,
        meta: { requiresAdmin: true } // указываем, что доступ к этой странице должен быть только для администраторов
    },
    {
        path: "/account/createVote",
        component: CreateVote,
        meta: { requiresAdmin: true } // указываем, что доступ к этой странице должен быть только для администраторов
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

// Навигационный охранник
router.beforeEach((to, from, next) => {
    const isAdmin = localStorage.getItem('authToken');
    // const isAdmin = localStorage.getItem('authToken') && (localStorage.getItem('role') === "admin");

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (!isAdmin) {
            // Если пользователь не администратор, перенаправляем его на страницу авторизации
            next('/');
        } else {
            // Если пользователь администратор, разрешаем ему доступ
            next();
        }
    } else {
        // Если страница не требует администраторских прав, разрешаем доступ
        next();
    }
});

export default router;
