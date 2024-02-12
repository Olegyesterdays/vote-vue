import axios from "axios";

export const accountModule = {
    state: {
        voting: {
            myVote: [
                {
                    titleVote: "myVote"
                },
                {
                    titleVote: "AmyVote"
                },
                {
                    titleVote: "ABmyVote"
                },
                {
                    titleVote: "ABCmyVote"
                },
                {
                    titleVote: "myVoteABC"
                },
                {
                    titleVote: "myVoteABCD"
                },
            ],
            new: [
                {
                    titleVote: "new"
                },
                {
                    titleVote: "Anew"
                },
                {
                    titleVote: "nAew"
                },
                {
                    titleVote: "nABew"
                },
                {
                    titleVote: "ABnew"
                },
                {
                    titleVote: "newCD"
                },
                {
                    titleVote: "CD  new"
                },
            ],
            passed: [
                {
                    titleVote: "passed"
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
