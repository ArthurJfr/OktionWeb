<template>
    <button class="custom-button" @click="navigate">
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'NavButton',
    props: {
      buttonText: {
        type: String,
        required: true,
       
      },
      buttonLink: {
        type: String,
        required: true
      }
    },
    methods: {
      navigate() {
        this.$router.push(this.buttonLink);
      }
    }
  }
  </script>
  
  <style scoped> 
  .custom-button {
    padding: 10px 20px;
    width: 200px;
    height: 50px;
    font-size: 20px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .custom-button:hover {
    background-color: lightblue;
    color: black;
  }
  </style>
  