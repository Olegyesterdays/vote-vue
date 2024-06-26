import api from '@/services/api.js'
import router from '@/router/index.js'

export const createVoteModule = {
  state: {
    quiz_id: 0,
    creatingOrParticipants: 'creating',
    editingQuestionIndex: null,
    title: '',
    description: '',
    attachedUsers: [],
    questions: [
      {
        titleQuestion: '',
        typeQuestion: '',
        options: [{ text: '' }]
      }
    ]
  },

  getters: {
    getEditingQuestionIndex(state) {
      return state.editingQuestionIndex
    },
    getQuestions(state) {
      return state.questions
    },
    getCreatingOrParticipants(state) {
      return state.creatingOrParticipants
    },
    getListUsers(state) {
      return state.listUsers
    },
    getTypeAnswers(state) {
      return indexQuestion => state.questions[indexQuestion].typeQuestion
    }
  },

  mutations: {
    setEditingQuestionIndex(state, index) {
      state.editingQuestionIndex = index
    },
    resetEditingQuestionIndex(state) {
      state.editingQuestionIndex = null
    },
    creatingOrParticipants(state) {
      state.creatingOrParticipants =
        state.creatingOrParticipants === 'creating'
          ? 'participants'
          : 'creating'
    },
    addTitle(state, { title }) {
      state.title = title
    },
    addDescription(state, { description }) {
      state.description = description
    },
    recordTitleQuestion(state, { titleQuestion, indexQuestion }) {
      state.questions[indexQuestion].titleQuestion = titleQuestion
    },
    recordTheAnswer(state, { answer, indexQuestion, indexAnswer }) {
      state.questions[indexQuestion].options[indexAnswer].text = answer
    },
    typeQuestion(state, { type, indexQuestion }) {
      state.questions[indexQuestion].typeQuestion = type
    },
    newQuestion(state) {
      state.questions.push({
        titleQuestion: '',
        typeQuestion: '',
        options: [{ text: '' }]
      })
    },
    newAnswer(state, { indexQuestion }) {
      state.questions[indexQuestion].options.push({ text: '' })
    },
    deleteQuestion(state, { indexQuestion }) {
      state.questions.splice(indexQuestion, 1)
    },
    deleteAnswer(state, { indexQuestion, indexAnswer }) {
      state.questions[indexQuestion].options.splice(indexAnswer, 1)
    },
    clear(state) {
      state.title = ''
      state.description = ''
      state.questions = [
        {
          titleQuestion: '',
          typeQuestion: '',
          options: [{ text: '' }]
        }
      ]
    },
    quiz_id(state, { quiz_id }) {
      state.quiz_id = quiz_id
    }
  },

  actions: {
    createVote({ commit, state }) {
      api
        .post('/quizzes', {
          title: state.title,
          description: state.description,
          questions: state.questions,
          attachedUsers: state.attachedUsers
        })
        .then(response => {
          commit('clear')
          router.push('/account')
        })
        .catch(e => console.error(e))
    },
    createAndPublishVote({ commit, state }) {
      api
        .post('/quizzes?publish=true', {
          title: state.title,
          description: state.description,
          questions: state.questions,
          attachedUsers: state.attachedUsers
        })
        .then(response => {
          commit('clear')
          router.push('/account')
        })
        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
