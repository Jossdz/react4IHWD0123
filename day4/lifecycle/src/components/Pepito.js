import React, { useEffect } from "react"

function Pepito({ candy }) {
	// Un useEffect se ejecuta tan pronto el componente se crea o actualiza
	// useEffect(() => {
	// 	console.log("asdf")
	// })

	// Acceder a cuando el componente se crea
	useEffect(() => {
		console.log("Nacio pepito")

		// cleanup function -> El componente se desmonta
		return () => {
			console.log("🪦 Pepito")
		}
	}, [])
	// 👆 Agregamos este areglo vacio para que el effecto se invoque solo en el Mount

	// Acceder a cuando se actualiza el componente
	useEffect(() => {
		console.log("Pepito se actualizo")
	}, [candy])

	return <div>Pepito tiene {candy} dulces</div>
}

export default Pepito
