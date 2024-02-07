import axios from "axios";

export const authModule = {
    state: {
        loginForm: [
            {
                name: "email",
                type: "email",
                data: ""
            },
            {
                name: "пароль",
                type: "password",
                data: ""
            }
        ],

        registrationForm: [
            {
                name: "Имя",
                type: "text",
                data: ""
            },
            {
                name: "Фамилия",
                type: "text",
                data: ""
            },
            {
                name: "email",
                type: "email",
                data: ""
            },
            {
                name: "пароль",
                type: "password",
                data: ""
            }
        ],

        form: [
            {
                name: "email",
                type: "email",
            },
            {
                name: "пароль",
                type: "password",
            }
        ],

        formAnswers: []
    },

    getters: {
        getForm(state) {
            return state.form;
        },
    },

    mutations: {
        addDataFormAnswer(state, payload) {
            const existingAnswerIndex = state.formAnswers.findIndex(item => item.name === payload.name);
            if (existingAnswerIndex !== -1) {
                state.formAnswers.splice(existingAnswerIndex, 1, payload);
            } else {
                state.formAnswers.push(payload);
            }
        },

        dataFormAnswerClear(state) {
            state.formAnswers = []
        },
    },

    actions: {
        async authLogin({ state, commit }){
            try {
                await axios.post("http://127.0.0.1:8000/login", state.formAnswers);

                commit('dataFormAnswerClear')
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async authRegistration({ state, commit }){
            try {
                await axios.post("http://127.0.0.1:8000/registration",  state.formAnswers);

                commit('dataFormAnswerClear')
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },
    namespaced: true
}
