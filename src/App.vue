<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
    <Layers />
      <section
        class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"
      >
        <button @click="createLayer">add layer</button>

        <div ref="layers"></div>
      </section>

      <Design />
    </section>
    <AddLayer v-show="addlayer" @close="closeModal"/>
  </main>
</template>

<script>
import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import NavBar from "./components/NavBar.vue";
import AddLayer from "./components/AddLayer.vue";

export default {
  name: "App",
  data(){
    return{
      addlayer: false
    }
  },
  components: {
    Design,
    NavBar,
    AddLayer,
    Layers
  },
  methods: {
    createLayer() {
      this.addlayer = true
    },
    closeModal() {
      this.addlayer = false
      this.editlayer = false
    },
  },
};
</script>
