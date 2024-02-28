import axios from "axios";

export const statisticsModule = {
    state: {
        voteID: 123,

        additionalInformation: {
            numberOfQuestions: "21",
            dateOfCreation: "дд.мм.гггг",
            numberOfParticipants: "356"
        },

        questions: [
            {
                question: "question 1",
                answers: [
                    {
                        title: "question 1 answer 1",
                        percent: 11
                    },
                    {
                        title: "question 1 answer 2",
                        percent: 12
                    },
                    {
                        title: "question 1 answer 3",
                        percent: 13
                    },
                    {
                        title: "question 1 answer 4",
                        percent: 14
                    },
                    {
                        title: "question 1 answer 5",
                        percent: 15
                    },
                ]
            },
            {
                question: "question 2",
                answers: [
                    {
                        title: "question 2 answer 1",
                        percent: 21
                    },
                    {
                        title: "question 2 answer 2",
                        percent: 22
                    },
                    {
                        title: "question 2 answer 3",
                        percent: 23
                    },
                    {
                        title: "question 2 answer 4",
                        percent: 24
                    },
                    {
                        title: "question 2 answer 5",
                        percent: 25
                    },
                ]
            },
            {
                question: "question 3",
                answers: [
                    {
                        title: "question 3 answer 1",
                        percent: 31
                    },
                    {
                        title: "question 3 answer 2",
                        percent: 32
                    },
                    {
                        title: "question 3 answer 3",
                        percent: 33
                    },
                    {
                        title: "question 3 answer 4",
                        percent: 34
                    },
                    {
                        title: "question 3 answer 5",
                        percent: 35
                    },
                ]
            },
        ],

        votingStatus: true
    },

    getters: {
        getNumberOfQuestions(state) {
            return state.additionalInformation.numberOfQuestions
        },

        getDateOfCreation(state) {
            return state.additionalInformation.dateOfCreation
        },

        getNumberOfParticipants(state) {
            return state.additionalInformation.numberOfParticipants
        },

        getQuestions(state) {
            return state.questions
        }
    },

    mutations: {},

    actions: {
        endVoting({ state }) {
            axios.post(`http://localhost:8000/endVoting/${ state.voteID }`, {} , {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }
            })

            .then((response) => {

            })

            .catch((e) => {
                console.error(e)
            })
        },

        deleteVoting({ state }) {
            axios.delete(`http://localhost:8000/deleteVoting/${ state.voteID }`, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }
            })

            .then((response) => {

            })

            .catch((e) => {
                console.error(e)
            })
        }
    },

    namespaced: true
}
