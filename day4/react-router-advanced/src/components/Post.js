import React from "react"

import { Card } from "antd"
import { Link } from "react-router-dom"

const { Meta } = Card

function Post({ userId, id, title, body }) {
	return (
		<Link to={`/posts/${id}`}>
			<Card>
				<Meta title={title} description={body} />
			</Card>
		</Link>
	)
}

export default Post
