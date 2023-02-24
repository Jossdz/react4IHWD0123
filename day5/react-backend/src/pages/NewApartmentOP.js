import { Button, Col, Input, Row } from "antd"
import React from "react"
import { Form, redirect } from "react-router-dom"
import { createNewApartment } from "../service/apartment"

export const newApartmentAction = async ({ request }) => {
	let formData = await request.formData()
	const img = formData.get("img")
	const title = formData.get("title")
	const pricePerDay = formData.get("pricePerDay")

	await createNewApartment({ img, title, pricePerDay }) // ⏸️
	return redirect("/")
}

function NewApartmentOP() {
	return (
		<Row justify="center">
			<Col span={20}>
				<Form method="post" action="/create">
					<label htmlFor="img">
						Image
						<Input type="text" name="img" id="img" />
					</label>
					<label htmlFor="title">
						Title
						<Input type="text" name="title" id="title" />
					</label>
					<label htmlFor="pricePerDay">
						Price Per day
						<Input type="number" name="pricePerDay" id="pricePerDay" />
					</label>
					<Button
						htmlType="submit"
						type="primary"
						block
						style={{ marginTop: "1rem" }}
					>
						Create
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default NewApartmentOP
