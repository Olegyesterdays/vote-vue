import api from '@/services/api.js'

export const accountModule = {
  state: {
    voteType: 'NotPassed',

    nextVotes: '',

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
    },

    getNextVotes(state) {
      return state.nextVotes
    }
  },

  mutations: {
    voteTypeNotPassed(state) {
      state.voteType = 'NotPassed'
    },

    voteTypePassed(state) {
      state.voteType = 'Passed'
    },

    listMyVote(state, { list }) {
      state.vote.myVote = list
    },

    listNotPassed(state, { list }) {
      state.vote.notPassed = list
    },

    listPassed(state, { list }) {
      state.vote.passed = list
    },

    uploadMoreVotes(state, { uploadMoreVotes }) {
      state.vote.myVote = [...state.vote.myVote, ...uploadMoreVotes]
    },

    nextVotes(state, { nextVotes }) {
      state.nextVotes = nextVotes
    }
  },

  actions: {
    myCreated({ commit }) {
      api
        .get('/users/me/createdQuizzes')

        .then(response => {
          commit('listMyVote', { list: response.data.createdQuizzes })

          commit("nextVotes", { nextVotes: response.data.pagination.next_page })
        })

        .catch(e => console.error(e))
    },

    onlyNotCompleted({ commit }) {
      api
        .get('/users/me/attachedQuizzes?onlyNotCompleted=true')

        .then(response => {
          commit('listNotPassed', { list: response.data.attachedQuizzes })
        })

        .catch(e => console.error(e))
    },

    onlyCompleted({ commit }) {
      api
        .get('/users/me/attachedQuizzes?onlyCompleted=true')

        .then(response => {
          commit('listPassed', { list: response.data.attachedQuizzes })
        })

        .catch(e => console.error(e))
    },

    uploadMoreVotes({ commit, getters }) {
      api
        .get(getters["getNextVotes"])

        .then(response => {
          commit("uploadMoreVotes", { uploadMoreVotes: response.data.createdQuizzes })

          commit("nextVotes", { nextVotes: response.data.pagination.next_page })
        })

        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
