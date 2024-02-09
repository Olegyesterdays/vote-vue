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
        loginEmail(state, email) {
            state.formLogin.email = email
        },

        loginPassword(state, password) {
            state.formLogin.password = password
        },

        registrationEmail(state, email) {
            state.formRegistration.email = email
        },

        registrationPassword(state, password) {
            state.formRegistration.password = password
        },

        formAnswersClear(state) {
            state.formLogin = {
                email: "",
                password: ""
            }

            state.formRegistration = {
                email: "",
                password: ""
            }
        },
    },

    actions: {
        async authLogin({ state }){
            try {
                await axios.post("http://localhost:8000/api/v1/user/login", toRaw(state.formLogin));
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async authRegistration({ state }){
            try {
                await axios.post("http://localhost:8000/api/v1/user",  toRaw(state.formRegistration));
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },
    namespaced: true
}
