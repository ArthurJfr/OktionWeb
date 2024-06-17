<template>
    <form @submit.prevent="login">
      <Input  type="email" v-model="form.email" id="email" placeholder="Email" />
      <Input  type="password" v-model="form.password" id="password" placeholder="Mot de passe" />
      <button type="submit">Go</button>
    </form>
  </template>
  
  <script>
  import Input from '@/components/auth/Input.vue';
  import axios from 'axios';
  
  export default {
    name: 'LoginForm',
    components: {
      Input
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async login() {
        try {
         // const response = await axios.post('http://localhost:3000/auth/login', this.form);
          //const token = response.data.token;
          //localStorage.setItem('token', token);
          this.$router.push('/');
        } catch (error) {
          console.error(error);
          // Handle login error (e.g., show error message)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  
  button {
    padding: 10px 20px;
    width: 200px;
    height: 50px;
    font-size: 20px;
    background-color: var(--primary-color);
    color: white;
    width:  150px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.5s;
    margin-top: 2rem;;
  }
  
  button:hover {
    
    background-color: lightblue;
    color: black;
  }
  </style>
  