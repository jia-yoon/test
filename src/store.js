import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'orginial title'
  },
  mutations: {
    setTitle (state, payload) {
      state.title = payload
    }
  },
  actions: {
  }
})
