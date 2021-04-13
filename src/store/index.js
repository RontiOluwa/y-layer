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
    },
    deletelayer(state, index){
      state.layer.splice(index, 1);
    },
  },
  actions: {
  },
  modules: {
  }
})
