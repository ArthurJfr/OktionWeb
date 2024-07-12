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
          const response = await axios.post('http://localhost:4000/auth/login', this.form);
          const token = response.data.token;

          const expiryDate = new Date().getTime() + 24 * 60 * 60 * 1000;

          localStorage.setItem('token', token);
          localStorage.setItem('expiryDate', expiryDate);

          this.$router.push('/dashboard/overview');
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
  