import api from "@/services/api.js";

export const accountModule = {
    state: {
        userID: 17,

        voteType: "MyVote",

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

            newVote: [
                {
                    title: "title newVote 1",
                    date: "дд.мм.гггг",
                    voteID: ""
                },
                {
                    title: "title newVote 2",
                    date: "дд.мм.гггг",
                    voteID: ""
                }
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

        getNewVote(state) {
            return state.vote.newVote
        },

        getPassed(state) {
            return state.vote.passed
        }
    },

    mutations: {
        voteTypeMyVote(state) {
            state.voteType = "MyVote"
        },

        voteTypeNewVote(state) {
            state.voteType = "NewVote"
        },

        voteTypePassed(state) {
            state.voteType = "Passed"
        },

        listMyVote(state, { list }) {
            state.vote.myVote = list
        },

        listNewVote(state, { list }) {
            state.vote.newVote = list
        },

        listPassed(state, { list }) {
            state.vote.passed = list
        }
    },

    actions: {
        notPublished({ commit }) {
            api
                .get("/user"
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
                .get("/user"
                )

                .then((response) => {
                    commit("listNewVote", {
                        list: response
                    })
                })

                .catch((error) => {
                    console.log(error)
                })
        },

        onlyCompleted({ commit }) {
            api
                .get("/user"
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
