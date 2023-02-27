import React from "react"
import { Card } from "antd"
import { Link } from "react-router-dom"

function FolderCard({ title, description, _id }) {
	return (
		<Card title={title} extra={<Link to={`/folder/${_id}`}>Details</Link>}>
			{description}
		</Card>
	)
}

export default FolderCard
