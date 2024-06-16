import api from '@/services/api.js'

export const statisticsModule = {
  state: {
    voteID: 0,

    titleVote: 'titleVote',

    descriptionVote: 'descriptionVote',

    numberOfQuestions: 2,

    dateOfCreation: '20.05.2024',

    numberOfParticipants: 5,

    questions: [
      {
        text: 'question 1',
        options: [
          {
            text: 'answer 1',
            countOfVotes: 15
          },
          {
            text: 'answer 1',
            countOfVotes: 60
          },
          {
            text: 'answer 1',
            countOfVotes: 25
          }
        ]
      },
      {
        text: 'question 2',
        options: [
          {
            text: 'answer 1',
            countOfVotes: 40
          },
          {
            text: 'answer 1',
            countOfVotes: 50
          },
          {
            text: 'answer 1',
            countOfVotes: 10
          }
        ]
      }
    ]
  },

  getters: {
    getVoteID(state) {
      return state.voteID
    },

    getTitleVote(state) {
      return state.titleVote
    },

    getDescriptionVote(state) {
      return state.descriptionVote
    },

    getNumberOfQuestions(state) {
      return state.numberOfQuestions
    },

    getDateOfCreation(state) {
      return state.dateOfCreation
    },

    getNumberOfParticipants(state) {
      return state.numberOfParticipants
    },

    getQuestions(state) {
      return state.questions
    }
  },

  mutations: {
    voteID(state, { voteID }) {
      state.voteID = voteID
    },

    titleVote(state, { titleVote }) {
      state.titleVote = titleVote
    },

    descriptionVote(state, { descriptionVote }) {
      state.descriptionVote = descriptionVote
    },

    numberOfQuestions(state, { numberOfQuestions }) {
      state.numberOfQuestions = numberOfQuestions
    },

    dateOfCreation(state, { dateOfCreation }) {
      state.dateOfCreation = dateOfCreation
    },

    numberOfParticipants(state, { numberOfParticipants }) {
      state.numberOfParticipants = numberOfParticipants
    },

    questions(state, { questions }) {
      state.questions = questions
    }
  },

  actions: {
    statisticsOnQuestions({ commit, getters }) {
      api
        .get(`quizzes/${getters['getVoteID']}/questionStatistics`)

        .then(response => {
          commit('questions', {
            questions: response.data.Stats
          })

          commit('numberOfQuestions', {
            numberOfQuestions: response.data.Stats.length
          })

          commit('numberOfParticipants', {
            numberOfParticipants: response.data.statistics.notPassedUsers.length
          })
        })

        .catch(e => console.error(e))
    },

    statisticsOnVote({ commit, getters }) {
      api
        .get(`quizzes/${getters['getVoteID']}/statistic`)

        .then(response => {
          commit('numberOfParticipants', {
            numberOfParticipants: response.data.statistics.countOfAllUsers
          })
          // commit("dateOfCreation", { dateOfCreation: response.data.statistics.dateOfCreation })
        })

        .catch(e => console.error(e))
    },

    endVoting() {},

    deleteVoting() {}
  },

  namespaced: true
}
