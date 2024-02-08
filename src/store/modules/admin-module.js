import axios from "axios";

export const adminModule = {
    state: {
        voting: [
            {
                voteID: "1",
                titleVote: "titleVote 1",
            }
        ]
    },

    getters: {
        getVote(state) {
            return state.voting;
        },
    },

    mutations: {},

    actions: {},

    namespaced: true
}
