import axios from "axios"
import React, { useEffect, useState } from "react"
import CharCard from "./CharCard"

function Characters() {
	const [characters, setCharacters] = useState([])
	// Cuando el componente se monte, queremos que pida a la API los datos de los personajes de R&M

	// useEffect(() => {
	// 	fetch("https://rickandmortyapi.com/api/character")
	// 		.then((res) => {
	// 			res.json().then((data) => {
	// 				console.log(data)
	// 			}).catch()
	// 		})
	// 		.catch((err) => console.log(err))
	// }, [])
	// 👆 Arreglo de dependencias (Le indica al efecto cuando se debe re-ejecutar. Si esta vacio, solo lo hace cuando el componente se monta)

	// async function getData() {
	// 	try {
	// 		const res = await fetch("https://rickandmortyapi.com/api/character") // ⏸️
	// 		const data = await res.json() // ⏸️
	// 		console.log(data)
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }

	async function getData() {
		try {
			const { data } = await axios.get(
				"https://rickandmortyapi.com/api/character"
			) // ⏸️
			setCharacters(data.results)
		} catch (err) {
			console.log(err)
		}
	}

	// UseEffect tiene la regla de que no puede ser una funcion asincrona.
	useEffect(() => {
		getData()
	})

	return (
		<div>
			<h1>Characters: </h1>
			{characters.map((c) => (
				<CharCard key={c.id} {...c} />
			))}
		</div>
	)
}

export default Characters
