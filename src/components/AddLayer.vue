<template>
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center w-full sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Add Layer
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Enter name of layer and click submit
              </p>
            </div>
            <p class="text-center text-red-500" id="error"></p>
            <label class="block mt-4">
              <input id="layer_name" class="w-full p-2 border rounded-md border-gray-400 border-opacity-50 border-current" placeholder="Layer 1">
            </label>
          </div>
        </div>
      </div>
      <div class="bg-white px-4 py-3 sm:px-6 sm:flex">
        <button type="button" @click="close" class="w-full float-left inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:blue-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
          Close
        </button>
        <button type="button" @click="reset" class="mt-3 w-full float-right inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Reset
        </button>
        <button type="button" @click="addlayers()" class="w-full float-right inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:blue-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
          Submit
        </button>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  props: {
    size: {
      default: 16,
    },
    name: {},
    color: {},
    color2: {},
  },
  setup() {
    const store = useStore();
    const layer = computed(() => store.state.layer)
    
    function addlayers() { 
        var layer_name = document.getElementById("layer_name").value
        if(layer_name == ''){
          document.getElementById("layer_name").style.border = "2px solid red"
          setTimeout(()=>{
					document.getElementById("layer_name").style.border = "2px solid #aaabac"
				}, 3000);
        }
        else{
            store.commit("addlayer", {name: layer_name})
            document.getElementById("layer_name").value = ''
        }
    }

    return{addlayers}
  },
  data() {
    return {
        layer_name: '',
    };
  }, 
  methods: {
    close(event) {
        this.$emit('close')
    },
    reset(){
      document.getElementById("layer_name").value = ''
    }
  }
};
</script>
