import { Button, Card, Col, Input, Row, Typography } from "antd"
import axios from "axios"
import React, { useState } from "react"
import { useLoaderData, useSearchParams } from "react-router-dom"

export async function searchPostLoader({ request }) {
	const url = new URL(request.url)
	const id = url.searchParams.get("id")
	let post = {}

	if (id) {
		try {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			)
			post = data
		} catch (e) {
			return {
				error: e.response.status === 404 ? "Post not found" : "Error on the api"
			}
		}
	}

	return { post }
}

function SearchPost() {
	const [searchTerm, setSearchTerm] = useState("")
	const [query, setQuery] = useSearchParams()
	// const [error, setError] = useState(null)
	// const [post, setPost] = useState(null)
	const { post, error } = useLoaderData()

	function search() {
		setQuery({ id: searchTerm })
	}

	// {
	// async function getPostData(id) {
	// 	try {
	// 		const { data } = await axios.get(
	// 			`https://jsonplaceholder.typicode.com/posts/${id}`
	// 		)
	// 		setPost(data)
	// 		setError(null)
	// 	} catch (err) {
	// 		setError(err.response.status === 404 && "Post not found")
	// 	}
	// }

	// useEffect(() => {
	// 	const id = query.get("id")

	// 	if (id) {
	// 		getPostData(id)
	// 	} else {
	// 		console.log("no hay busquedas aun")
	// 	}
	// }, [query])
	// }

	return (
		<Row>
			<Col span={18} offset={4}>
				{error && <Typography.Text type="danger">{error}</Typography.Text>}
				<Input
					value={searchTerm}
					placeholder="Search post by ID"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<Button onClick={search}>Search</Button>
			</Col>
			<Col span={18} offset={4}>
				{post && <Card title={post.title}>{post.body}</Card>}
			</Col>
		</Row>
	)
}

export default SearchPost
