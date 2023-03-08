<script>
import useVuelidate from '@vuelidate/core'
import { required, email, alpha, numeric } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
</script>
<template>
    <main>
        <div>
        <h1>Login Page</h1>
        <form @submit.prevent="login">
            <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
            </div>
            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    </main>    
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
 
      },
    },
  };
  </script>
