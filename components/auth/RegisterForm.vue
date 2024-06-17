<template>
    <form @submit.prevent="register">
      <Input  type="text" v-model="form.username" id="username" placeholder="Nom d'utilisateur" />
      <Input  type="email" v-model="form.email" id="email" placeholder="Email" />
      <Input type="password" v-model="form.password" id="password" placeholder="Mot de passe" />
      <Input type="password" v-model="form.confirmPassword" id="confirmPassword" placeholder="Confirmer mot de passe" :errors="errors.confirmPassword" />
      <button type="submit">Go</button>
    </form>
  </template>
  
  <script>
  import Input from '@/components/auth/Input.vue';
  import axios from 'axios';
  
  export default {
    name: 'RegisterForm',
    components: {
      Input
    },
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''

        },
        errors : {}
      };
    },
    methods: {
        validateForm() {
        this.errors = {};

        if (!this.form.username) {
        this.errors.username = 'Username is required';
        } else if (this.form.username.length < 3 || this.form.username.length > 20) {
        this.errors.username = 'Username must be between 3 and 20 characters';
        } 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.form.email) {
        this.errors.email = 'Email is required';
        } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Invalid email format';
        }

        if (!this.form.password) {
        this.errors.password = 'Password is required';
        } else if (this.form.password.length < 6 || this.form.password.length > 20) {
        this.errors.password = 'Password must be between 6 and 20 characters';
        }

        if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
        }

        return Object.keys(this.errors).length === 0;
        },
      async register() {
        if (this.validateForm()) {
        try {
          //const response = await axios.post('http://localhost:3000/auth/register', {
          //  username: this.form.username,
           // email: this.form.email,
            //password: this.form.password
          
          this.$router.push('/login');
        } catch (error) {

          console.error(error);
          if (error.response && error.response.data && error.response.data.message) {
            this.errors.server = error.response.data.message;
          } else {
            this.errors.server = 'An unexpected error occurred';
          }
        }

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
  