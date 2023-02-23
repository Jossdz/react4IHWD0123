import React from "react"
import MovieCard from "./MovieCard"

function MovieList({ movies }) {
	return (
		<section>
			{movies.map((movie) => (
				<MovieCard key={movie.title} {...movie} />
			))}
		</section>
	)
}

export default MovieList
