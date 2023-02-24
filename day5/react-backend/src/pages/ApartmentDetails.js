import React from "react"
import { useLoaderData } from "react-router-dom"
import ApartmentCard from "../components/ApartmentCard"
import { getApartmentById } from "../service/apartment"

export const apartmentDetailsLoader = async ({ params: { id } }) => {
	const { data: apartment } = await getApartmentById(id)
	return { apartment }
}

function ApartmentDetails() {
	const { apartment } = useLoaderData()
	return <ApartmentCard {...apartment} isDetail />
}

export default ApartmentDetails
