import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const addProduct = payload => api.post(`/product`, payload)
export const logIn = payload => api.post(`/login`, payload)
// export const getAllPets = () => api.get(`/pets`)
// export const updatePetById = (id, payload) => api.put(`/pet/${id}`, payload)
// export const deletePetById = id => api.delete(`/pet/${id}`)
// export const getPetById = id => api.get(`/pet/${id}`)

const apis = {
    addProduct,
    logIn
}

export default apis