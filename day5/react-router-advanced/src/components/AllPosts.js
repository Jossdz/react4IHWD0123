import { Col, Divider, Row } from "antd"
import React from "react"
import Post from "./Post"

function AllPosts({ posts }) {
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

export default AllPosts
