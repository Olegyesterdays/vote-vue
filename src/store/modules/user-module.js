import api from '@/services/api.js'
import router from '@/router/index.js'

export const userModule = {
  state: {
    authToken: '',
    role: '',
    loginOrRegistration: 'login',
    email: '',
    password: '',
    fullName: ''
  },

  getters: {

    getAuthToken(state) {
      return state.authToken
    },

    getUserRole(state) {
      return state.role
    },

    getLoginOrRegistration(state) {
      return state.loginOrRegistration
    },

    getEmail(state) {
      return state.email
    },

    getPassword(state) {
      return state.password
    },

    getFullName(state) {
      return state.fullName
    }
  },

  mutations: {
    loginOrRegistration(state) {
      state.loginOrRegistration =
        state.loginOrRegistration === 'login' ? 'registration' : 'login'
      state.email = ''
      state.password = ''
      state.fullName = ''
    },

    email(state, { email }) {
      state.email = email
    },

    password(state, { password }) {
      state.password = password
    },

    fullName(state, { fullName }) {
      state.fullName = fullName
    },

    setAuthToken(state, { authToken }) {
      state.authToken = authToken
    },

    setUserRole(state, { role }) {
      state.role = role
    },

    clearEmailAndPassword(state) {
      state.email = ''
      state.password = ''
      state.fullName = ''
    },

    clearDataUser(state) {
      state.loginOrRegistration === 'login'
      state.authToken = ''
      state.role = ''
    }
  },

  actions: {
    fetch({ commit }) {
      commit('setAuthToken', { authToken: localStorage.getItem('authToken') })
      commit('setUserRole', { role: localStorage.getItem('role') })
    },

    update({ state }) {
      localStorage.setItem('authToken', state.authToken)
      localStorage.setItem('role', state.role)
    },

    login({ commit, state }) {
      api
        .post('login', {
          email: state.email,
          password: state.password
        })
        .then(response => {
          commit('setAuthToken', { authToken: response.data.authToken })
          commit('setUserRole', { role: response.data.role })
          commit('clearEmailAndPassword')

          router.push({ path: '/account' })
        })
        .catch(e => console.error(e))
    },

    registration({ commit, state }) {
      api
        .post('/register', {
          email: state.email,
          password: state.password,
          fullName: state.fullName
        })
        .then(response => {
          commit('setAuthToken', { authToken: response.data.authToken })
          commit('setUserRole', { role: response.data.role })
          commit('clearEmailAndPassword')

          router.push({ path: '/account' })
        })
        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
