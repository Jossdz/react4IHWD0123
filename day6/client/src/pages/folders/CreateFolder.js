import { Button, Col, Input, Row, Typography } from "antd"
import FormItem from "antd/es/form/FormItem"
import React from "react"
import { Form, redirect } from "react-router-dom"
import { createFolder } from "../../services"

export const createFolderAction = async ({ request }) => {
	// destructuramos el request para poder tambien extraer de ahi el formData
	const formData = await request.formData()
	// extraer propiedades del form con el metodo get del formData
	const title = formData.get("title")
	const description = formData.get("description")

	await createFolder({ title, description })

	return redirect("/")
}

function CreateFolder() {
	return (
		<Row justify="center">
			<Col sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 12 }}>
				<Form action="/create-folder" method="POST">
					<label>
						<Typography.Title level={5}>Title</Typography.Title>
					</label>
					<Input name="title" />

					<label>
						<Typography.Title level={5}>Description</Typography.Title>
					</label>
					<Input name="description" />

					<Button
						block
						type="primary"
						htmlType="submit"
						style={{ marginTop: "1rem" }}
					>
						Create folder
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default CreateFolder
