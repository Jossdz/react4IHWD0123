import { Card, Col } from "antd"
import Meta from "antd/es/card/Meta"
import { Link } from "react-router-dom"
import React from "react"

function ApartmentCard({
	img,
	pricePerDay,
	id,
	title,
	createdAt,
	updatedAt,
	isDetail
}) {
	console.log(id)
	return (
		<Col
			sm={{ span: 24 }}
			md={{ span: isDetail ? 14 : 12 }}
			lg={{ span: isDetail ? 14 : 4 }}
			style={{ width: "100%" }}
		>
			<Link to={`/${id}`}>
				<Card
					cover={
						<img
							alt={title}
							src={img}
							style={{ width: "100%", aspectRatio: 1 / 1, objectFit: "cover" }}
						/>
					}
				>
					<Meta title={title} description={pricePerDay} />
				</Card>
			</Link>
		</Col>
	)
}

export default ApartmentCard
