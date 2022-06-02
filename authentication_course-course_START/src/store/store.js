import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.user = payload
      localStorage.setItem('user', JSON.stringify(payload))
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
    },
    CLEAR_USER_DATA(state) {
      state.user = null
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization'] = null
    }
  },
  actions: {
    async register ({commit}, credentials) {
      const registerData = await axios.post('//localhost:3000/register', credentials)
      commit('SET_USER_DATA', registerData.data)
    },
    async login ({commit}, credentials) {
      const registerData = await axios.post('//localhost:3000/login', credentials)
      commit('SET_USER_DATA', registerData.data)
    },
    async logout ({commit}) {
      commit("CLEAR_USER_DATA")
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    },
    currentUser: (state) => state.user
  }
})
