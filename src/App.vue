<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
    <Layers />
      <section
        class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"
      >
        <button @click="createLayer">Click to add layer</button>

        <div ref="layers" class="mt-4" v-for="(item, index) in layer" v-bind:key="item.name">
          <div class="mt-2 bg-gray-200 p-6 m-2 w-10/12 mx-auto h-14"> 
            <a class="float-left -my-3">
              {{item.name}} 👋🏼 
            </a>
            <button @click="editlayeritem(index)" class="-my-4 w-full float-right inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Edit Layer</button>
            <button @click="deleteLayer(index)" class="-my-4 w-full float-right inline-flex justify-center rounded-md border border-red-500 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete Layer</button>
          </div>
        </div>
      </section>

      <Design />
    </section>
    <AddLayer v-show="addlayer" @close="closeModal"/>
    <EditLayer v-show="editlayer" @close="closeModal" :index="index"/>
  </main>
</template>

<script>
import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import NavBar from "./components/NavBar.vue";
import AddLayer from "./components/AddLayer.vue";
import EditLayer from "./components/EditLayer.vue";
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: "App",
  data(){
    return{
      addlayer: false,
      editlayer: false,
      layer: [],
      index: ''
    }
  },
  components: {
    Design,
    NavBar,
    AddLayer,
    EditLayer,
    Layers
  },
  setup() {
    const store = useStore();
    const layer = computed(() => store.state.layer)
   
     function deleteLayer(index) { 
      store.commit("deletelayer", index)
     }

    return{layer, deleteLayer}
  },
  methods: {
    createLayer() {
      this.addlayer = true
    },
    closeModal() {
      this.addlayer = false
      this.editlayer = false
    },
    editlayeritem(index){
      this.editlayer = true
      this.index = index
    }
  },
};
</script>
