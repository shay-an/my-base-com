import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null || JSON.parse(localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, payload) {
      localStorage.setItem('user', payload)
      state.user = JSON.parse(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
