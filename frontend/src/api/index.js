import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

 const register = payload => api.post(`/register`, payload)
 const logIn = payload => api.post(`/login`, payload)
 const addProduct = payload => api.post(`/product`, payload)
 const searchProduct = name => api.get(`/products/${name}`)

// export const getAllPets = () => api.get(`/pets`)
// export const updatePetById = (id, payload) => api.put(`/pet/${id}`, payload)
// export const deletePetById = id => api.delete(`/pet/${id}`)
// export const getPetById = id => api.get(`/pet/${id}`)

const apis = {
    addProduct,
    register,

    logIn,
    searchProduct
}

export default apis