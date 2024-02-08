import axios from "axios";

export const authModule = {
    state: {
        formAnswers: []
    },

    mutations: {
        addDataForm(state, payload) {
            const existingAnswerIndex = state.formAnswers.findIndex(item => item.name === payload.name);
            if (existingAnswerIndex !== -1) {
                state.formAnswers.splice(existingAnswerIndex, 1, payload);
            } else {
                state.formAnswers.push(payload);
            }
        },

        formAnswersClear(state) {
            state.formAnswers = []
        },
    },

    actions: {
        async authLogin({ state, commit }){
            try {
                await axios.post("http://127.0.0.1:8000/login", state.formAnswers);
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },

        async authRegistration({ state, commit }){
            try {
                await axios.post("http://127.0.0.1:8000/registration",  state.formAnswers);
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },
    namespaced: true
}
