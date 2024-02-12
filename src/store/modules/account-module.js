import axios from "axios";

export const accountModule = {
    state: {
        voting: {
            myVote: [
                {
                    titleVote: "myVote"
                }
            ],
            new: [
                {
                    titleVote: "new"
                }
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
