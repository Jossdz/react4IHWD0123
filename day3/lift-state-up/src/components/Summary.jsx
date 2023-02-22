function Summary({ tasks }) {
	// let done = 0

	// tasks.forEach((element) => {
	// 	if (element.done) done++
	// })

	// const done = tasks.reduce((prev, current) => {
	// 	if (current.done) {
	// 		return prev + 1
	// 	} else {
	// 		return prev
	// 	}
	// }, 0)

	const done = tasks.reduce(
		(prev, current) => (current.done ? prev + 1 : prev),
		0
	)

	console.log(done)

	return (
		<div>
			<h3>Total: {tasks.length}</h3>
			<h3>Completed: {done}</h3>
		</div>
	)
}

export default Summary
