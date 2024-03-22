import api from '@/services/api.js'
import router from '@/router/index.js'

export const voteModule = {
  state: {
    voteID: 0,

    questions: [],

    answersID: [],
  },

  getters: {
    getQuestions(state) {
      return state.questions
    },

    selectedOptionIds(state) {
      const selectedIds = [];
      // Перебираем все вопросы
      state.questions.forEach(question => {
        // Перебираем все опции в текущем вопросе
        question.options.forEach(option => {
          // Если значение поля answer равно true, добавляем ID в массив
          if (option.answer === true) {
            selectedIds.push(option.option_id);
          }
        });
      });

      return selectedIds;
    }
  },

  mutations: {
    gettingVote(state, { questions }) {
      // Обновляем каждый вопрос
      questions.forEach(question => {
        // Для каждой опции в вопросе добавляем поле answer со значением false
        question.options.forEach(option => {
          option.answer = false;
        });
      });

      // Записываем обновленные вопросы в состояние хранилища
      state.questions = questions;
    },

    toggleAnswer(state, { questionId, optionId }) {
      // Находим вопрос по его идентификатору
      const question = state.questions.find(question => question.question_id === questionId);

      if (question) {
        // Проверяем тип вопроса
        if (question.typeQuestion === "several answers") {
          // Если тип вопроса - несколько ответов, устанавливаем значения для каждой опции
          question.options.forEach(option => {
            // Если идентификатор опции есть в переданном массиве, устанавливаем значение true
            option.answer = !!optionId.includes(option.option_id);
          });
        } else if (question.typeQuestion === "one answer") {
          // Если тип вопроса - один ответ
          question.options.forEach(option => {
            // Устанавливаем для всех ответов значение false
            // Устанавливаем значение true только для выбранного ответа
            option.answer = option.option_id === optionId;
          });
        }
      }
    },

    clear(state) {
      state.questions = []
      state.formAnswers = []
      state.answersID = []
    },

    setVoteID(state, { voteID }) {
      state.voteID = voteID
    }
  },

  actions: {
    fetch({ commit }) {
      commit("setVoteID", { voteID: localStorage.getItem("voteID")})
    },

    update({ state }) {
      localStorage.setItem("voteID", state.voteID);
    },

    gettingVote({ commit, state }) {
      api
        .get(`/quizzes/${state.voteID}/questions`
        )

        .then((response) => {
          commit('gettingVote', { questions: response.data.questions })
        })

        .catch((error) => {
          console.log(error)
        })
    },

    sendAnswers({ commit, state, getters }) {
      const answersID = getters.selectedOptionIds;

      api
        .post(`quizzes/${state.voteID}/attachUsersToQuiz`, {
          answersID: answersID
        })

        .then((response) => {
          commit('clear')
          router.push({ path: '/account' })
        })

        .catch((error) => {
          console.log(error)
        })
    },
  },

  namespaced: true
}
