import axios from "axios";

export const accountModule = {
    state: {
        voting: {
            myVote: [
                {
                    titleVote: "myVote",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "AmyVote",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "ABmyVote",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "ABCmyVote",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "myVoteABC",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "myVoteABCD",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
            ],
            new: [
                {
                    titleVote: "new",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "Anew",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "nAew",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "nABew",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "ABnew",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "newCD",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
                {
                    titleVote: "CD  new",
                    date: "дд.мм.гггг",
                    voteID: "123"
                },
            ],
            passed: [
                {
                    titleVote: "passed",
                    date: "дд.мм.гггг",
                    voteID: "123"
                }
            ]
        }
    },

    getters: {
        getMyVote(state) {
            return state.voting.myVote
        },

        getNew(state) {
            return state.voting.new
        },

        getPassed(state) {
            return state.voting.passed
        }
    },

    mutations: {},

    actions: {},

    namespaced: true
}
