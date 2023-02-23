import { Typography } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PostDetails() {
	const [post, setPost] = useState({})
	const { id } = useParams()

	async function getPostDetailsData() {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		)
		setPost(data)
	}

	useEffect(() => {
		getPostDetailsData()
	}, [id])

	return (
		<div>
			<h1>{post.title}</h1>
			<Typography.Text type="secondary">
				{" "}
				by user: {post.userId}
			</Typography.Text>
			<p>{post.body}</p>
		</div>
	)
}

export default PostDetails
