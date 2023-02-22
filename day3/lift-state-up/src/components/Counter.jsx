import { useState } from "react"
import { Button } from "antd"

function Counter() {
	let [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>{counter}</h1>
			<Button
				onClick={() => {
					setCounter((c) => c + 1)
					console.log(counter)
				}}
			>
				++
			</Button>
		</div>
	)
}

export default Counter
