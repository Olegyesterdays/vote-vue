import api from '@/services/api.js';

export const createVoteModule = {
    state: {
        userID: "14",

        title: "",

        description: "",

        questions: [
            {
                titleQuestion: "",
                typeQuestion: "",
                options: [
                    {
                        text: ""
                    }
                ]
            }
        ]
    },

    getters: {
        getQuestions(state) {
            return state.questions
        }
    },

    mutations: {
        addTitle(state, { title }) {
            state.title = title
        },

        addDescription(state, { description }) {
            state.description = description
        },

        // ================================================

        recordTitleQuestion(state, {titleQuestion, indexQuestion}) {
            state.questions[indexQuestion].titleQuestion = titleQuestion
        },

        recordTheAnswer(state, {answer, indexQuestion, indexAnswer}) {
            state.questions[indexQuestion].options[indexAnswer].text = answer
        },

        typeQuestion(state, { type, indexQuestion }) {
            state.questions[indexQuestion].typeQuestion = type
        },

        newQuestion(state) {
            state.questions.push({
                titleQuestion: "",
                typeQuestion: "",
                options: [
                    {
                        text: ""
                    }
                ]
            })
        },

        newAnswer(state, {indexQuestion}) {
            state.questions[indexQuestion].options.push({
                text: ""
            })
        },

        deleteQuestion(state, {indexQuestion}) {
            state.questions.splice(indexQuestion, 1)
        },

        deleteAnswer(state, {indexQuestion, indexAnswer}) {
            state.questions[indexQuestion].options.splice(indexAnswer, 1)
        },

        clear(state) {
            state.title = ""
            state.description = ""
            state.questions = [
                {
                    titleQuestion: "",
                    typeQuestion: "",
                    options: [
                        {
                            text: ""
                        }
                    ]
                }
            ]
        }
    },

    actions: {
        createVote({ commit, state }) {
            api.post("/quiz", {
                quiz: {
                    title: state.title,
                    description: state.description,
                    questions: state.questions
                }
            }).then((response) => {
                commit("clear")
            }).catch((error) => {
                console.log(error)
            })
        },

        createAndPublishVote({ commit, state }) {
            api.post("/quiz", {
                quiz: {
                    title: state.title,
                    description: state.description,
                    questions: state.questions
                }
            }).then((response) => {
                commit("clear")
            }).catch((error) => {
                console.log(error)
            })
        }
    },

    namespaced: true
}
