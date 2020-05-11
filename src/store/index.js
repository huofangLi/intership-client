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
    }
  },
  getters: {
    getToken: (state, getters) => {
      return state.token
    }
  },
  actions: {},
  modules: {}
})
