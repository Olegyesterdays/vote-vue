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

            if (state.theme === 'light') {
                document.documentElement.style.setProperty('--accent-color', '#ED202E');
                document.documentElement.style.setProperty('--secondary-color', '#9DB0BB');
                document.documentElement.style.setProperty('--black-color', '#000000');
                document.documentElement.style.setProperty('--additional-color', '#0065E2');
                document.documentElement.style.setProperty('--neutral-color', '#E6F0FD');
                document.documentElement.style.setProperty('--main-color', '#FFFFFF');
            } else {
                document.documentElement.style.setProperty('--accent-color', '#ED202E');
                document.documentElement.style.setProperty('--secondary-color', '#9DB0BB');
                document.documentElement.style.setProperty('--black-color', '#0C0C0C');
                document.documentElement.style.setProperty('--additional-color', '#0065E2');
                document.documentElement.style.setProperty('--neutral-color', '#B3D1F7');
                document.documentElement.style.setProperty('--main-color', '#FFFFFF');
            }
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
