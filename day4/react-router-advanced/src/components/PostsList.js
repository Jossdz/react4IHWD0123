import { Col, Divider, Row } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "./Post"

function PostsList() {
	const [posts, setPosts] = useState([])

	async function fetchData() {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		)
		setPosts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<section>
			<Divider orientation="center">Posts</Divider>
			<Row gutter={[16, 24]}>
				{posts.map((post) => (
					<Col span={24} key={post.id}>
						<Post {...post} />
					</Col>
				))}
			</Row>
		</section>
	)
}

export default PostsList
