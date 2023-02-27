import { Button, Card, Col, Divider, Input, Modal, Row, Typography } from "antd"
import React, { useEffect, useRef, useState } from "react"
import { Form, redirect, useLoaderData } from "react-router-dom"
import {
	createMeme,
	deleteMeme,
	getFolderDetailsByID,
	updateMeme
} from "../../services"

import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

export const folderDetailsLoader = async ({ params }) => {
	const { data } = await getFolderDetailsByID(params.id)
	return {
		folder: data.collection,
		memes: data.memes
	}
}

export const folderDetailsAction = async ({ params, request }) => {
	const formData = await request.formData()
	const img = formData.get("img")
	const memeID = formData.get("memeID")
	// Este action hace referencia a cual es el form y que intencion tenemos
	const action = formData.get("action")
	const collection = params.id

	if (action === "create") {
		await createMeme({ img, collection })
		return redirect(`/folder/${collection}`)
	} else if (action === "delete") {
		//Borrar meme en la API
		await deleteMeme(memeID)
		return redirect(`/folder/${collection}`)
	} else if (action === "update") {
		// actualizar el meme mediante su ID en la API
		await updateMeme(memeID, img)
		//Redirigir a la misma pagina para ver el meme actualizado
		return redirect(`/folder/${collection}`)
	}
}

function FolderDetails() {
	const { folder, memes } = useLoaderData()
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)

	const createFormRef = useRef()
	const updateFormRef = useRef()

	useEffect(() => {
		setShowModal(false)
		setShowEditModal(false)
		createFormRef.current?.reset()
		updateFormRef.current?.reset()
	}, [memes, createFormRef, updateFormRef])

	return (
		<>
			<Divider>
				<Typography.Title level={2}>{folder.title}</Typography.Title>
			</Divider>
			<Button
				onClick={() => setShowModal(!showModal)}
				block
				size="large"
				type="primary"
			>
				Add meme
			</Button>
			<Modal
				open={showModal}
				onCancel={() => setShowModal(false)}
				footer={null}
			>
				{/* Para que este form llegue al action de la misma pagina, tenemos que mandarlo al mismo path que la renderiza */}
				<Form
					action={`/folder/${folder._id}`}
					method="POST"
					ref={createFormRef}
				>
					<label>
						<input name="action" defaultValue="create" hidden />
						<Typography.Title level={5}>
							Image
							<Input name="img" />
						</Typography.Title>
						<Button type="primary" block htmlType="submit">
							Create meme
						</Button>
					</label>
				</Form>
			</Modal>
			<Row gutter={[16, 16]}>
				{memes.map((meme) => (
					<Col
						key={meme._id}
						sm={{ span: 24 }}
						md={{ span: 12 }}
						lg={{ span: 6 }}
					>
						<Card
							cover={<img src={meme.img} alt="meme" />}
							actions={[
								<>
									<EditOutlined
										key="edit"
										onClick={() => setShowEditModal(!showEditModal)}
									/>
									<Modal
										open={showEditModal}
										onCancel={() => setShowEditModal(false)}
										footer={null}
									>
										<Form
											action={`/folder/${folder._id}`}
											method="POST"
											ref={updateFormRef}
										>
											<label>
												<input name="action" defaultValue="update" hidden />
												<input name="memeID" defaultValue={meme._id} hidden />
												<Typography.Title level={5}>
													Image
													<Input name="img" />
												</Typography.Title>
												<Button type="primary" block htmlType="submit">
													Update meme
												</Button>
											</label>
										</Form>
									</Modal>
								</>,
								<Form action={`/folder/${folder._id}`} method="POST">
									<input name="action" defaultValue="delete" hidden />
									<input name="memeID" defaultValue={meme._id} hidden />
									<button type="submit">
										<DeleteOutlined key="delete" />
									</button>
								</Form>
							]}
						/>
					</Col>
				))}
			</Row>
		</>
	)
}

export default FolderDetails
