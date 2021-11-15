<template>
    <div class="flex flex-wrap items-center justify-center w-full p-4 bg-green-300">
        <div class="p-4 bg-yellow-100 rounded-sm shadow">
            <div class="px-8 py-4 text-2xl font-semibold text-blue-600">Vaccine Management</div>
            <form @submit.prevent="register">
                <div class="my-2">
                    <label for="citizen">Citized ID / Passport ID</label>
                    <input type="text" id="citizen" v-model="citizen" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.citizen.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.citizen.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.password.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.password.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="firstname">Firstname</label>
                    <input type="text" id="firstname" v-model="firstname" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.firstname.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.firstname.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="midname">Midname</label>
                    <input type="text" id="midname" v-model="midname" class="w-full p-2 rounded-sm shadow">
                </div>
                <div class="my-2">
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" v-model="lastname" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.lastname.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.lastname.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="birthdate">Birth date</label>
                    <input type="date" id="birthdate" v-model="birthdate" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.birthdate.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.birthdate.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="nation">Nation</label>
                    <input type="text" id="nation" v-model="nation" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.nation.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.nation.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="home_address">Home address</label>
                    <input type="text" id="home_address" v-model="home_address" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.home_address.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.home_address.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="contact_address">Contact address</label>
                    <input type="text" id="contact_address" v-model="contact_address" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.contact_address.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.contact_address.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="phone">Phone No.</label>
                    <input type="text" id="phone" v-model="phone" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.phone.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.phone.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="contact_person">Contact person</label>
                    <input type="text" id="contact_person" v-model="contact_person" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.contact_person.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.contact_person.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="bloodtype">Blood type</label>
                    <input type="text" id="bloodtype" v-model="bloodtype" class="w-full p-2 rounded-sm shadow">
                    <div v-if="v$.bloodtype.$error" class="mt-2 text-sm text-red-500">
                        {{ v$.bloodtype.$errors[0].$message }}
                    </div>
                </div>
                <div class="my-2">
                    <label for="symptom">Symptom</label>
                    <input type="text" id="symptom" v-model="symptom" class="w-full p-2 rounded-sm shadow">
                </div>
                <div>
                    <input type="submit" value="Save" class="px-4 py-2 my-2 text-white bg-green-600 rounded-md shadow cursor-pointer hover:opacity-80">
                    <button type="button" class="px-4 py-2 my-2 ml-2 text-white bg-gray-600 rounded-md shadow cursor-pointer hover:opacity-80" @click="this.$router.push({name: 'Login'})">Cancle</button>
                </div>
            </form>
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
            citizen: '',
            password: '',
            firstname: '',
            midname: '',
            lastname: '',
            birthdate: '',
            nation: '',
            home_address: '',
            contact_address: '',
            phone: '',
            contact_person: '',
            bloodtype: '',
            symptom: '',
        }
    },
    validations(){
        return {
            citizen: {
                required: helpers.withMessage('citizen invalid.', required), 
            },
            password: {
                required: helpers.withMessage('password invalid.', required),
            },
            firstname: {
                required: helpers.withMessage('firstname invalid.', required),
            },
            lastname: {
                required: helpers.withMessage('lastname invalid.', required),
            },
            birthdate: {
                required: helpers.withMessage('birthdate invalid.', required),
            },
            nation: {
                required: helpers.withMessage('nation invalid.', required),
            },
            home_address: {
                required: helpers.withMessage('home_address invalid.', required),
            },
            contact_address: {
                required: helpers.withMessage('contact_address invalid.', required),
            },
            phone: {
                required: helpers.withMessage('phone invalid.', required),
            },
            contact_person: {
                required: helpers.withMessage('contact_person invalid.', required),
            },
            bloodtype: {
                required: helpers.withMessage('bloodtype invalid.', required),
            },
        }
    },
    methods:{
        register(){
            this.v$.$validate();
            if(!this.v$.$error){
                let data = new FormData();
                data.append('citizen', this.citizen)
                data.append('password', this.password)
                data.append('firstname', this.firstname)
                data.append('midname', this.midname)
                data.append('lastname', this.lastname)
                data.append('birthdate', this.birthdate)
                data.append('nation', this.nation)
                data.append('home_address', this.home_address)
                data.append('contact_address', this.contact_address)
                data.append('phone', this.phone)
                data.append('contact_person', this.contact_person)
                data.append('bloodtype', this.bloodtype)
                data.append('symptom', this.symptom)

                http.post('member', data).then(response => {
                    // console.log(response)
                    if(response.status == 201){
                        http.post('login', {
                            "user": this.citizen,
                            "pass": this.password
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