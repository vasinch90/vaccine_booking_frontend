<template>
    <Nav/>
    <div class="flex flex-wrap w-full min-h-full p-10 text-gray-500">
        <div class="w-full p-4 bg-white rounded shadow">
            <div class="text-2xl font-semibold text-gray-500">Booking</div>
            <form @submit.prevent="addBooking">
                <div class="w-full p-8">
                    <div class="flex flex-wrap items-center p-2">
                        <div class="w-1/6">Date</div>
                        <div class="w-1/5">
                            <input type="datetime-local" v-model="date" class="w-full px-4 border">
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center p-2">
                        <div class="w-1/6">
                            Vaccine
                        </div>
                        <div class="w-1/5">
                            <select v-model="vaccine" class="w-full px-4 border">
                                <option value="">Choose vaccine</option>
                                <option v-for="(vac, index) in vaccineList" :key="index" :value="vac.ID">
                                    {{ vac.NAME }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center p-2">
                        <div class="w-1/6"></div>
                        <div class="w-1/5">
                            <input type="submit" value="Save" class="w-full px-4 py-2 text-white bg-green-500 rounded shadow cursor-pointer hover:opacity-80">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import http from '@/services/BackendService'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default{
    data(){
        return{
            v$: useVuelidate(),
            user: [],
            vaccineList: [],
            vaccine: '',
            date: '',
        }
    },
    components:{
        Nav
    },
    validations(){
        return {
            date: {
                required: helpers.withMessage('Date invalid.', required), 
            },
            vaccine: {
                required: helpers.withMessage('Vaccine invalid.', required), 
            },
        }
    },
    mounted(){
        http.get('vaccine-list').then((response) => {
            this.user = JSON.parse(localStorage.getItem('user'))
            this.vaccineList = response.data
        })
    },
    methods:{
        addBooking(){
            this.v$.$validate();
            if(!this.v$.$error){
                let data = new FormData();
                data.append('memberid', this.user.member.ID)
                data.append('appointdate', this.date)
                data.append('vacid', this.vaccine)

                http.post('add-booking', data).then((response) => {
                    console.log(response)
                })
            }
        }
    }
}

</script>