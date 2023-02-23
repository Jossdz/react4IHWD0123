import React from "react"

function CharCard({ name, status, image }) {
	return (
		<article>
			<h2>{name}</h2>
			{status === "Alive" && "✅"}
			{status === "Dead" && "🪦"}
			{status === "unknown" && "🚫"}

			<img src={image} alt={name} width="200px" />
		</article>
	)
}

export default CharCard
