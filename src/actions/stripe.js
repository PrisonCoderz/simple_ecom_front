import axios from "axios";
import { API } from "config";
import { getCookie } from './auth'

const token = getCookie('token')

export const createPaymentIntent = () => {
    return axios.post(`${API}/stripe-payment`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
    )
}