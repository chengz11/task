import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    changeloading (state, step) {
      console.log(step)
      console.log('进入mutations里changeloading里面了')
      state.loading = step
    }
  },
  actions: {
  },
  modules: {
  }
})
