import api from "@/services/api.js";

export const accountModule = {
    state: {
        voteType: "NotPassed",

        vote: {
            myVote: [],

            notPassed: [],

            passed: []
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
                      list: response.data.createdQuizzes
                  })
              })

              .catch((error) => {
                  console.log(error)
              })
        },

        onlyNotCompleted({ commit }) {
            api
              .get("/users/me/attachedQuizzes?onlyNotCompleted=true"
              )

              .then((response) => {
                  commit("listNotPassed", {
                      list: response.data.attachedQuizzes
                  })
              })

              .catch((error) => {
                  console.log(error)
              })
        },

        onlyCompleted({ commit }) {
            api
              .get("/users/me/attachedQuizzes?onlyCompleted=true"
              )

              .then((response) => {
                  commit("listPassed", {
                      list: response.data.attachedQuizzes
                  })
              })

              .catch((error) => {
                  console.log(error)
              })
        },
    },

    namespaced: true
}
