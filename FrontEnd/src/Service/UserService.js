import axios from 'axios'
import config from '../config'


export async function loginAPI(email, password) {

    const body = {
        email,
        password,
    }

    const response = await axios.post(`${config.url}/user/userLogin`, body)

    return response.data
}


export async function registerAPI(fullName, email, password, phoneNo) {

    const body = {
        fullName, email, password, phoneNo
    }

    const response = await axios.post(`${config.url}/user/registerUser`, body)

    return response.data
}

