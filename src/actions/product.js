import axios from 'axios'
import { API } from '../../config'
import { getCookie } from './auth'

const token = getCookie('token')

export const createProduct = (product) => {
    return axios.post(`${API}/product`,
        product,
        { headers: { Authorization: `Bearer ${token}` } }
    )
}
export const readProduct = slug => {
    return axios.get(`${API}/product/${slug}`)
}
export const updateProduct = (product,slug) => {
    return axios.put(`${API}/product/${slug}`,
        product,
        { headers: { Authorization: `Bearer ${token}` } }
    )
}
export const deleteProduct = (slug) => {
    return axios.delete(`${API}/product/${slug}`,
        { headers: { Authorization: `Bearer ${token}` } }
    )
}