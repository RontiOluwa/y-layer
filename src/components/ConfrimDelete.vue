<template>
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center w-full sm:text-left">
            <h3 class="text-lg text-center leading-6 font-medium text-gray-900" id="modal-title">
              Are you sure you want to Delete this Layer
            </h3>
          </div>
        </div>
      </div>
      <div class="bg-white px-4 py-3 sm:px-6 sm:flex text-center">
        <button type="button" @click="close" class="w-full m-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:blue-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm">
          No
        </button>
        <button type="button" @click="deleteLayer()" class="w-full m-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:blue-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm">
          Yes
        </button>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  props: {
    size: {
      default: 16,
    },
    name: {},
    color: {},
    color2: {},
    index: String
  },
  setup(props) {
    const store = useStore();
    
     function deleteLayer() { 
      store.commit("deletelayer", props.index)
     }

    return{deleteLayer}
  },
  data() {
    return {
        layer_name: ''
    };
  }, 
  methods: {
    close(event) {
        this.$emit('close')
    },
    reset(){
      document.getElementById("newlayer_name").value = ''
    }
  }
};
</script>
