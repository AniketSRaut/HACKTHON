import axios from 'axios'
import config from '../config'


export async function createAPI(proName, proPrice) {

    const body = {
        proName,
        proPrice,
    }

    const response = await axios.post(`${config.url}/product/addProduct`, body)

    return response.data
}


export async function getAllAPI() {

    // const body = {
    //     fName,
    //     lName,
    //     salary,
    //     email,
    //     password
    // }

    const response = await axios.get(`${config.url}/product/getAllActive`)

    return response.data
}


export async function deleteAPI(DelId) {

     const id = DelId
       

    const response = await axios.delete(`${config.url}/product/delete/${id}`)

    return response.data
}


export async function updateAPI(updateId,body) {

     const id = updateId
    //  console.log("bisy",body)
       

    const response = await axios.put(`${config.url}/product/update/${id}`,body)

    return response.data
}

// product/getById/4


export async function getByIdAPI(getId) {

     const id = getId

    
       

    const response = await axios.get(`${config.url}/product/getById/${id}`)

    return response.data
}


