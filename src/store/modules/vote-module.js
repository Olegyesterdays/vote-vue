import api from '@/services/api.js'
import router from '@/router/index.js'

export const voteModule = {
  state: {
    voteID: 0,

    title: 'Vote title',

    description: 'Vote description',

    questions: [
      {
        question_id: 0,
        titleQuestion: 'Question title 1',
        typeQuestion: 'one answer',
        options: [
          {
            option_id: 1,
            text: 'Option 1'
          },
          {
            option_id: 2,
            text: 'Option 1'
          },
          {
            option_id: 3,
            text: 'Option 1'
          }
        ]
      },
      {
        question_id: 0,
        titleQuestion: 'Question title 2',
        typeQuestion: 'several answers',
        options: [
          {
            option_id: 1,
            text: 'Option 1'
          },
          {
            option_id: 2,
            text: 'Option 1'
          },
          {
            option_id: 3,
            text: 'Option 1'
          }
        ]
      }
    ],

    answers: []
  },

  getters: {
    getTitle(state) {
      return state.title
    },

    getDescription(state) {
      return state.description
    },

    getQuestions(state) {
      return state.questions
    },

    getAnswers(state) {
      return state.answers
    },

    selectedOptionIds(state) {
      const selectedIds = []
      // Перебираем все вопросы
      state.questions.forEach(question => {
        // Перебираем все опции в текущем вопросе
        question.options.forEach(option => {
          // Если значение поля answer равно true, добавляем ID в массив
          if (option.answer === true) {
            selectedIds.push(option.option_id)
          }
        })
      })

      return selectedIds
    }
  },

  mutations: {
    gettingVote(state, { questions }) {
      // Обновляем каждый вопрос
      questions.forEach(question => {
        // Для каждой опции в вопросе добавляем поле answer со значением false
        question.options.forEach(option => {
          option.answer = false
        })
      })

      // Записываем обновленные вопросы в состояние хранилища
      state.questions = questions
    },

    writeDownAnswer(state, { questionId, optionId }) {
      const existingAnswerIndex = state.answers.findIndex(
        answer => answer.questionID === questionId
      )
      if (existingAnswerIndex !== -1) {
        // Если объект с таким title уже существует, заменяем его
        state.answers.splice(existingAnswerIndex, 1, {
          questionID: questionId,
          options: optionId
        })
      } else {
        // Иначе добавляем новый объект в массив
        state.answers.push({
          questionID: questionId,
          options: optionId
        })
      }
    },

    clear(state) {
      state.answers = []
      state.questions = []
      state.answersID = []
    },

    setVoteID(state, { voteID }) {
      state.voteID = voteID
    }
  },

  actions: {
    fetch({ commit }) {
      commit('setVoteID', { voteID: localStorage.getItem('voteID') })
    },

    update({ state }) {
      localStorage.setItem('voteID', state.voteID)
    },

    gettingVote({ commit, state }) {
      api
        .get(`/quizzes/${state.voteID}/questions`)

        .then(response => {
          commit('gettingVote', { questions: response.data.questions })
        })

        .catch(e => console.error(e))
    },

    sendAnswers({ commit, state, getters }) {
      api
        .post(`quizzes/${state.voteID}/complete`, getters.getAnswers)

        .then(response => {
          commit('clear')
          router.push({ path: '/account' })
        })

        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
