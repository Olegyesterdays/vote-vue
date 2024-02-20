import axios from "axios";
import { toRaw } from "vue";

export const authModule = {
    state: {
        formLogin: {
            email: "",
            password: ""
        },

        formRegistration: {
            email: "",
            password: ""
        }
    },

    getters: {
        getFormLogin(state) {
            return state.formLogin
        },

        getFormRegistration(state) {
            return state.formRegistration
        }
    },

    mutations: {
        loginEmail(state, { email }) {
            state.formLogin.email = email
        },

        loginPassword(state, { password }) {
            state.formLogin.password = password
        },

        registrationEmail(state, { email }) {
            state.formRegistration.email = email
        },

        registrationPassword(state, { password }) {
            state.formRegistration.password = password
        },

        formLoginClear(state) {
            state.formLogin = {
                email: "",
                password: ""
            }
        },

        formRegistrationClear(state) {
            state.formRegistration = {
                email: "",
                password: ""
            }
        },
    },

    actions: {
        async authLogin({ commit, state }) {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/user/login", toRaw(state.formLogin));
                localStorage.setItem('authToken', response.data.token);
                // localStorage.setItem('role', response.data.role);
                localStorage.setItem('role', "admin");
                // localStorage.setItem('role', "user");
                commit('formLoginClear');

            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async authRegistration({ commit, state }){
            try {
                const response = await axios.post("http://localhost:8000/api/v1/user",  toRaw(state.formRegistration));
                localStorage.setItem('authToken', response.data.token);
                // localStorage.setItem('role', response.data.role);
                localStorage.setItem('role', "admin");
                // localStorage.setItem('role', "user");
                commit('formRegistrationClear');
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },
    namespaced: true
}
