import axios from 'axios'
import { API } from '../../config'
import { getCookie } from './auth'

const token = getCookie('token')

export const userCart = (product) => {
    return axios.post(`${API}/cart/userCart`,
        product,
        { headers: { Authorization: `Bearer ${token}` } })
}

export const createOrder = (order) => {
    return axios.post(`${API}/order/userOrder`,
        order,
        { headers: { Authorization: `Bearer ${token}` } })
}