import axios from "axios";

export const voteModule = {
    state: {
        questions: [
            {
                titleQuestion: "question 1",
                typeQuestion: "one answer",
                options: [
                    { text: "question 1 answer 1" },
                    { text: "question 1 answer 2" },
                    { text: "question 1 answer 3" },
                    { text: "question 1 answer 4" },
                    { text: "question 1 answer 5" },
                ],
            },
            {
                titleQuestion: "question 2",
                typeQuestion: "several answers",
                options: [
                    { text: "question 2 answer 1" },
                    { text: "question 2 answer 2" },
                    { text: "question 2 answer 3" },
                    { text: "question 2 answer 4" },
                    { text: "question 2 answer 5" },
                ],
            },
            {
                titleQuestion: "question 3",
                typeQuestion: "one answer",
                options: [
                    { text: "question 3 answer 1" },
                    { text: "question 3 answer 2" },
                    { text: "question 3 answer 3" },
                    { text: "question 3 answer 4" },
                    { text: "question 3 answer 5" },
                ],
            },
        ],

        formAnswers: [

        ]
    },

    getters: {
        getQuestions(state) {
            return state.questions
        }
    },

    mutations: {
        writeDownAnswer(state, { payload }) {
            const existingAnswerIndex = state.formAnswers.findIndex(answer => answer.title === payload.title);
            if (existingAnswerIndex !== -1) {
                // Если объект с таким title уже существует, заменяем его
                state.formAnswers.splice(existingAnswerIndex, 1, payload);
            } else {
                // Иначе добавляем новый объект в массив
                state.formAnswers.push(payload);
            }
        },

        clear(state) {
            state.questions = []
            state.formAnswers = []
        }
    },

    actions: {
        sendAnswers({ commit, state }) {
            axios.post("http://localhost:8000/saveAnswers", {
                formAnswers: state.formAnswers
            }, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }
            }).then((response) => {
                commit("clear")
            }).catch((error) => {
                console.log("Ошибка при отправке запроса:", error)
            })
        }
    },

    namespaced: true
}
