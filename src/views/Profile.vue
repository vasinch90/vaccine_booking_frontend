<template>
    <Nav/>
    <div class="flex flex-wrap w-full min-h-full p-10 text-gray-500">
        <div class="w-full bg-white rounded shadow">
            <div class="flex flex-wrap items-center justify-between mb-4">
                <div class="px-8 py-4 text-xl font-semibold">
                    {{ member.FIRSTNAME }} {{ member.MIDNAME }} {{ member.LASTNAME }}
                </div>
                <div class="px-8 py-4">
                    <button type="button" @click="this.$router.push({name: 'Booking'})" class="px-4 py-2 text-white bg-blue-600 rounded-sm shadow cursor-pointer hover:opacity-80">กำหนดวันรับวัคซีน</button>
                </div>
            </div>
            <div class="p-4">
                <table class="w-full border">
                    <thead>
                        <th class="p-2 bg-gray-200 border">No</th>
                        <th class="p-2 bg-gray-200 border">Date</th>
                        <th class="p-2 bg-gray-200 border">Status</th>
                    </thead>
                    <tbody v-if="booking.length == 0">
                        <tr class="font-semibold">
                            <td colspan="4" class="p-2 text-center">Booking not found.</td>
                        </tr>
                    </tbody>
                    <tbody v-if="booking.length > 0">
                        <tr v-for="(book, index) in booking" :key="index">
                            <td class="py-2 text-center border">{{ index + 1 }}</td>
                            <td class="py-2 text-center border">{{ book.DATE }}</td>
                            <td class="py-2 text-center border">{{ book.STATUS }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import http from '@/services/BackendService'

export default{
    data(){
        return{
            member: [],
            booking: [],
        }
    },
    components:{
        Nav
    },
    mounted(){
        let user = JSON.parse(localStorage.getItem('user'))
        
        http.get('booking/' + user['member'].ID).then(response => {
            this.member = response.data.member
            this.booking = response.data.booking
        })
    }
}

</script>