import React, { useState } from "react"
import CreateMovie from "./CreateMovie"
import MovieList from "./MovieList"
import SearchMovie from "./SearchMovie"

function Movies() {
	const [movies, setMovies] = useState([])
	const [allMovies, setAllMovies] = useState([])

	const createNewMovie = (title, hasOscar, genre, director) => {
		setMovies([...movies, { title, hasOscar, genre, director }])
		setAllMovies([...movies, { title, hasOscar, genre, director }])
	}

	const searchMovie = (e) => {
		const searchTerm = e.target.value
		if (!searchTerm) {
			setMovies(allMovies)
		} else {
			setMovies(movies.filter((movie) => movie.title.includes(searchTerm)))
		}
	}

	return (
		<div>
			<CreateMovie createNewMovie={createNewMovie} />

			<SearchMovie searchMovie={searchMovie} />

			<MovieList movies={movies} />
		</div>
	)
}

export default Movies
