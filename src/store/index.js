import { createStore } from 'vuex'

export default createStore({
  state: {
    layer: []
  },
  mutations: {
    addlayer(state, layer){
      state.layer.push(layer)
    }
  },
  actions: {
  },
  modules: {
  }
})
