<template>
    <div class="flex flex-wrap items-center justify-center w-full h-screen bg-green-300">
        <div class="p-4 bg-yellow-100 rounded-sm shadow">
            <div class="px-8 py-4 text-2xl font-semibold text-blue-600">Vaccine Management</div>
            <form @submit.prevent="login">
                <div class="my-2">
                    <input type="text" placeholder="Username" v-model="user" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.user.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.user.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <input type="password" placeholder="Password" v-model="pass" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.pass.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.pass.$errors[0].$message }}
                    </div>
                </div>
                <div>
                    <input type="submit" save="Login" class="w-full py-2 my-2 text-white bg-green-600 rounded-md shadow cursor-pointer hover:opacity-80">
                </div>
            </form>
            <hr class="my-2 border border-gray-300">
            <div>
                <button type="button" class="w-full py-2 my-2 text-white bg-blue-600 rounded-md shadow cursor-pointer hover:opacity-80" @click="this.$router.push({name: 'Register'})">ลงทะเบียน</button>
            </div>
        </div>
    </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import http from '@/services/AuthService'

export default{
    data(){
        return{
            v$: useVuelidate(),
            user: '',
            pass: '',
        }
    },
    validations(){
        return {
            user: {
                required: helpers.withMessage('Uername invalid.', required), 
            },
            pass: {
                required: helpers.withMessage('Password invalid.', required),
            }
        }
    },
    methods:{
        login(){
            this.v$.$validate();
            if(!this.v$.$error){
                http.post('login', {
                    "user": this.user,
                    "pass": this.pass
                }).then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data))
                    this.$router.push({name: 'Profile'})
                }).catch(error => {
                    if(error.response){
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    }
                })
            }
        }
    }
}

</script>