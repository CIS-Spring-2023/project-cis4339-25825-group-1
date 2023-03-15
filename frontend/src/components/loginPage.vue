<script>
import useVuelidate from '@vuelidate/core'
import { required, email, alpha, numeric } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      // perform login logic here
    }
  }
}
</script>
  <template>
    <br><br>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center ">Login Page</h1>
    <div class="bg-white-100 min-h-screen flex flex-col justify-start items-center mt-10">
      <form class="bg-white rounded-lg shadow-md p-10" @submit.prevent="login">
        <div class="flex flex-col mb-4">
          <label for="email" class="text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" class="border-gray-300 border rounded-md p-2" style="width: 500px" v-model="email" required />
        </div>
        <div class="flex flex-col mb-6">
          <label for="password" class="text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" class="border-gray-300 border rounded-md p-2" style="width: 500px" v-model="password" required />
        </div>
        <button type="submit" class="bg-red-700 text-white rounded">
          Login
        </button>
      </form>
    </div>
  </template>


 