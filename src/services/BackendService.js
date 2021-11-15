import axios from 'axios'

// let token = ''

// if(localStorage.getItem('user')) {
//     let UserStorage = localStorage.getItem('user')
//     let UserStorageJSON = JSON.parse(UserStorage) 
//     token = 'Bearer ' + UserStorageJSON['token']
// }

const BackendService = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    withCredentials: true,
    headers: {
        // 'Content-type': 'application/json',
        'Content-type': 'multipart/form-data',
        'Accept': 'application/json',
        // 'Authorization': token
    }
})

// use interceptor push token in header
BackendService.interceptors.request.use(config => {
    let token = ''
    try{
        let UserStorage = localStorage.getItem('user')
        let UserStorageJSON = JSON.parse(UserStorage) 
        token = 'Bearer ' + UserStorageJSON['token']
    }catch(e){
        console.log(e)
    }

    if(token){
        config.headers.Authorization = token
    }

    return config
})

export default BackendService