import api from '@/services/api.js';
import router from "@/router/index.js";

export const voteModule = {
    state: {
        voteID: 12,

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
        gettingVote(state, { questions }) {
            state.questions = questions
        },

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
        gettingVote({ commit, state }) {
            api
                .get(`/vote/${ state.voteID }`
                )

                .then((response) => {
                    commit("gettingVote", { questions: response.data.questions })
                })

                .catch((error) => {
                    console.log(error)
                })
        },

        sendAnswers({ commit, state }) {
            api
                .post("/saveAnswers", {
                    formAnswers: state.formAnswers
                })

                .then((response) => {
                    commit("clear")

                    router.push({ path: "/account" })
                })

                .catch((error) => {
                    console.log(error)
                })
        }
    },

    namespaced: true
}
