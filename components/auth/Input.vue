<template>
    <div>
              <input class="input" :type="type" :id="id" v-model="inputValue" @input="$emit('input', inputValue)" :placeholder="placeholder" />
              <span v-if="errors" class="error">{{ errors }}</span>

    </div>
    
  </template>
  
  <script>
  export default {
    name: 'Input',
    props: {

      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      id: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      errors: {
      type: String,
      default: ''
    }
    },
    data() {
      return {
        inputValue: this.value
      };
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue;
      }
    }
  }
  </script>
  
  <style scoped>
.input{
    font-size: 20px;
    width: 350px;
    padding: 1rem 2rem;
    border: 2px solid black;
    border-radius: 16px;
}
  </style>
  