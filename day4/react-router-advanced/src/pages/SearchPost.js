import { Button, Card, Col, Input, Row, Typography } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function SearchPost() {
	const [searchTerm, setSearchTerm] = useState("")
	const [query, setQuery] = useSearchParams()
	const [post, setPost] = useState(null)
	const [error, setError] = useState(null)

	function search() {
		setQuery({ id: searchTerm })
	}

	async function getPostData(id) {
		try {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			)
			setPost(data)
			setError(null)
		} catch (err) {
			setError(err.response.status === 404 && "Post not found")
		}
	}

	useEffect(() => {
		const id = query.get("id")

		if (id) {
			getPostData(id)
		} else {
			console.log("no hay busquedas aun")
		}
	}, [query])

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
