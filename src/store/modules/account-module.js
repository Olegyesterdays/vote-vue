import api from "@/services/api.js";

export const accountModule = {
    state: {
        userID: 17,

        voteType: "NotPassed",

        vote: {
            myVote: [
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVo5te 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title 65myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title my4Vote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVgote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title mgyVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "titlde myVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title myikrtuyVote 3",
                    date: "дд.мм.гггг",
                    voteID: ""
                }
            ],

            notPassed: [
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title notPassed 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
            ],

            passed: [
                {
                    title: "title passed 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                }
            ]
        }
    },

    getters: {
        getVoteType(state) {
            return state.voteType
        },

        getMyVote(state) {
            return state.vote.myVote
        },

        getNotPassed(state) {
            return state.vote.notPassed
        },

        getPassed(state) {
            return state.vote.passed
        }
    },

    mutations: {
        voteTypeMyVote(state) {
            state.voteType = "MyVote"
        },

        voteTypeNotPassed(state) {
            state.voteType = "NotPassed"
        },

        voteTypePassed(state) {
            state.voteType = "Passed"
        },

        listMyVote(state, { list }) {
            state.vote.myVote = list
        },

        listNotPassed(state, { list }) {
            state.vote.notPassed = list
        },

        listPassed(state, { list }) {
            state.vote.passed = list
        }
    },

    actions: {
        myCreated({ commit }) {
            api
                .get("/users/me/createdQuizzes"
                )

                .then((response) => {
                    commit("listMyVote", {
                        list: response
                    })
                })

                .catch((error) => {
                    console.log(error)
                })
        },

        onlyNotCompleted({ commit }) {
            api
                .get("/user/quizzes?onlyNotCompleted=true"
                )

                .then((response) => {
                    commit("listNotPassed", {
                        list: response
                    })
                })

                .catch((error) => {
                    console.log(error)
                })
        },

        onlyCompleted({ commit }) {
            api
                .get("/user/quizzes?onlyCompleted=true"
                )

                .then((response) => {
                    commit("listPassed", {
                        list: response
                    })
                })

                .catch((error) => {
                    console.log(error)
                })
        },
    },

    namespaced: true
}
