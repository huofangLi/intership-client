import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    addToken (state, flag) {
      state.token = flag
    },
    addUsername (state, flag) {
      state.username = flag
    }
  },
  getters: {
    getToken: (state, getters) => {
      return state.token
    },
    getUsername: (state, getters) => {
      return state.username
    }
  },
  actions: {},
  modules: {}
})

