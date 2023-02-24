import axios from "axios"
const BASE_URL = "http://localhost:3000/apartments"

const apartmentService = axios.create({
	baseURL: BASE_URL
})

export const getAllApartments = async () => await apartmentService.get()
export const getApartmentById = async (id) =>
	await apartmentService.get(`/${id}`)

export const createNewApartment = async (data) =>
	await apartmentService.post("/", data)
