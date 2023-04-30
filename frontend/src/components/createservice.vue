<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API

export default{
    data(){
        return {
            service:{
                name: '',
                status: '',
                description: ''
            }
            
        }
    },
    methods: {
        async handleSubmitForm() {
            axios
            .post(`${apiURL}/services`, this.service)
            .then(() => {
                alert('Service has been added.')
                this.$router.push({ name: 'services' })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<template>
<br><br>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center ">Add Services Page</h1>
    <div class="bg-white-100 min-h-screen flex flex-col justify-start items-center mt-10">
      <form @submit.prevent="handleSubmitForm" >
        <div class="flex flex-col mb-4">
          <label for="name" class="text-gray-700 font-bold mb-2">Name</label>
          <input type="text" name="name" class="border-gray-300 border rounded-md p-2" style="width: 500px" v-model="service.name" required />
        </div>
        <div class="flex flex-col mb-6">
          <label for="status" class="text-gray-700 font-bold mb-2">Availability Status</label>
          <input type="text" name="status" class="border-gray-300 border rounded-md p-2" style="width: 500px" v-model="service.status" required />
        </div>
        <div class="flex flex-col mb-4">
          <label for="description" class="text-gray-700 font-bold mb-2">Description</label>
          <input type="text" name="description" class="border-gray-300 border rounded-md p-2" style="width: 500px" v-model="service.description"/>
        </div>
        <div>
            <button type="submit" class="bg-red-700 text-white rounded" >
            Submit
            </button>
        </div>
        <div class="mt-4">
            <button type="button" class="bg-blue-700 text-white rounded" @click="$router.back()">
            Go Back
            </button>
        </div>    
      </form>
      
    </div>
</template>