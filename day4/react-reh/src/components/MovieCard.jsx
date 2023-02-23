import React from "react"

function MovieCard({ title, hasOscar, genre, director }) {
	return (
		<article>
			<h3>
				{title} - {hasOscar ? "🏆" : "💩"}
			</h3>
			<p>{genre}</p>
			<p>Director: {director}</p>
		</article>
	)
}

export default MovieCard
