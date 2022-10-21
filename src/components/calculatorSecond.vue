<template tabindex="0">
  <div>
    <h1>Calculator</h1>
    <h3>You can fully use keyboard to calculate</h3>
    <div class="col-lg-4 ms-auto me-auto my-5 w-25">
      <!-- <input
        type="text"
        @keydown.enter="enteredvalue('=')"
        v-model="output"
        class="w-100 border border-3 shadow p-3 bg-body mb-5 rounded fw-bolder fs-4 text-center"
      /> -->
      <div
        v-bind:value="output"
        class="border border-3 shadow p-3 bg-body mb-5 rounded fw-bolder fs-4"
      >
        {{ output || 0 }} 
      </div>
      <div class="row ms-auto me-auto">
        <div
          class="col-3 border border-3 shadow p-2 bg-body rounded fw-bolder fs-4"
          v-for="element in elements"
          :key="element"
          tabindex="0"
          @click="enteredvalue(element,$event)"          
          @keypress="enteredvalue(element,$event)"
        >
          {{ element }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, } from "vue";
export default {
  setup() {
    const output = ref("");
    const elements = ref([
      "1","2","3","+","4","5","6","-","7","8","9","*","C","0","=","/",]);

    function clearfield() {
      output.value = "";
    }

    function enteredvalue(value,e) {

      //if the user clicks
      if(e.type === "click")
      {
        e.key = value 
      }

      if (
        ["1","2","3","+","4","5","6","-","7","8","9","*","C","0","/",].includes(e.key)) {
        output.value += e.key;
      }
      if (e.key === "C"|| e.key === "c") {
        output.value = "";
      }
      if (e.key === "=") {
        output.value = eval(output.value);
      }
    }

    // onMounted(() => {window.addEventListener("keypress", e => {console.log(String.fromCharCode(e.key));});});
   
    return {
      output,
      elements,
      clearfield,
      enteredvalue,
    };
  },
};
</script>

<style>
.border:active {
  color: #fff;
  background-color: grey !important ;
}
input:focus{
  outline: none
}

</style>
