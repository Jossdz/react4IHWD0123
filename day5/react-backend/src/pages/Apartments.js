import { Divider, Row } from "antd"
import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import ApartmentCard from "../components/ApartmentCard"
import { getAllApartments } from "../service/apartment"

export const apartmentsLoader = async () => {
	const { data: apartments } = await getAllApartments()
	return { apartments }
}

function Apartments() {
	const { apartments } = useLoaderData()
	return (
		<>
			<Divider>Apartments</Divider>

			<Row gutter={[16, 24]}>
				{apartments.map((a) => (
					<ApartmentCard key={a.id} {...a} />
				))}
			</Row>
		</>
	)
}

export default Apartments
