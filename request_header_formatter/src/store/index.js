import { createStore } from 'vuex'

export default createStore({
  state: {
    data:""
  },
  getters: {
    getData(state){
      return state.data
    }
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
