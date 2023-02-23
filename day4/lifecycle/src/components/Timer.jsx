import React, { useEffect, useState } from "react"

function Timer() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			setCount((c) => c + 1)
		}, 1000)

		return () => {
			clearInterval(id)
		}
	}, [])

	return <div>Timer: {count}</div>
}

export default Timer
