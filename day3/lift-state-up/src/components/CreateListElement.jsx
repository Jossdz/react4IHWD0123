import React, { useState } from "react"

function CreateListElement({ createNewElement }) {
	const [inputName, setInputName] = useState("")
	const [inputId, setInputId] = useState("")
	const [inputIsComplete, setInputIsComplete] = useState(false)

	const submit = (e) => {
		e.preventDefault()
		createNewElement({ inputName, inputId, inputIsComplete })
		setInputName("")
		setInputId("")
		setInputIsComplete(false)
	}

	return (
		<form
			onSubmit={submit}
			style={{
				marginTop: "1rem"
			}}
		>
			<label htmlFor="id">Item id:</label>
			<input
				type="number"
				name="id"
				id="id"
				min={0}
				// Sincronizamos el valor del estado con el valor del input en html
				value={inputId}
				// Cuando el usuario escribe en el input, ese valor lo seteamos en el estado, esto cambia el estado y por ende cambia tambien el valor del input en html.
				onChange={(e) => setInputId(e.target.value)}
			/>
			<label htmlFor="name">Item name:</label>
			<input
				type="text"
				name="name"
				id="name"
				value={inputName}
				onChange={(e) => setInputName(e.target.value)}
			/>
			<label htmlFor="isCompleted">Is Completed</label>
			<input
				type="checkbox"
				name="isCompleted"
				id="isCompleted"
				checked={inputIsComplete}
				onChange={(e) => {
					setInputIsComplete(e.target.checked)
					console.dir(e.target.checked)
				}}
			/>
			<button type="submit">Submit</button>
			{/* <button type="reset">reset</button> */}
		</form>
	)
}

// Form simplificado

// function CreateListElement({ createNewElement }) {
// 	const submit = (e) => {
// 		e.preventDefault()
// 		console.dir(e.target)
// 		createNewElement({
// 			inputId: e.target[0].value,
// 			inputName: e.target[1].value,
// 			inputIsComplete: e.target[2].checked
// 		})
// 	}

// 	return (
// 		<form
// 			onSubmit={submit}
// 			style={{
// 				marginTop: "1rem"
// 			}}
// 		>
// 			<label htmlFor="id">Item id:</label>
// 			<input type="number" name="id" id="id" min={0} />
// 			<label htmlFor="name">Item name:</label>
// 			<input type="text" name="name" id="name" />
// 			<label htmlFor="isCompleted">Is Completed</label>
// 			<input type="checkbox" name="isCompleted" id="isCompleted" />
// 			<button type="submit">Submit</button>
// 			<button type="reset">reset</button>
// 		</form>
// 	)
// }

export default CreateListElement
