import React from "react"
import { Card, Col, Row } from "antd"
import { Outlet, useLoaderData } from "react-router-dom"
import AllPosts from "../components/AllPosts"
import axios from "axios"

export const loader = async () => {
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
	return { posts: data }
}

function Posts() {
	const { posts } = useLoaderData()

	return (
		// Ponemos el maximo de alto igual que el contenido (100vh - navbar height - footer height)
		// asignamos una propiedad de alto para que el resto de elementos la puedan tener como referencia
		<Row
			gutter={16}
			style={{ maxHeight: "calc(100vh - 128.09px)", height: "100%" }}
		>
			{/* ahora podemos usar 100% del alto (del contenedor padre, como alto de la lista y hacerla scrolleable) */}
			<Col span={8} style={{ height: "100%", overflow: "scroll" }}>
				<AllPosts posts={posts} />
			</Col>
			{/* ahora podemos usar 100% del alto (del contenedor padre y como no es scrolleable siempre se mantiene en su lugar)*/}
			<Col span={16} style={{ height: "100%" }}>
				<Card style={{ height: "100%" }}>
					<Outlet />
				</Card>
			</Col>
		</Row>
	)
}

export default Posts
