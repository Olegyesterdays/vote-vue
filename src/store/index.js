import { createStore } from 'vuex';

import { voteModule } from "@/store/modules/vote-module.js";
import { authModule } from "@/store/modules/auth-module.js";
import { accountModule } from "@/store/modules/account-module.js";
import { statisticsModule } from "@/store/modules/statistics-module.js";
import { createVoteModule } from "@/store/modules/create-vote-module.js";
import { userProfileModule } from "@/store/modules/user-profile-module.js";

const store = createStore({
    state: {
        theme: localStorage.getItem('theme') || 'light'
    },

    getters: {
        getCurrentTheme(state) {
            return state.theme
        }
    },

    mutations: {
        switchTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        }
    },

    actions: {
        toggleTheme({ commit }) {
            commit('switchTheme');
        }
    },

    modules: {
        voteModule,
        authModule,
        accountModule,
        statisticsModule,
        createVoteModule,
        userProfileModule
    }
});

export default store;
