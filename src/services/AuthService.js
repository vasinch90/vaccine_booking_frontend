import axios from 'axios'
const authService = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
})

export default authService