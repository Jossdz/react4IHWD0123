import { Typography } from "antd"
import axios from "axios"
import { useLoaderData } from "react-router-dom"

export const postDetailsLoader = async ({ params: { id } }) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	)
	return { post: data }
}

function PostDetails() {
	const { post } = useLoaderData()
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
