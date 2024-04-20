import axios from 'axios'
import config from '../config'


export async function loginAPI(email, password) {

    const body = {
        email,
        password,
    }

    const response = await axios.post(`${config.url}/user/login`, body)

    return response.data
}


export async function registerAPI(fName, lName, salary, email, password) {

    const body = {
        fName,
        lName,
        salary,
        email,
        password
    }

    const response = await axios.post(`${config.url}/user/addUser`, body)

    return response.data
}

