import React, { useState } from "react"

function CreateMovie({ createNewMovie }) {
	const [title, setTitle] = useState("")
	const [hasOscar, setHasOscar] = useState(false)
	const [genre, setGenre] = useState("action")
	const [director, setDirector] = useState("")

	const submitForm = (e) => {
		// Usamos e.preventDefault para evitar que el formulario haga su comportamiento por defecto,
		// El cual es, enviar informacion a una ruta en el servidor y refrescar la pagina.
		// Si no le especificamos un actrion en particular, refresca la misma pagina.
		e.preventDefault()
		createNewMovie(title, hasOscar, genre, director)
		setTitle("")
		setGenre("")
		setDirector("")
		setHasOscar(false)
	}

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="title">
				title
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>

			<label htmlFor="hasOscar">
				Has Oscar
				<input
					type="checkbox"
					name="hasOscar"
					id="hasOscar"
					checked={hasOscar}
					onChange={(e) => setHasOscar(e.target.checked)}
				/>
			</label>

			<label htmlFor="genre">
				genre
				<select
					name="genre"
					id="genre"
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				>
					<option value="action">Action</option>
					<option value="drama">Drama</option>
					<option value="comedy">Comedy</option>
				</select>
			</label>

			<label htmlFor="director">
				director
				<input
					type="text"
					name="director"
					id="director"
					value={director}
					onChange={(e) => setDirector(e.target.value)}
				/>
				<button type="submit">Create</button>
			</label>
		</form>
	)
}

export default CreateMovie
