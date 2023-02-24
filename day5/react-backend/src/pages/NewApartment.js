import { Button, Col, Input, Row } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import { createNewApartment } from "../service/apartment"

function NewApartment() {
	const navigate = useNavigate()
	async function createElement(e) {
		e.preventDefault()

		console.dir(e.target)

		const img = e.target[0].value
		const title = e.target[1].value
		const pricePerDay = e.target[2].value

		await createNewApartment({ img, title, pricePerDay })

		navigate("/")

		console.log(img, title, pricePerDay)
	}
	return (
		<Row justify="center">
			<Col span={20}>
				<form onSubmit={createElement}>
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
				</form>
			</Col>
		</Row>
	)
}

export default NewApartment
