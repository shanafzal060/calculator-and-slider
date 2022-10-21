<template >
  <div>
    <h1>Calculator</h1>
    <h3>You can fully use keyboard to calculate</h3>    
    <div class="col-lg-4 ms-auto me-auto">
      <table class="table table-bordered table-responsive  my-5 ">
        <tbody>
          <tr>
            <td colspan="4" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4" > {{output || 0}} </td>
          </tr><br><br>
          
          <tr>
            <td tabindex="1" @keydown.49="enteredvalue('1')"         @click="enteredvalue('1')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">1</td>
            <td tabindex="1" @keydown.50="enteredvalue('2')"         @click="enteredvalue('2')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4 ">2</td>
            <td tabindex="1" @keydown.51="enteredvalue('3')"         @click="enteredvalue('3')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">3</td>
            <td tabindex="1" @keydown.Shift.187="enteredvalue('+')"  @click="enteredvalue('+')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">+</td>
          </tr>
          <tr>
            <td tabindex="1" @keydown.52="enteredvalue('4')"         @click="enteredvalue('4')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4" >4</td>
            <td tabindex="1" @keydown.53="enteredvalue('5')"         @click="enteredvalue('5')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">5</td>
            <td tabindex="1" @keydown.54="enteredvalue('6')"         @click="enteredvalue('6')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">6</td>
            <td tabindex="1" @keydown.189="enteredvalue('-')"        @click="enteredvalue('-')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">-</td>
          </tr>
          <tr>
            <td tabindex="1" @keydown.55="enteredvalue('7')"        @click="enteredvalue('7')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">7</td>
            <td tabindex="1" @keydown.56="enteredvalue('8')"        @click="enteredvalue('8')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">8</td>
            <td tabindex="1" @keydown.57="enteredvalue('9')"        @click="enteredvalue('9')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">9</td>
            <td tabindex="1" @keydown.shift.56="enteredvalue('*')"  @click="enteredvalue('*')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">*</td>
          </tr>
          <tr >
            <td tabindex="1" @keydown.ctrl.67="clearfield()"        @click="clearfield()" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4 ">C</td>
            <td tabindex="1" @keydown.48="enteredvalue('0')"        @click="enteredvalue('0')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4 ">0</td>
            <td tabindex="1" @keydown.187="result"                  @click="result" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4 ">=</td>
            <td tabindex="1" @keydown.shift.191="enteredvalue('/')" @click="enteredvalue('/')" class="border border-3 shadow p-3 mb-5 bg-body rounded fw-bolder fs-4">/</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import {ref} from "vue"
export default {
  setup(){
    const output = ref('')

    function clearfield () 
    {      
      output.value =''
    }

    function enteredvalue(value){
      output.value +=value      
      }

    function result(){
      output.value = eval(output.value)
    }

  return{
    output,
    clearfield,
    enteredvalue,
    result,
  }
  }  
}
</script>

<style>
.table {
    border-collapse: separate;
    border-spacing:30px 8px;
}
.border:active {
  
  color: #fff;
  background-color:grey !important ;
}

</style>
