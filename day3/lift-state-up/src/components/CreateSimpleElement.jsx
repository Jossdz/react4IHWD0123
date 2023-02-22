function CreateSimpleElement({ createNewElement }) {
	const submit = (e) => {
		e.preventDefault()

		const { target } = e

		createNewElement({
			inputId: target[0].value,
			inputName: target[1].value,
			inputIsComplete: target[2].checked
		})

		target.reset()
	}

	return (
		<form
			onSubmit={submit}
			style={{
				marginTop: "1rem"
			}}
		>
			<label htmlFor="id">
				Item id:
				<input type="number" name="id" id="id" min={0} />
			</label>
			<label htmlFor="name">
				Item name:
				<input type="text" name="name" id="name" />
			</label>
			<label htmlFor="isCompleted">
				Is Completed
				<input type="checkbox" name="isCompleted" id="isCompleted" />
			</label>
			<button type="submit">Submit</button>
			<button type="reset">reset</button>
		</form>
	)
}

export default CreateSimpleElement
