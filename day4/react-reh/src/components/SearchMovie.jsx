import React from "react"

function SearchMovie({ searchMovie }) {
	return (
		<label htmlFor="search">
			Search
			<input type="text" name="search" id="seach" onChange={searchMovie} />
		</label>
	)
}

export default SearchMovie
