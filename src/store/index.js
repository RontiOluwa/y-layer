import { createStore } from 'vuex'

export default createStore({
  state: {
    layer: []
  },
  mutations: {
    addlayer(state, layer){
      state.layer.push(layer)
    },
    editlayer(state, index){
      console.log(state.layer)
      state.layer[index[0]] = index[1]
      console.log(state.layer)
    }
  },
  actions: {
  },
  modules: {
  }
})
