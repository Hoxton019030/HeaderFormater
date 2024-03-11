import { createStore } from 'vuex'

export default createStore({
  state: {
    data:""
  },
  getters: {
  },
  mutations: {
    setData(state,newData){
      state.data = newData;
    }
  },
  actions: {
  },
  modules: {
  }
})
