import { useState } from "react"

function Counter() {
	let [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>{counter}</h1>
			<button
				onClick={() => {
					setCounter((c) => c + 1)
					console.log(counter)
				}}
			>
				++
			</button>
		</div>
	)
}

export default Counter
