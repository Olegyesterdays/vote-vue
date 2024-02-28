import axios from "axios";
import { toRaw } from "vue";

export const authModule = {
    state: {
        loginOrRegistration: "login",

        formAuth: {
            email: "",
            password: ""
        }
    },

    getters: {
        getLoginOrRegistration(state) {
            return state.loginOrRegistration
        },

        getEmail(state) {
            return state.formAuth.email
        },

        getPassword(state) {
            return state.formAuth.password
        }
    },

    mutations: {
        loginOrRegistration(state) {
            state.loginOrRegistration = state.loginOrRegistration === 'login' ? 'registration' : 'login'
        },

        email(state, { email }) {
            state.formAuth.email = email
        },

        password(state, { password }) {
            state.formAuth.password = password
        },

        clear(state) {
            state.formAuth = {
                email: "",
                password: ""
            }
        }
    },

    actions: {
        async login({ commit, state }) {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/user/login", toRaw(state.formAuth));
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('role', "admin");
                localStorage.setItem('theme', "light-theme");
                commit('clear');
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async registration({ commit, state }) {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/user",  toRaw(state.formAuth));
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('role', "admin");
                localStorage.setItem('theme', "light-theme");
                commit('clear');
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        }
    },

    namespaced: true
}
