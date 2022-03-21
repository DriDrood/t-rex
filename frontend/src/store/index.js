import { createStore } from 'vuex'

export default createStore({
  state: {
    displayPage: "main"
  },
  mutations: {
    chnagePage(state, newPage) {
      state.displayPage = newPage;
    }
  },
  actions: {
  },
  modules: {
  }
})
